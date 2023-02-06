<template>
  <div class="container">
    <BreadcrumbCom></BreadcrumbCom>
    <div class="row">
      <Form v-slot="{ errors }" @submit="becomeMember" class="col-11 col-md-8 mx-auto shadow p-4 bg-light rounded">
        <div class="mb-3">
          <label for="userMail" class="form-label">Email</label>
          <Field name="email" type="email" class="form-control"
          id="userMail" v-model="form.user.email"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email" rules="email|required"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="userPassword" class="form-label">密碼</label>
          <Field name="password" type="password" class="form-control"
          label="密碼" id="userPassword" v-model="form.user.password"
          :class="{ 'is-invalid': errors['password'] }"
          placeholder="請輸入密碼" rules="required|min:8" autocomplete="off"></Field>
          <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="confirmation" class="form-label">確認密碼</label>
          <Field name="confirmation" type="password" class="form-control"
          label="密碼" id="confirmation"
          :class="{ 'is-invalid': errors['confirmation'] }"
          placeholder="請再次輸入密碼" rules="confirmed:@password|required" autocomplete="off"></Field>
          <ErrorMessage name="confirmation" class="invalid-feedback"></ErrorMessage>
        </div>
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
          <label for="userAddress" class="form-label">地址</label>
          <Field name="userAddress" type="text" class="form-control"
          label="地址" id="userAddress" v-model="form.user.address"
          :class="{ 'is-invalid': errors['userAddress'] }"
          placeholder="請輸入地址" rules="required"></Field>
          <ErrorMessage name="userAddress" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="subscribed"
          v-model="form.user.subscribed">
          <label class="form-check-label" for="subscribed">
            訂閱電子報
          </label>
        </div>
        <div class="text-center">
          <button type="submit" class="btn-shadow btn btn-primary link-light px-4">
          成為會員</button>
        </div>
      </Form>
      <div class="modal modal-sm fade " ref="memberModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header ">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              恭喜成為會員！
            </div>
            <div class="modal-footer ">
              <button type="button" class="btn btn-sm btn-outline-primary rounded-4 px-2" @click.prevent="goHome">確定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbCom from '@/components/BreadcrumbCom.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import '@/methods/validate.js'
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          password: '',
          tel: '',
          address: '',
          subscribed: false
        }
      },
      modal: {}
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.memberModal)
  },
  methods: {
    becomeMember () {
      this.form = {}
      this.modal.show()
    },
    goHome () {
      this.$router.push('/')
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage,
    BreadcrumbCom
  }
}
</script>
