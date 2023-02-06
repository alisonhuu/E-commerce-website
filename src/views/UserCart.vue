<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <div class="container">
    <BreadcrumbCom></BreadcrumbCom>
    <div class="row" v-if="carts.length > 0">
      <div class="bg-light shadow p-3 p-md-4 col-11 col-md-8 mx-auto">
        <table class="table align-middle">
          <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td class="p-0">
                <a href="javascript:;" class="btn btn-sm btn-outline-danger rounded-5" @click.prevent="delCart(item)">
                  <i class="bi bi-trash3"></i>
                </a>
              </td>
              <td class="col-3">
                <a href="javascript:;" @click.prevent="getProduct (item.product.id)">
                  <div :style="{ backgroundImage: `url(${item.product.imageUrl})`}"
                  class="sm-imgs bg-center"></div>
                </a>
              </td>
              <td>
                <p class="fw-bold">{{ item.product.title }}</p>
                <div class="input-group input-group-sm" style="width: 100px">
                  <input type="number" class="form-control" min="1"
                        :disabled="item.id === loadingItem"
                        @change="updateCart(item)"
                        v-model.number="item.qty">
                  <div class="input-group-text">/ {{ item.product.unit }}</div>
                </div>
              </td>
              <td class="fw-bold mt-2 mb-0 text-end text-nowrap">
                {{ $filters.currency(item.product.price) }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">
                <p class="text-end">小計</p>
                <p class="text-end" v-if="cart.final_total !== cart.total">
                  <span class="bg-success text-light py-1 px-2 rounded">優惠券:
                  <span class="fw-bold ">{{ carts[0].coupon.title }}</span></span>
                  <span class="fw-bold ms-2 text-success">折抵</span></p>
                <p class="fw-bold text-end">總額</p>
              </td>
              <td>
                <p class="text-end text-nowrap">{{ $filters.currency(cart.total) }}</p>
                <p class="fw-bold text-end text-success text-nowrap" v-if="cart.final_total !== cart.total" >- {{ $filters.currency(cart.total-cart.final_total) }}</p>
                <p class="fw-bold text-end text-nowrap">{{ $filters.currency(cart.final_total) }}</p>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group input-group-sm pb-3 px-2 p-mb-0">
          <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model.lazy="code" @keyup.enter="useCoupon">
          <div class="input-group-text">
            <button class="btn btn-sm btn-outline-secondary" type="button" @click.prevent="useCoupon">
              套用優惠碼
            </button>
          </div>
        </div>
        <div class="text-end mt-5">
          <button class="btn-shadow btn btn-primary text-light" @click.prevent="goCheckout">前往結帳</button>
        </div>
      </div>
    </div>
    <p class="mb-4 fs-5" v-else>目前購物車是空的，請選擇商品加入。</p>
  </div>
</template>

<script>
import BreadcrumbCom from '@/components/BreadcrumbCom.vue'

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
  components: { BreadcrumbCom },
  inject: ['emitter', 'PushMessageState']
}
</script>
