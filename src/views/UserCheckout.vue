<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <h4 class="mb-5 text-center">請確認以下資料是否正確</h4>
  <form class="row" @submit.prevent="checkout">
    <div class="col-sm-8 mx-auto">
      <span class="bg-primary py-2 px-4 fw-bold rounded-top text-light">購物明細</span>
      <table class="table border border-3 border-primary mt-1 mb-5">
      <thead>
        <tr>
          <th scope="col" width="150">商品</th>
          <th scope="col">名稱</th>
          <th scope="col">數量</th>
          <th scope="col">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>
            <div :style="{ backgroundImage: `url(${item.product.imageUrl})`}"
            style="height: 100px; background-position: center; background-size: cover;"></div>
          </td>
          <td>{{ item.product.title }}</td>
          <td>{{ item.qty }}</td>
          <td class="text-end">{{ $filters.currency(item.total) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="fw-bold text-end">
            <p>折扣</p>
            <p>總金額</p>
          </td>
          <td class="fw-bold text-end">
            <p>- {{ $filters.currency(discount) }}</p>
            <p>{{ $filters.currency(order.total) }}</p>
          </td>
        </tr>
      </tfoot>
    </table>
    <span class="bg-primary py-2 px-4 fw-bold rounded-top text-light">收件人資料</span>
      <table class="table border border-3 border-primary mt-1">
      <tbody>
        <tr>
          <th scope="col">姓名</th>
          <td>{{ order.user.name }}</td>
        </tr>
        <tr>
          <th scope="col">電話</th>
          <td>{{ order.user.tel }}</td>
        </tr>
        <tr>
          <th scope="col">Email</th>
          <td>{{ order.user.email }}</td>
        </tr>
        <tr>
          <th scope="col">地址</th>
          <td>{{ order.user.address }}</td>
        </tr>
        <tr>
          <th scope="col">備註</th>
          <td>{{ order.message }}</td>
        </tr>
      </tbody>
    </table>
      <div class="text-end">
      <button type="submit" class="btn btn-primary text-light mt-4">確認結帳</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      order: { user: {} },
      orderId: '',
      isLoading: false
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/order/${this.orderId}`
      this.axios.get(api).then((res) => {
        this.order = res.data.order
      })
    },
    checkout () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/pay/${this.orderId}`
      this.axios.post(api).then((res) => {
        this.isLoading = false
        this.PushMessageState(res, '付款')
        this.$router.push('/user/home')
      })
    }
  },
  computed: {
    discount () {
      let originTotal = 0
      const order = Object.values(this.order.products)
      order.forEach(data => {
        originTotal += data.total
      })
      return originTotal - this.order.total
    }
  },
  inject: ['emitter', 'PushMessageState']
}
</script>
