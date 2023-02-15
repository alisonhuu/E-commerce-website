<template>
<LoadingCom :active="isLoading"></LoadingCom>
<div class="container">
  <nav class="mb-5" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
    </ol>
  </nav>
  <div class=" mx-auto">
    <div class="row">
      <div class="col-md-6">
        <div :style="{ backgroundImage: `url(${product.imageUrl})`}"
          class="lg-img bg-center rounded">
        </div>
      </div>
      <div class="col-md-6">
        <div>
          <h4 class="mb-4 mt-4 mt-md-0">{{ product.title }}</h4>
          <h5 class="d-inline me-2 text-secondary">售價： {{ $filters.currency(product.price) }}</h5>
          <span><small>（原價： {{ $filters.currency(product.origin_price) }}）</small></span>
          <p class="mt-4">{{ product.description }}</p>
          <div class="mt-3" v-if="product.category === 'flowers'">
            <hr>
            <p class="mb-0">乾燥花是鮮花經由風乾處理而製成，永生花是鮮花浸泡在脫色藥水中，再染色後製成。</p>
            <p class="mb-0">花材採用當季花材，若市場短缺，將更換等價花材。</p>
            <p>適用於生日禮物、畢業典禮、婚禮、情人節等慶祝場合，也可居家佈置。</p>
            <p>配送方式｜宅配 / 自取 </p>
            <p>保存期限｜約為1-2年，良好保存下可達數年</p>
            <p>注意事項｜請置於陰涼乾燥的通風處，勿陽光直射</p>
          </div>
          <div class="mt-3" v-if="product.category === 'plants'">
            <hr>
            <p class="mb-0">植物有助於室內空氣之淨化，綠色可放鬆緊繃的雙眼，讓環境更美觀。</p>
            <p class="mb-0">適用於生日禮物、開幕送禮、辦公或居家佈置。</p>
            <p >每株植物生長不同，照片僅供參考，實品會有些微誤差。</p>
            <p>配送方式｜宅配 / 自取 </p>
            <p>注意事項｜室內植物對陽光需求不太高，請避免陽光直射</p>
          </div>
          <div class="row mt-4">
            <label for="qty" class="col-8 col-form-label text-end">數量</label>
            <input type="number" min="1" v-model.number="qty" class="col form-control me-2" id="qty">
          </div>
          <div class="text-end mt-3">
            <button class="btn btn-outline-danger rounded-4 mt-1"
            @click.prevent="addToWishList" :disabled="loadingItem === productId">
              <i class="bi" :class="heart()"></i>
            </button>
            <button class="btn-shadow btn btn-primary link-light ms-3" @click.prevent="addToCart" :disabled="loadingItem === productId">
              <i class="bi bi-cart me-1"></i>加入購物車
            </button>
          </div>
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
      qty: 1,
      isLoading: false,
      loadingItem: ''
    }
  },
  props: ['productId'],
  created () {
    this.getProduct()
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
      const cart = { product_id: this.productId, qty: this.qty }
      this.axios.post(api, { data: cart })
        .then((res) => {
          this.loadingItem = ''
          this.isLoading = false
          this.PushMessageState(res, '加入購物車')
          this.emitter.emit('cart-qty')
        })
    },
    addToWishList () {
      if (localStorage.getItem(this.productId)) {
        localStorage.removeItem(this.productId)
        this.emitter.emit('wished-qty')
      } else {
        localStorage.setItem(this.productId, JSON.stringify(this.product))
        this.emitter.emit('wished-qty')
      }
      this.getProduct()
    },
    heart () {
      return localStorage.getItem(this.productId) ? 'bi-heart-fill' : 'bi-heart'
    }
  },
  inject: ['emitter', 'PushMessageState']
}
</script>
