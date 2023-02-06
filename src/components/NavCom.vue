<template>
<div class="container mt-3">
  <button class="navbar-toggler link-dark-h me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <i class="bi bi-list fs-4"></i>
  </button>
  <router-link to="/dashboard/index" class="navbar-brand"><img src="../../public/images/logo2.png" width="80" alt="logo"></router-link>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <router-link to="/dashboard/index" class="h5 link-dark-h offcanvas-title" id="offcanvasExampleLabel">後台管理</router-link>
      <button type="button" class="btn btn-lg link-dark-h" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-arrow-left"></i></button>
    </div>
    <div class="offcanvas-body">
      <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <router-link to="/dashboard/products" class="nav-link link-dark-h"
              :class="{'active' : this.$route.fullPath === '/dashboard/products'}">商品</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard/orders" class="nav-link link-dark-h"
              :class="{'active' : this.$route.fullPath === '/dashboard/orders'}">訂單</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard/coupons" class="nav-link link-dark-h"
              :class="{'active' : this.$route.fullPath === '/dashboard/coupons'}">優惠券</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard/login" class="nav-link link-dark-h" @click.prevent="logout">登出</router-link>
            </li>
          </ul>
    </div>
  </div>
</div>

</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle'
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.axios.post(api, this.user)
        .then(res => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          if (res.data.success) {
            this.$router.push('/dashboard/login')
          }
        })
    }
  }
}
</script>
