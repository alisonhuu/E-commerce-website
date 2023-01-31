<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <h4 class="mb-5 text-center">請填寫收件人資料</h4>
  <div class="row">
    <Form v-slot="{ errors }" @submit="createOrder" class="col-sm-6 mx-auto border p-4 bg-light rounded">
      <div class="mb-3">
        <label for="userName" class="form-label">姓名</label>
        <Field name="userName" type="text" class="form-control"
        label="姓名" id="userName" v-model="form.user.name"
        :class="{ 'is-invalid': errors['userName'] }"
        placeholder="請輸入姓名" rules="required"></Field>
        <ErrorMessage name="userName" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="userTel" class="form-label">電話</label>
        <Field name="userTel" class="form-control"
        label="電話" id="userTel" v-model="form.user.tel"
        :class="{ 'is-invalid': errors['userTel'] }"
        placeholder="請輸入電話" rules="numeric|required|min:8"></Field>
         <ErrorMessage name="userTel" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="userMail" class="form-label">Email</label>
        <Field name="email" type="email" class="form-control"
        id="userMail" v-model="form.user.email"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email" rules="email|required"></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="userAddress" class="form-label">地址</label>
        <Field name="userAddress" type="text" class="form-control"
        label="地址" id="userAddress" v-model="form.user.address"
        :class="{ 'is-invalid': errors['userAddress'] }"
        placeholder="請輸入地址" rules="required"></Field>
        <ErrorMessage name="userAddress" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="userMessage" class="form-label">備註</label>
        <textarea name="userMessage" id="userMessage" rows="3" class="form-control" v-model="form.message"></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-primary link-light">產生訂單</button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import '@/methods/validate.js'

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    createOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/order`
      const form = this.form
      this.axios.post(api, { data: form }).then((res) => {
        this.isLoading = false
        this.PushMessageState(res, '訂單')
        if (res.data.success) {
          const orderId = res.data.orderId
          this.$router.push(`/user/checkout/${orderId}`)
        }
        this.emitter.emit('cart-qty')
      })
    }
  },
  inject: ['emitter', 'PushMessageState'],
  components: {
    Field,
    Form,
    ErrorMessage
  }
}
</script>
