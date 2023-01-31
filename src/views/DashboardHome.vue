<template>
  <h3>後台管理</h3>
  <section class="my-5">
    <div class="row row-cols-md-3 row-cols-1">
    <div class="col">
      <div class="card border-primary mb-3 shadow">
        <div class="card-header text-white bg-primary h5 text-center">訂單數</div>
        <div class="card-body">
          <h5 class="card-title text-primary h2 text-center">{{ orders.length }} 筆</h5>
          <p class="card-text text-muted text-end">統計至 {{ date }}</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-primary mb-3 shadow">
        <div class="card-header text-white bg-primary h5 text-center">平均交易金額</div>
        <div class="card-body">
          <h5 class="card-title text-primary h2 text-center">{{ $filters.currency(ordersTotal/orders.length) }}</h5>
          <p class="card-text text-muted text-end">統計至 {{ date }}</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-primary mb-3 shadow">
      <div class="card-header text-white bg-primary h5 text-center">營業額</div>
      <div class="card-body">
        <h5 class="card-title text-primary h2 text-center">{{ $filters.currency(ordersTotal) }}</h5>
        <p class="card-text text-muted text-end">統計至 {{ date }}</p>
      </div>
      </div>
    </div>
  </div>
  </section>
  <h5>最新訂單</h5>
  <div class="bg-light border rounded mt-3 border-bottom-0" >
     <table class="table">
       <thead>
         <tr>
           <th width="100">訂單編號</th>
           <th width="100">購買時間</th>
           <th width="100">購買人</th>
           <th width="220">購買品項</th>
           <th width="120">應付金額</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="order in orders.slice(0,5)" :key="order.id">
           <td class="fs-6">{{ (order.id).substring(3,10) }}</td>
           <td>{{ $filters.date(order.create_at) }}</td>
           <td>{{ order.user.name }}</td>
           <td>
             <small v-for="item in order.products" :key="item.id" class="d-block">
              {{ item.product.title}} x {{item.qty }}
             </small>
            </td>
           <td>{{ $filters.currency(order.total) }}</td>
         </tr>
       </tbody>
     </table>
   </div>
  <h5 class="mt-5">最新商品</h5>
  <div class="bg-light border rounded mt-3 border-bottom-0">
    <table class="table">
      <thead>
        <tr>
          <th width="50">圖片</th>
          <th width="120">商品名稱</th>
          <th width="100">原價</th>
          <th width="100">售價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products.slice(0,5)" :key="item.id">
          <td>
            <div :style="{ backgroundImage: `url(${item.imageUrl})` }"
            style="height: 50px" class="bg-center"></div>
          </td>
          <td>{{ item.title }}</td>
          <td>
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td>
            {{ $filters.currency(item.price) }}
          </td>
        </tr>
      </tbody>
    </table>
   </div>
   <h5 class="mt-5">最新優惠券</h5>
   <div class="bg-light border rounded mt-3 border-bottom-0">
    <table class="table ">
        <thead>
          <tr>
            <th>名稱</th>
            <th>優惠碼</th>
            <th>打折</th>
            <th>到期日</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in coupons.slice(0,5)" :key="item.id">
                <td>{{item.title}}</td>
                <td>{{item.code}}</td>
                <td>{{item.percent}}%</td>
                <td>{{$filters.date(item.due_date)}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      products: [],
      coupons: []
    }
  },
  created () {
    this.getOrders()
    this.getProducts()
    this.getCoupons()
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/orders?page=${page}`
      this.axios.get(api).then((res) => {
        this.orders = res.data.orders
        const totalPages = res.data.pagination.total_pages
        if (res.data.pagination.has_next) {
          for (let i = 2; i <= totalPages; i++) {
            this.getAllOrders(i)
          }
        }
      })
    },
    getAllOrders (page) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/orders?page=${page}`
      this.axios.get(api).then((res) => {
        this.orders = this.orders.concat(res.data.orders)
      })
    },
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/products?page=${page}`
      this.axios.get(api).then((res) => {
        this.products = res.data.products
      })
    },
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/coupons?page=${page}`
      this.axios.get(api).then((res) => {
        this.coupons = res.data.coupons
      })
    }
  },
  computed: {
    date () {
      const time = new Date()
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      return `${year} 年 ${month} 月 ${day} 日`
    },
    ordersTotal () {
      let total = 0
      this.orders.forEach(item => {
        total += item.total
      })
      return total
    }
  }
}
</script>
