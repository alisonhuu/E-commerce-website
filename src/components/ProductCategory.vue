<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <main>
    <section class="my-4">
      <div class="row row-cols-2 row-cols-md-4 gx-3 gy-5">
        <div class="col" v-for="item in products" :key="item.id">
          <a href="javascript:;" @click.prevent="getProduct(item.id)">
            <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
            class="product-img bg-center rounded mb-3 position-relative">
              <div class="position-absolute bottom-0 end-0 p-1">
                <button class="btn btn-sm btn-light rounded-4" type="button"
                  @click.stop="addToWishList(item)">
                  <i class="bi" :class="heart(item)"></i>
                </button>
                <button class="btn btn-sm btn-light rounded-4 ms-1" type="button"
                  @click.stop="addToCart(item)" :disabled="loadingItem === item.id">
                  <i class="bi bi-cart"></i>
                </button>
              </div>
              <div class="position-absolute top-0 start-0 px-2 py-1" v-if="item.is_gift">
                <i class="bi bi-gift text-danger"></i>
              </div>
            </div>
          </a>
          <a href="javascript:;" @click.prevent="getProduct(item.id)"
          class="h6 link-dark-h">{{ item.title }}</a>
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
      isLoading: false,
      loadingItem: ''
    }
  },
  props: {
    products: {
      type: Array,
      default () { return [] }
    }
  },
  methods: {
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },
    addToCart (item) {
      this.loadingItem = item.id
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart`
      const cart = { product_id: item.id, qty: 1 }
      this.axios.post(api, { data: cart })
        .then((res) => {
          this.loadingItem = ''
          this.isLoading = false
          this.PushMessageState(res, '加入購物車')
          this.emitter.emit('cart-qty')
        })
    },
    addToWishList (item) {
      if (localStorage.getItem(item.id)) {
        localStorage.removeItem(item.id)
        this.emitter.emit('wished-qty')
      } else {
        localStorage.setItem(item.id, JSON.stringify(item))
        this.emitter.emit('wished-qty')
      }
      this.$emit('get-products')
    },
    heart (item) {
      return localStorage.getItem(item.id) ? 'bi-heart-fill' : 'bi-heart'
    }
  },
  emits: ['get-products'],
  inject: ['emitter', 'PushMessageState']
}
</script>
