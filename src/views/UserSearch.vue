<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <main>
    <section class="my-4">
      <div v-if="searchData.length > 0">
        <h4 class="mb-4">以下是 <span class="text-primary">{{ searchInput }}</span> 的搜尋結果：</h4>
        <div class="row row-cols-2 row-cols-md-4 gx-3 gy-5">
          <div class="col" v-for="item in searchData" :key="item.id">
            <a href="javascript:;" @click.prevent="getProduct(item.id)">
              <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
               style="height: 350px" class="bg-center rounded mb-3">
              </div>
            </a>
            <a href="javascript:;" @click.prevent="getProduct(item.id)"
            class="h5 link-dark text-decoration-none">{{ item.title }}</a>
            <p class="card-text fw-bold text-secondary mt-2">{{ $filters.currency(item.price) }}</p>
          </div>
        </div>
      </div>
      <h4 class="mb-4" v-else>查無 <span class="text-primary">{{ searchInput }}</span> 相關產品，請重新搜尋。</h4>
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
        console.log('getProducts', res)
        this.isLoading = false
        this.products = res.data.products
      })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
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
  }
}
</script>
