<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <div class="d-flex justify-content-between">
    <h3>優惠券</h3>
    <div class="d-flex">
      <form class="me-3">
        <div class="input-group">
          <input class="form-control form-control-sm" type="search" placeholder="請輸入優惠券名稱"
          :value="searchInput" @change="searchInput = $event.target.value" aria-label="Search">
          <button class="btn btn-secondary input-group-text" type="submit"><i class="bi bi-search"></i></button>
        </div>
      </form>
      <div class="text-end">
        <button class="btn btn-primary text-white" @click.prevent="openModal(true)">新增優惠券</button>
      </div>
    </div>
  </div>
  <div class="bg-light border rounded mt-3 shadow">
    <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>優惠碼</th>
            <th>打折</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in searchData" :key="item.id">
                <td>{{item.title}}</td>
                <td>{{item.code}}</td>
                <td>{{item.percent}}%</td>
                <td>{{$filters.date(item.due_date)}}</td>
                <td>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                    v-model="item.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label" for="flexSwitchCheckChecked">{{ item.is_enabled ? '啟用' : '未啟用' }}</label>
                  </div>
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(false, item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm" @click.prevent="delModal(item)">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
  <CouponsModal ref="couponsModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponsModal>
  <DelCouponsModal ref="delCouponsModal" :item="tempCoupon" @del-item="delCoupon"></DelCouponsModal>
  <PaginationCom :pages="pagination" @update-page="getCoupons" v-if="!searchInput"></PaginationCom>
</template>

<script>
import CouponsModal from '../components/CouponsModal.vue'
import PaginationCom from '@/components/PaginationCom.vue'
import DelCouponsModal from '../components/DelCouponsModal.vue'

export default {
  data () {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isNew: false,
      isLoading: false,
      searchInput: ''
    }
  },
  created () {
    this.getCoupons()
    this.searchInput = ''
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/coupons?page=${page}`
      this.axios.get(api).then((res) => {
        this.isLoading = false
        this.coupons = res.data.coupons
        this.pagination = res.data.pagination
        const totalPages = res.data.pagination.total_pages
        if (res.data.pagination.has_next) {
          for (let i = 2; i <= totalPages; i++) {
            this.getAllCoupons(i)
          }
        }
      })
    },
    getAllCoupons (page) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/coupons?page=${page}`
      this.axios.get(api).then((res) => {
        this.coupons = this.coupons.concat(res.data.coupons)
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {}
        this.$refs.couponsModal.due_date = ''
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      this.$refs.couponsModal.showModal()
    },
    updateCoupon (item) {
      this.isLoading = true
      this.tempCoupon = item
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      this.axios[httpMethod](api, { data: this.tempCoupon }).then((res) => {
        this.isLoading = false
        this.$refs.couponsModal.hideModal()
        this.getCoupons(this.pagination.current_page)
        this.PushMessageState(res, '更新')
      })
    },
    delModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.delCouponsModal.showModal()
    },
    delCoupon (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/coupon/${item.id}`
      this.axios.delete(api).then((res) => {
        this.isLoading = false
        this.$refs.delCouponsModal.hideModal()
        this.getCoupons(this.pagination.current_page)
        this.PushMessageState(res, '刪除')
      })
    }
  },
  computed: {
    searchData () {
      const regex = new RegExp(this.searchInput, 'gi')
      return this.coupons.filter((item) => {
        return (item.title).match(regex)
      })
    }
  },
  components: {
    CouponsModal,
    DelCouponsModal,
    PaginationCom
  },
  inject: ['emitter', 'PushMessageState']
}
</script>
