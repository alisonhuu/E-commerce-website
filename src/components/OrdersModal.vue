<template>
  <div class="modal" tabindex="-1" ref="modal">
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-primary text-white">
        <h4 class="modal-title">訂單</h4>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="row g-3">
          <h5 class="fw-bold">訂單細節</h5>
          <div class="col-sm-6">
            <label for="orderId" class="form-label">訂單編號</label>
            <input v-model="tempOrder.id" placeholder="請輸入訂單編號"
                   type="text" class="form-control" id="orderId">
          </div>
          <div class="col-sm-4">
            <label for="orderMsg" class="form-label">備註</label>
            <textarea v-model="tempOrder.message" class="form-control" id="orderMsg"></textarea>
          </div>
          <div class="col-sm-2">
            <div class="form-check pt-4">
              <input class="form-check-input" type="checkbox"
                      :true-value="true" :false-value="false" id="is_paid"
                      v-model="tempOrder.is_paid">
              <label class="form-check-label" for="is_paid">是否付款</label>
            </div>
          </div>
          <div class="col-sm-6">
            <label for="create_at" class="form-label">下單時間</label>
            <input v-model="create_at" placeholder="請輸入下單時間"
                   type="date" class="form-control" id="create_at">
          </div>
          <div class="col-sm-6">
            <label for="paid_date" class="form-label">付款時間</label>
            <input v-model="paid_date" placeholder="請輸入付款時間"
            type="date" class="form-control" id="paid_date">
          </div>
          <h5 class="fw-bold mt-5">用戶資料</h5>
          <div class="col-sm-6">
            <label for="name" class="form-label">姓名</label>
            <input v-model="tempOrder.user.name" placeholder="請輸入姓名"
                   type="text" class="form-control" id="name">
          </div>
          <div class="col-sm-6">
            <label for="email" class="form-label">Email</label>
            <input v-model="tempOrder.user.email" placeholder="請輸入Email"
                   type="email" class="form-control" id="email">
          </div>
          <div class="col-sm-6">
            <label for="tel" class="form-label">電話</label>
            <input v-model="tempOrder.user.tel" placeholder="請輸入電話"
                   type="text" class="form-control" id="tel">
          </div>
          <div class="col-sm-6">
            <label for="address" class="form-label">地址</label>
            <input v-model="tempOrder.user.address" placeholder="請輸入地址"
                   type="address" class="form-control" id="address">
          </div>
          <h5 class="fw-bold mt-5">選購商品</h5>
          <table class="table align-middle">
            <tbody>
              <tr>
                <td class="pb-5">
                  <div>
                    <button type="button" class="btn btn-success btn-sm" @click.prevent="addProduct">新增</button>
                  </div>
                </td>
                <td class="pb-5">
                  <label for="product_title" class="form-label">商品名稱</label>
                  <select v-model="tempProduct.product.title" id="product_title"
                   @change="updatePrice" class="form-select">
                    <option disabled value="">請選擇商品</option>
                    <option v-for="product in allProducts" :key="product.id">
                    {{ product.title }}</option>
                  </select>
                  <small v-if="wrongMsg" class="text-danger d-block">{{ wrongMsg }}</small>
                </td>
                <td class="pb-5">
                  <label for="qty" class="form-label">商品數量</label>
                  <input v-model.number="tempProduct.qty" placeholder="請輸入商品數量"
                  @change="updatePrice" type="number" min="1" class="form-control" id="qty">
                </td>
                <td class="pb-5">
                  <div v-if="tempProduct.product.title && tempProduct.qty">
                    <p>商品小計</p>
                    <p class="mt-1 text-end pe-2">{{ $filters.currency(tempProduct.total) }}</p>
                  </div>
                </td>
              </tr>
                <tr v-for="(product, name) in tempOrder.products" :key="product.id">
                  <td>
                    <div class="col-sm-2">
                      <button type="button" class="btn btn-danger btn-sm" @click.prevent="delProduct(name)">
                        <i class="bi bi-x-lg fw-bold"></i>
                      </button>
                    </div>
                  </td>
                  <td v-if="product.product" >{{ product.product.title }}</td>
                  <td>x {{ product.qty }}</td>
                  <td class="text-end">{{ $filters.currency(product.total) }}</td>
                </tr>
            </tbody>
              <tr>
                <td colspan="4" class="text-end fw-bold">
                  <div v-if="discount !== 0">
                    <span>折扣</span>
                    <span class="ps-4">- {{ $filters.currency(discount) }}</span>
                  </div>
                  <div>
                    <span>總金額</span>
                  <span class="ps-4">{{ $filters.currency(tempOrder.total) }}</span>
                  </div>
                </td>
              </tr>

          </table>
        </form>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
                    data-bs-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-outline-primary" @click="$emit('update-order', tempOrder)">確認</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'

export default {
  data () {
    return {
      tempOrder: {
        user: {},
        id: '',
        products: {},
        total: 0
      },
      create_at: '',
      paid_date: '',
      tempProductId: '',
      tempProduct: {
        product: {
          title: '',
          price: 0
        },
        qty: 1,
        total: 0,
        final_total: 0
      },
      allProducts: [],
      wrongMsg: ''
    }
  },
  created () {
    this.getAllProducts()
  },
  props: {
    order: {}
  },
  methods: {
    getAllProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/products/all`
      this.axios.get(api).then((res) => {
        console.log('getAllProducts', res)
        this.allProducts = Object.values(res.data.products)
      })
    },
    updatePrice () {
      const theProduct = this.allProducts.filter(data => {
        return data.title === this.tempProduct.product.title
      })
      this.tempProduct.product = theProduct[0]
      this.tempProduct.total = this.tempProduct.product.price * this.tempProduct.qty
      this.tempProduct.final_total = this.tempProduct.total
    },
    addProduct () {
      if (this.tempProduct.product.title && this.tempProduct.qty) {
        const random = Math.floor(Math.random() * 10000)
        this.tempProductId = `-NMdbK3PnewOrder${random}`
        this.tempOrder.products[this.tempProductId] = this.tempProduct
        this.tempOrder.total += this.tempProduct.product.price
        this.tempProduct = { product: { title: '' }, qty: 1 }
        this.wrongMsg = ''
      } else if (!this.tempProduct.product.title && this.tempProduct.qty) {
        this.wrongMsg = '新增失敗，請選擇商品名稱'
      } else if (this.tempProduct.product.title && !this.tempProduct.qty) {
        this.wrongMsg = '新增失敗，請選擇商品數量'
      } else {
        this.wrongMsg = '新增失敗，請選擇商品名稱及數量'
      }
    },
    delProduct (item) {
      console.log(this.tempOrder.products[item])
      this.tempOrder.total -= this.tempOrder.products[item].final_total
      delete this.tempOrder.products[item]
      console.log(item, this.tempOrder.products)
    }
  },
  computed: {
    discount () {
      let discount = 0
      const tempOrderP = Object.values(this.tempOrder.products)
      tempOrderP.forEach(data => {
        discount += (data.total - data.final_total)
      })
      return discount
    }
  },
  watch: {
    order () {
      this.tempOrder = this.order
      if (this.tempOrder.create_at) {
        const dateAndTime = new Date(this.tempOrder.create_at * 1000)
          .toISOString().split('T');
        [this.create_at] = dateAndTime
      }
      if (this.tempOrder.paid_date) {
        const dateAndTime = new Date(this.tempOrder.paid_date * 1000)
          .toISOString().split('T');
        [this.paid_date] = dateAndTime
      }
    },
    create_at () {
      this.tempOrder.create_at = Math.floor(new Date(this.create_at) / 1000)
    },
    paid_date () {
      this.tempOrder.paid_date = Math.floor(new Date(this.paid_date) / 1000)
    }
  },
  emits: ['update-order'],
  // inject: ['emitter'],
  mixins: [modalMixins]
}
</script>
