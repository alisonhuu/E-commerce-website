<template>
<LoadingCom :active="isLoading"></LoadingCom>
<section class="my-4">
      <h4 class="mb-4" v-if="id.length > 0">我的最愛</h4>
      <h4 class="mb-4" v-else>目前我的最愛是空的，請選擇商品加入！</h4>
      <div class="row row-cols-2 row-cols-md-4 gx-3 gy-5">
        <div class="col" v-for="item in product" :key="item.id">
          <a href="javascript:;" @click.prevent="getProduct(item.id)">
            <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
             style="height: 300px" class="bg-center rounded mb-3">
            </div>
          </a>
          <a href="javascript:;" @click.prevent="getProduct(item.id)"
          class="h5 link-dark text-decoration-none">{{ item.title }}</a>
          <p class="card-text fw-bold text-secondary mt-2">{{ $filters.currency(item.price) }}</p>
          <div class="text-end mb-4">
            <button class="btn btn-success btn-sm link-light" @click.prevent="removeWishList(item.id)">
              移除</button>
            <button class="btn btn-primary btn-sm link-light ms-3" @click.prevent="addToCart(item)">
              <i class="bi bi-cart me-1"></i>加入購物車</button>
          </div>
        </div>
      </div>
    </section>
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
          console.log('addToCart', res)
          this.isLoading = false
          this.PushMessageState(res, '加入購物車')
          this.emitter.emit('cart-qty')
        })
    },
    removeWishList (item) {
      localStorage.removeItem(item)
      this.getId()
      this.emitter.emit('wished-qty')
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
