<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><router-link to="/user/cart">購物車</router-link></li>
    <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
  </ol>
</nav>
 <div class="card mx-auto" style="max-width: 60rem;">
  <div class="row g-0">
    <div class="col-md-7">
      <img :src="product.imageUrl" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-5">
      <div class="card-body d-flex flex-column justify-content-between h-100">
        <div>
          <h4 class="card-title my-4">{{ product.title }}</h4>
          <h5 class="d-inline me-2 text-secondary">售價： {{ $filters.currency(product.price) }}</h5>
          <span><small>（原價： {{ $filters.currency(product.origin_price) }}）</small></span>
          <p class="card-text mt-4">{{ product.description }}</p>
          <div class="mt-3" v-if="product.category === 'flowers'">
            <hr>
            <p>乾燥花是鮮花經由風乾處理而製成，永生花是鮮花浸泡在脫色藥水中，再染色後製成。</p>
            <p>花材皆採用當季花材，若市場短缺，將更換等價花材使用。</p>
            <p>適用於生日禮物、畢業典禮、婚禮、情人節等慶祝場合，也可居家佈置。</p>
            <p>配送方式｜宅配 / 自取 </p>
            <p>保存期限｜約為1-2年，良好保存下可達數年</p>
            <p>注意事項｜請置於陰涼乾燥的通風處，勿陽光直射</p>
          </div>
        </div>
        <div class="mt-3" v-if="product.category === 'plants'">
            <hr>
            <p>植物有助於室內空氣之淨化，綠色可放鬆緊繃的雙眼，讓環境更美觀。</p>
            <p>每株植物生長不同，照片僅供參考，實品會有些微誤差。</p>
            <p>適用於生日禮物、開幕送禮、辦公或居家佈置。</p>
            <p>配送方式｜宅配 / 自取 </p>
            <p>注意事項｜室內植物對陽光需求不太高，請避免陽光直射</p>
          </div>
        <div class="text-end mb-4">
          <button class="btn btn-outline-danger m-1" @click.prevent="addToWishList" :disabled="loadingItem === productId">
            <i class="bi me-1" :class="heart"></i>{{ isWished ? '已加入我的最愛':'加入我的最愛' }}</button>
          <button class="btn btn-primary link-light ms-2 m-1" @click.prevent="addToCart" :disabled="loadingItem === productId">
            <i class="bi bi-cart me-1"></i>加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      isLoading: false,
      loadingItem: '',
      isWished: false
    }
  },
  props: ['productId'],
  created () {
    this.getProduct()
    if (localStorage.getItem(this.productId)) {
      this.isWished = true
    }
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/product/${this.productId}`
      this.axios.get(api).then((res) => {
        this.isLoading = false
        this.product = res.data.product
      })
    },
    addToCart () {
      this.loadingItem = this.productId
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart`
      const cart = { product_id: this.productId, qty: 1 }
      this.axios.post(api, { data: cart })
        .then((res) => {
          this.loadingItem = ''
          this.isLoading = false
          this.PushMessageState(res, '加入購物車')
          this.emitter.emit('cart-qty')
        })
    },
    addToWishList () {
      if (this.isWished) {
        localStorage.removeItem(this.productId)
        this.emitter.emit('wished-qty')
      } else {
        localStorage.setItem(this.productId, JSON.stringify(this.product))
        this.emitter.emit('wished-qty')
      }
      this.isWished = !this.isWished
      // localStorage.clear()
    }
  },
  computed: {
    heart () {
      return this.isWished ? 'bi-heart-fill' : 'bi-heart'
    }
  },
  inject: ['emitter', 'PushMessageState']
}
</script>
