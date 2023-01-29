<template>
   <LoadingCom :active="isLoading"></LoadingCom>
   <div class="d-flex justify-content-between">
    <h3>訂單</h3>
    <form class="me-3">
      <div class="input-group">
        <input class="form-control form-control-sm" type="search" placeholder="請輸入訂單編號"
        :value="searchInput" @change="searchInput = $event.target.value" aria-label="Search">
        <button class="btn btn-secondary input-group-text" type="submit"><i class="bi bi-search"></i></button>
      </div>
    </form>
   </div>
   <div class="bg-light border rounded mt-3 shadow">
     <table class="table table-sm mt-3">
       <thead>
         <tr>
           <th>訂單編號</th>
           <th>購買時間</th>
           <th>購買人</th>
           <th>
            <div>購買品項</div>
           </th>
           <th>應付金額</th>
           <th class="text-nowrap">
            <div class="d-none d-md-block">是否付款</div>
          </th>
           <th>編輯</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="order in searchData" :key="order.id" class="fs-7">
           <td>{{ (order.id).substring(1,8) }}</td>
           <td>{{ $filters.date(order.create_at) }}</td>
           <td>{{ order.user.name }}</td>
           <td>
            <div v-for="item in order.products" :key="item.id">
              {{ item.product.title}} x {{ item.qty }}
            </div>
           </td>
           <td>{{ $filters.currency(order.total) }}</td>
           <td>
             <div class="form-check form-switch d-none d-md-block">
               <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="order.is_paid">
               <label class="form-check-label" for="flexSwitchCheckChecked">{{ order.is_paid ? '已付款' : '未付款' }}</label>
             </div>
           </td>
           <td>
             <div class="btn-group">
               <button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(order)">編輯</button>
               <button class="btn btn-outline-danger btn-sm" @click.prevent="delOrdersModal(order)">刪除</button>
             </div>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
  <PaginationCom :pages="pagination" @update-page="getOrders" v-if="!searchInput"></PaginationCom>
  <OrdersModal ref="ordersModal" :order="tempOrder" @update-order="updateOrder"></OrdersModal>
  <DelOrdersModal ref="delOrdersModal" :item="tempOrder" @del-item="delOrders"></DelOrdersModal>
</template>

<script>
import PaginationCom from '@/components/PaginationCom.vue'
import OrdersModal from '@/components/OrdersModal.vue'
import DelOrdersModal from '@/components/DelOrdersModal.vue'

export default {
  data () {
    return {
      orders: [],
      pagination: { total_pages: '' },
      tempOrder: {},
      isLoading: false,
      searchInput: ''
    }
  },
  created () {
    this.getOrders()
    this.searchInput = ''
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/orders?page=${page}`
      this.axios.get(api).then((res) => {
        console.log('getOrders', res)
        this.isLoading = false
        this.orders = res.data.orders
        this.pagination = res.data.pagination
        const totalPages = res.data.pagination.total_pages
        if (res.data.pagination.has_next) {
          for (let i = 2; i <= totalPages; i++) {
            this.getAllOrders(i)
          }
        }
      })
    },
    getAllOrders (page) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/orders?page=${page}`
      this.axios.get(api).then((res) => {
        this.orders = this.orders.concat(res.data.orders)
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      this.$refs.ordersModal.showModal()
    },
    delOrdersModal (item) {
      this.tempOrder = { ...item }
      this.$refs.delOrdersModal.showModal()
    },
    delOrders (item) {
      console.log('del', item)
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/order/${item.id}`
      this.axios.delete(api).then((res) => {
        this.isLoading = false
        console.log('delOrders', res)
        this.$refs.delOrdersModal.hideModal()
        this.getOrders(this.pagination.current_page)
        this.PushMessageState(res, '刪除')
      })
    },
    updateOrder (item) {
      this.isLoading = true
      this.tempOrder = item
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/order/${item.id}`
      this.axios.put(api, { data: this.tempOrder }).then((res) => {
        this.isLoading = false
        console.log('updateOrders', res)
        this.$refs.ordersModal.hideModal()
        this.getOrders(this.pagination.current_page)
        this.PushMessageState(res, '更新')
      })
    }
  },
  computed: {
    searchData () {
      const regex = new RegExp(this.searchInput, 'gi')
      return this.orders.filter((item) => {
        return (item.id).match(regex)
      })
    }
  },
  components: {
    PaginationCom,
    OrdersModal,
    DelOrdersModal
  },
  inject: ['emitter', 'PushMessageState']
}
</script>
