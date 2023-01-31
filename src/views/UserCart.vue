<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <table class="table">
  <thead>
    <tr>
      <th scope="col" width="200">圖片</th>
      <th scope="col">產品名稱</th>
      <th scope="col" width="100">數量</th>
      <th scope="col" width="150">單價</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in carts" :key="item.id">
      <td>
        <a href="javascript:;" @click.prevent="getProduct (item.product.id)">
          <div :style="{ backgroundImage: `url(${item.product.imageUrl})`}"
          style="height: 150px" class="bg-center"></div>
        </a>
      </td>
      <td>{{ item.product.title }}</td>
      <td>
        <div class="input-group input-group-sm">
          <input type="number" class="form-control" min="1"
                :disabled="item.id === loadingItem"
                @change="updateCart(item)"
                v-model.number="item.qty">
          <div class="input-group-text">/ {{ item.product.unit }}</div>
        </div>
      </td>
      <td class="text-end">
      <p>{{ $filters.currency(item.product.price) }}</p>
      </td>
      <td>
        <a href="javascript:;" class="text-danger h5" @click.prevent="delCart(item)"><i class="bi bi-x-circle"></i></a>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">
        <p class="fw-bold text-end">小計</p>
        <p class="text-end" v-if="cart.final_total !== cart.total">
          <span class="bg-success text-light p-1 rounded">已套用優惠券:
          <span class="fw-bold">{{ carts[0].coupon.title }}</span></span>
          <span class="fw-bold ms-2 text-success">折抵</span></p>
        <p class="fw-bold text-end">總額</p>
      </td>
      <td>
        <p class="text-end">{{ $filters.currency(cart.total) }}</p>
        <p class="fw-bold text-end text-success" v-if="cart.final_total !== cart.total" >- {{ $filters.currency(cart.total-cart.final_total) }}</p>
        <p class="text-end">{{ $filters.currency(cart.final_total) }}</p>
      </td>
    </tr>
  </tfoot>
</table>
  <div class="input-group input-group-sm">
    <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model.lazy="code" @keyup.enter="useCoupon">
    <div class="input-group-text">
      <button class="btn btn-outline-secondary" type="button" @click.prevent="useCoupon">
        套用優惠碼
      </button>
    </div>
  </div>
  <div class="text-end">
    <button class="btn btn-primary text-light mt-4" @click.prevent="goCheckout">前往結帳</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carts: [],
      cart: {},
      isLoading: false,
      loadingItem: '',
      code: ''
    }
  },
  created () {
    this.getCarts()
  },
  methods: {
    getCarts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart`
      this.axios.get(api).then((res) => {
        this.isLoading = false
        this.carts = res.data.data.carts
        this.cart = res.data.data
      })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },
    delCart (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`
      this.axios.delete(api).then((res) => {
        this.isLoading = false
        this.getCarts()
        this.PushMessageState(res, '刪除')
        this.emitter.emit('cart-qty')
      })
    },
    updateCart (item) {
      this.loadingItem = item.id
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart/${item.id}`
      const cart = { product_id: item.id, qty: item.qty }
      this.axios.put(api, { data: cart }).then((res) => {
        this.loadingItem = ''
        this.getCarts()
      })
    },
    useCoupon () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/coupon`
      const code = { code: this.code }
      this.axios.post(api, { data: code }).then((res) => {
        this.isLoading = false
        this.getCarts()
        this.PushMessageState(res, '套用優惠券')
      })
    },
    goCheckout () {
      this.$router.push('/user/info')
    }
  },
  inject: ['emitter', 'PushMessageState']
}
</script>
