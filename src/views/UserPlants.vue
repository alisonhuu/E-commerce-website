<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <main>
    <section class="my-4">
      <div class="row row-cols-2 row-cols-md-4 gx-3 gy-5">
        <div class="col" v-for="item in plants" :key="item.id">
          <a href="javascript:;" @click.prevent="getProduct(item.id)">
            <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
             style="height: 350px" class="bg-center rounded mb-3">
            </div>
          </a>
          <a class="h5 link-dark text-decoration-none">{{ item.title }}</a>
          <p class="card-text fw-bold text-secondary mt-2">{{ $filters.currency(item.price) }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
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
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    }
  },
  computed: {
    plants () {
      return this.products.filter(
        (item) => item.category === 'plants')
    }
  }
}
</script>
