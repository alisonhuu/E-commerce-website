<template>

  <LoadingCom :active="isLoading"></LoadingCom>
  <ProductCategory :products="products" @get-products="getProducts()"></ProductCategory>
  <PaginationCom :pages="pagination" @update-page="getProducts"></PaginationCom>

</template>

<script>
import ProductCategory from '@/components/ProductCategory.vue'
import PaginationCom from '@/components/PaginationCom.vue'

export default {
  data () {
    return {
      products: [],
      flowers: [],
      isLoading: false,
      pagination: { total_pages: '' }
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/products?page=${page}`
      this.axios.get(api).then((res) => {
        this.isLoading = false
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    }
  },
  components: { ProductCategory, PaginationCom }
}
</script>
