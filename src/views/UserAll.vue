<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <main>
    <section class="my-4">
      <!-- <h4 class="mb-4" v-if="!searchInput">全部商品</h4>
      <h4 class="mb-4" v-else>以下是 <span class="text-primary">{{ searchInput }}</span> 的搜尋結果</h4> -->
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
    </section>
  </main>
  <PaginationCom :pages="pagination" @update-page="getProducts"></PaginationCom>
</template>

<script>
import PaginationCom from '@/components/PaginationCom.vue'

export default {
  data () {
    return {
      products: [],
      pagination: { total_pages: '' },
      isLoading: false,
      searchInput: ''
    }
  },
  mounted () {
    this.getProducts()
    this.emitter.on('searchData', (data) => {
      this.searchInput = data
      console.log('1', this.searchInput)
    })
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/products?page=${page}`
      this.axios.get(api).then((res) => {
        console.log('getProducts', res)
        this.isLoading = false
        this.products = res.data.products
        this.pagination = res.data.pagination
        console.log('2', this.searchInput)
      })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    }
  },
  computed: {
    searchData () {
      console.log('3', this.searchInput)
      return this.products.filter((item) => item.title.match(this.searchInput))
    }
  },
  components: {
    PaginationCom
  },
  inject: ['emitter']
}
</script>
