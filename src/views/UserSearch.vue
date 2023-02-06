<template>
<LoadingCom :active="isLoading"></LoadingCom>
<div class="container">
  <BreadcrumbCom></BreadcrumbCom>
  <div v-if="searchData.length > 0">
    <p class="mb-4 fs-5">以下是<span class="text-primary mx-2">{{ searchInput }}</span>的搜尋結果：</p>
    <ProductCategory  :products="searchData" @get-products="getProducts()"></ProductCategory>
  </div>
  <p class="mb-4 fs-5" v-else>目前無<span class="text-primary mx-2">{{ searchInput }}</span>的搜尋結果，請再次搜尋。</p>
  </div>
</template>

<script>
import BreadcrumbCom from '@/components/BreadcrumbCom.vue'
import ProductCategory from '@/components/ProductCategory.vue'

export default {
  data () {
    return {
      products: [],
      isLoading: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/products/all`
      this.axios.get(api).then((res) => {
        this.isLoading = false
        this.products = res.data.products
      })
    }
  },
  computed: {
    searchInput () {
      return this.$route.query.q
    },
    searchData () {
      const regex = new RegExp(this.searchInput, 'gi')
      return this.products.filter((item) => item.title.match(regex))
    }
  },
  watch: {
    searchInput (nVal, oVal) {
      if (oVal.length === 0 || oVal === nVal) return
      this.$router.go(0)
    }
  },
  components: { BreadcrumbCom, ProductCategory }
}

</script>
