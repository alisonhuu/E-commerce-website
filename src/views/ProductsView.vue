<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <div class="d-flex justify-content-between align-items-center">
    <h5>商品</h5>
    <div class="d-flex align-items-center">
      <form class="me-3">
        <div class="input-group">
          <input class="form-control form-control-sm" type="search" placeholder="請輸入商品名稱"
          :value="searchInput" @change="searchInput = $event.target.value" aria-label="Search">
          <button class="btn btn-secondary input-group-text" type="submit"><i class="bi bi-search"></i></button>
        </div>
      </form>
      <div class="text-end">
        <button class="btn btn-primary text-white" type="button" @click.prevent="openModal(true)">新增商品</button>
      </div>
    </div>
   </div>
   <div class="bg-light border rounded mt-3 shadow">
    <table class="table mt-4 align-middle">
      <thead>
        <tr>
          <th width="100" class="text-nowrap">圖片</th>
          <th width="150" class="text-nowrap">商品名稱</th>
          <th width="100" class="d-none d-md-table-cell">原價</th>
          <th width="100">售價</th>
          <th width="120" class="text-nowrap">是否啟用</th>
          <th width="150">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in searchData" :key="item.id">
          <td>
            <div :style="{ backgroundImage: `url(${item.imageUrl})` }"
            style="height: 50px" class="bg-center"></div>
          </td>
          <td>{{ item.title }}</td>
          <td class="text-nowrap d-none d-md-table-cell">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-nowrap">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <div class="form-check form-switch">
               <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="item.is_enabled">
               <label class="form-check-label" for="flexSwitchCheckChecked">{{ item.is_enabled ? '啟用' : '未啟用' }}</label>
             </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-primary p-1 p-md-2" @click.prevent="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger p-1 p-md-2" @click.prevent="delModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
   </div>
<ProductsModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductsModal>
<DelModal ref="delModal" :item="tempProduct" @del-item="delItem"></DelModal>
<PaginationCom :pages="pagination" @update-page="getProducts" v-if="!searchInput"></PaginationCom>
</template>

<script>
import ProductsModal from '../components/ProductsModal.vue'
import DelModal from '@/components/DelModal.vue'
import PaginationCom from '@/components/PaginationCom.vue'

export default {
  data () {
    return {
      allProducts: [],
      products: [],
      pagination: { total_pages: '' },
      tempProduct: {},
      isNew: false,
      isLoading: false,
      searchInput: ''
    }
  },
  created () {
    this.getProducts()
    this.getAllProducts()
    this.searchInput = ''
  },
  mounted () {
    this.emitter.emit('products', this.products)
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/products?page=${page}`
      this.axios.get(api).then((res) => {
        this.isLoading = false
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      this.$refs.productModal.showModal()
      this.$refs.productModal.wrongMessage = ''
    },
    updateProduct (item) {
      this.isLoading = true
      // 新增
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      this.axios[httpMethod](api, { data: this.tempProduct }).then((res) => {
        this.isLoading = false
        this.$refs.productModal.hideModal()
        this.getProducts(this.pagination.current_page)
        this.PushMessageState(res, '更新')
      })
    },
    delModal (item) {
      this.tempProduct = { ...item }
      this.$refs.delModal.showModal()
    },
    delItem (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/product/${item.id}`
      this.axios.delete(api).then((res) => {
        this.isLoading = false
        this.$refs.delModal.hideModal()
        this.getProducts(this.pagination.current_page)
        this.PushMessageState(res, '刪除')
      })
    },
    getAllProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/products/all`
      this.axios.get(api).then((res) => {
        this.allProducts = Object.values(res.data.products)
      })
    }
  },
  computed: {
    searchData () {
      let searchData = []
      if (!this.searchInput) {
        searchData = this.products
      } else {
        searchData = this.allProducts.filter((item) => item.title.match(this.searchInput))
      }
      return searchData
    }
  },
  components: {
    ProductsModal,
    DelModal,
    PaginationCom
  },
  inject: ['emitter', 'PushMessageState']
}
</script>
