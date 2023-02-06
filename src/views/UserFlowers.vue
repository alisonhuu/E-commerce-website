<template>

<LoadingCom :active="isLoading"></LoadingCom>
<ProductCategory :products="flowers" @get-products="getProducts()"></ProductCategory>

</template>

<script>
import ProductCategory from '@/components/ProductCategory.vue'

export default {
  data () {
    return {
      products: [],
      flowers: [],
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
        this.getFlowers()
      })
    },
    getFlowers () {
      this.flowers = this.products.filter(
        (item) => item.category === 'flowers')
    }
  },
  components: { ProductCategory }
}
</script>
