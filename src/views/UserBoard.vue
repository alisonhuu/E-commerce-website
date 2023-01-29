<template>
  <nav class="navbar navbar-expand-md flex-wrap my-4">
    <div class="container-fluid d-flex justify-content-between flex-nowrap">
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/user/home" class="navbar-brand">
        <img src="../../public/images/logo.png" alt="logo">
      </router-link>
      <form @submit.prevent="searchResult" class="w-25 w-sm-100">
        <div class="input-group input-group-sm">
          <input class="form-control form-control-sm" type="search"
          v-model="searchInput" placeholder="Search" aria-label="Search">
          <button class="btn btn-secondary input-group-text" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </form>
      <div class="me-3">
        <router-link to="/user/wishList" class="nav-link d-sm-inline position-relative mb-1">
          <i class="bi bi-heart-fill me-1"></i>
          <span class="me-2">我的最愛</span>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            v-if="wishedQty > 0">
            {{ wishedQty }}
          </span>
        </router-link>
        <router-link to="/user/cart" class="nav-link d-sm-inline position-relative mb-1">
          <i class="bi bi-cart ms-3 me-1"></i>
          <span class="me-2">購物車</span>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            v-if="cartQty > 0">
            {{ cartQty }}
          </span>
        </router-link>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="container-fluid d-flex justify-content-center navbar-dark bg-primary my-2 py-3">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/user/productList/all" class="nav-link"
            :class="{ 'active' : this.$route.fullPath === '/user/productList/all' }">全部商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/productList/gift" class="nav-link"
            :class="{ 'active' : this.$route.fullPath === '/user/productList/gift' }">送禮首選</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/productList/plants" class="nav-link"
            :class="{ 'active' : this.$route.fullPath === '/user/productList/plants' }">植栽</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/productList/flowers" class="nav-link"
            :class="{ 'active' : this.$route.fullPath === '/user/productList/flowers' }">乾燥花</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
  <footer class="bg-light text-secondary py-3 px-2 mt-6">
    <div class="d-flex justify-content-around">
      <div>
        <router-link to="/user/FAQ" class="h5 d-block text-decoration-none link-secondary">常見問題</router-link>
        <p class="ms-2">購物須知、認識乾燥花...等資訊</p>
      </div>
      <div>
        <router-link to="/user/about" class="h5 d-block text-decoration-none link-secondary">關於我們</router-link>
        <router-link to="/user/about" class="h3 mx-2"><i class="bi bi-facebook"></i></router-link>
        <router-link to="/user/about" class="h3 me-2"><i class="bi bi-instagram"></i></router-link>
        <router-link to="/user/about" class="h3"><i class="bi bi-line"></i></router-link>
      </div>
      <div>
        <h5 class="ms-4">聯絡我們</h5>
        <ul>
          <li class="list-unstyled"><a class="text-decoration-none link-secondary"
            href="@/views/UserHome.vue">苗栗縣苗栗市幸福里藏花巷11號</a></li>
          <li class="list-unstyled"><a class="text-decoration-none link-secondary"
            href="tel:+886886886">+886 886 886</a></li>
          <li class="list-unstyled"><a class="text-decoration-none link-secondary"
            href="mailto:service@plantsarrive.com">service@plantsarrive.com</a></li>
        </ul>
      </div>
    </div>
    <p class="text-center">Copyright © 2023 植到花藝 All rights reserved</p>
  </footer>
  <ToastMessage></ToastMessage>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle'
import ToastMessage from '@/components/ToastMessage.vue'
import emitter from '@/methods/emitter'
import PushMessageState from '@/components/PushMessageState.vue'

export default {
  data () {
    return {
      cartQty: 0,
      wishedQty: 0,
      searchInput: ''
    }
  },
  created () {
    this.getCartQty()
    this.getWishedQty()
    emitter.on('cart-qty', () => this.getCartQty())
    emitter.on('wished-qty', () => this.getWishedQty())
  },
  methods: {
    getCartQty () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/cart`
      this.axios.get(api).then((res) => {
        console.log('getCarts', res)
        this.cartQty = res.data.data.carts.length
      })
    },
    getWishedQty () {
      this.wishedQty = localStorage.length
    },
    searchResult () {
      this.$router.push(`/user/search?q=${this.searchInput}`)
      this.searchInput = ''
    }
  },
  components: {
    ToastMessage
  },
  provide () {
    return {
      emitter,
      PushMessageState
    }
  }
}
</script>
