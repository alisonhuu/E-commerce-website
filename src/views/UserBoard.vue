<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid flex-wrap">
      <button type="button" class="navbar-toggler link-dark-h" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <i class="bi bi-list fs-4"></i>
      </button>
      <router-link to="/" class="navbar-brand flex-grow-1 flex-md-grow-0">
        <img src="../../public/images/logo2.png" width="80" class="img-fluid" alt="logo">
      </router-link>
      <div class="order-1 order-md-0 collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="container-fluid d-flex justify-content-center">
          <ul class="navbar-nav text-nowrap">
            <li class="nav-item">
              <router-link to="/user/productList/all" class="nav-link link-dark-h"
              :class="{ 'active-c' : this.$route.fullPath === '/user/productList/all' }">全部商品</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/user/productList/gift" class="nav-link link-dark-h"
              :class="{ 'active-c' : this.$route.fullPath === '/user/productList/gift' }">送禮首選</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/user/productList/plants" class="nav-link link-dark-h"
              :class="{ 'active-c' : this.$route.fullPath === '/user/productList/plants' }">植栽</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/user/productList/flowers" class="nav-link link-dark-h"
              :class="{ 'active-c' : this.$route.fullPath === '/user/productList/flowers' }">乾燥花</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="order-0 order-md-1 d-flex align-items-center justify-content-end flex-nowrap">
        <form @submit.prevent="searchResult" style="width:110px" class="me-3">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-sm" type="search"
            v-model="searchInput" placeholder="Search" aria-label="Search">
            <button class="btn btn-secondary input-group-text" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </form>
        <router-link to="/user/productList/wishList" class="link-dark-h p-0 me-3">
          <i class="bi bi-heart-fill me-1"></i>
          <span class="position-relative pe-2">
            <span class="d-none d-md-inline">我的最愛</span>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" v-if="wishedQty > 0">
              {{ wishedQty }}
            </span>
          </span>
        </router-link>
        <router-link to="/user/cart" class="link-dark-h me-2">
          <i class="bi bi-cart me-1"></i>
          <span class="position-relative pe-2">
            <span class="d-none d-md-inline">購物車</span>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" v-if="cartQty > 0">
              {{ cartQty }}
            </span>
          </span>
        </router-link>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <footer class="bg-light mt-6 py-4">
    <div class="row row-cols-1 row-cols-md-3 justify-content-between text-center g-3 mx-0">
      <div class="col">
        <router-link to="/user/FAQ" class="link-dark-h">
          <h5>常見問題<span class="font-mirza ms-2">FAQ</span></h5>
        </router-link>
        <p>購物須知、認識乾燥花...等資訊</p>
      </div>
      <div class="col mb-3">
        <router-link to="/user/about" class="link-dark-h">
          <h5>關於我們<span class="font-mirza ms-2">About</span></h5>
        </router-link>
        <router-link to="/user/about" class="h3"><i class="bi bi-facebook"></i></router-link>
        <router-link to="/user/about" class="h3 mx-2"><i class="bi bi-instagram"></i></router-link>
        <router-link to="/user/about" class="h3"><i class="bi bi-line"></i></router-link>
      </div>
      <div class="col">
        <h5 class="">聯絡我們<span class="font-mirza ms-2">Contact</span></h5>
        <ul class="list-unstyled">
          <li>苗栗縣苗栗市幸福里藏花巷11號</li>
          <li>
            <a class="link-dark-h"
            href="tel:+886886886">+886 886 886</a>
          </li>
          <li>
            <a class="link-dark-h"
            href="mailto:service@plantsarrive.com">service@plantsarrive.com</a>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-center mb-0 pt-3">Copyright © 2023 植到花藝 All rights reserved</p>
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
