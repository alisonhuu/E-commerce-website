<template>

  <LoadingCom :active="isLoading"></LoadingCom>
  <ProductCategory :products="plants" @get-products="getProducts()"></ProductCategory>

  </template>

<script>
import ProductCategory from '@/components/ProductCategory.vue'

export default {
  data () {
    return {
      products: [],
      plants: [],
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
        this.getPlants()
      })
    },
    getPlants () {
      this.plants = this.products.filter(
        (item) => item.category === 'plants')
    }
  },
  components: { ProductCategory }
}
</script>
