<template>
  <div class="toast-container position-fixed pe-3 top-0 end-0">
    <ToastCom v-for="(msg, key) in messages" :key="'msg'+key" :msg="msg"></ToastCom>
  </div>
</template>

<script>
import ToastCom from '@/components/ToastCom.vue'

export default {
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  },
  components: {
    ToastCom
  },
  inject: ['emitter']
}
</script>
