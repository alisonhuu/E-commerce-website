<template>
<LoadingCom :active="isLoading"></LoadingCom>
<div class="container">
  <section class="my-4">
    <div  v-if="id.length > 0">
      <h4 class="">我的最愛</h4>
      <h4 class="font-mirza mb-4">Wish List</h4>
    </div>
    <p class="mb-5 fs-5" v-else>目前我的最愛是空的，請選擇商品加入。</p>
    <div class="row row-cols-2 row-cols-md-4 gx-3 gy-5 h-100">
      <div class="col h-100" v-for="item in product" :key="item.id">
        <a href="javascript:;" @click.prevent="getProduct(item.id)">
          <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
          class="product-img bg-center rounded mb-3 position-relative">
            <div class="position-absolute bottom-0 end-0 p-1">
              <button class="btn btn-sm btn-light rounded-4"
                @click.stop="removeWishList(item.id)">
                <i class="bi bi-trash3"></i>
              </button>
              <button class="btn btn-sm btn-light rounded-4 ms-1"
                @click.stop="addToCart(item)">
                <i class="bi bi-cart"></i>
              </button>
            </div>
          </div>
        </a>
        <a href="javascript:;" @click.prevent="getProduct(item.id)"
        class="h6 link-dark-h">{{ item.title }}</a>
        <p class="card-text fw-bold text-secondary mt-2 mb-0">{{ $filters.currency(item.price) }}</p>
      </div>
    </div>
  </section>

</div>
</template>

<script>

export default {
  data () {
    return {
      product: [],
      isLoading: false,
      id: []
    }
  },
  created () {
    this.getId()
  },
  methods: {
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },
    addToCart (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart`
      const cart = { product_id: item.id, qty: 1 }
      this.axios.post(api, { data: cart })
        .then((res) => {
          this.isLoading = false
          this.PushMessageState(res, '加入購物車')
          this.emitter.emit('cart-qty')
        })
    },
    removeWishList (item) {
      this.isLoading = true
      localStorage.removeItem(item)
      this.getId()
      this.emitter.emit('wished-qty')
      this.isLoading = false
    },
    getId () {
      this.id = []
      for (let i = 0; i < localStorage.length; i++) {
        this.id.push(localStorage.key(i))
      }
      this.getWishProduct()
    },
    getWishProduct () {
      this.product = []
      this.id.forEach(item => {
        const wishProduct = JSON.parse(localStorage.getItem(item))
        this.product.push(wishProduct)
      })
    }
  },
  inject: ['emitter', 'PushMessageState']
}
</script>
