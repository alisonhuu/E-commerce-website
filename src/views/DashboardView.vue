<template>
  <div>
    <NavbarCom></NavbarCom>
    <div class="container my-4">
      <router-view></router-view>
    </div>
    <ToastMessage></ToastMessage>
  </div>
</template>

<script>
import NavbarCom from '@/components/NavCom.vue'
import emitter from '@/methods/emitter'
import ToastMessage from '@/components/ToastMessage.vue'
import PushMessageState from '@/components/PushMessageState.vue'

export default {
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}/api/user/check`
    this.axios.post(api)
      .then(res => {
        if (!res.data.success) {
          this.$router.push('/dashboard/login')
        }
      })
  },
  components: {
    NavbarCom,
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
