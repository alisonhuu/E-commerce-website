<template>
    <div class="modal" tabindex="-1" ref="modal">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-primary text-white">
            <h4 class="modal-title" id="exampleModalLabel">產品</h4>
            <button type="button" class="btn-close btn-close-white"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                          placeholder="請輸入圖片連結" ref="fileInput">
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label">或 上傳圖片 </label>
                  <input type="file" id="customFile" class="form-control" ref="fileInput2">
                  <p class="text-danger"> {{ wrongMessage }}</p>
                </div>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm btn-outline-primary" @click.prevent="upload(true)">設為主圖</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click.prevent="upload(false)">加入其他圖片</button>
                </div>
                <div v-if="tempProduct.imageUrl" class="mt-3">
                  <div class="d-flex justify-content-between">
                    <h6 class="text-primary">主圖</h6>
                    <button type=button class="btn btn-sm btn-outline-danger" @click="tempProduct.imageUrl = ''">移除</button>
                  </div>
                    <img class="img-fluid mt-2" :src="tempProduct.imageUrl" alt="img">
                </div>
                <div v-for="(img, key) in tempProduct.imagesUrl" :key="img + `${key}`" class="mt-3">
                  <div class="d-flex justify-content-between">
                    <h6 class="text-primary">圖片 {{ key+1 }}</h6>
                    <button type=button class="btn btn-sm btn-outline-danger" @click="tempProduct.imagesUrl.splice(key, 1)">移除</button>
                  </div>
                  <img class="img-fluid mt-2 w-75" :src="img" alt="img">
                </div>
            </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input type="text" class="form-control" id="title"
                          placeholder="請輸入標題" v-model="tempProduct.title">
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <select name="category" class="form-select" id="category"
                    v-model="tempProduct.category">
                    <option disabled>請輸入分類</option>
                    <option value="plants">植栽</option>
                    <option value="flowers">乾燥花</option>
                  </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <select class="form-select" id="unit"
                    v-model="tempProduct.unit">
                    <option value="" selected disabled>請輸入單位</option>
                    <option value="盆">盆</option>
                    <option value="束">束</option>
                  </select>
                  </div>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input type="number" class="form-control" id="origin_price" min="1"
                            placeholder="請輸入原價" v-model="tempProduct.origin_price">
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input type="number" class="form-control" id="price" min="1"
                            placeholder="請輸入售價" v-model="tempProduct.price">
                  </div>
                </div>
                <hr>
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                            placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                            placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                            :true-value="true" :false-value="false" id="is_gift"
                            v-model="tempProduct.is_gift">
                    <label class="form-check-label" for="is_gift">是否為送禮首選</label>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                            :true-value="true" :false-value="false" id="is_enabled"
                            v-model="tempProduct.is_enabled">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
                    data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-outline-primary" @click.prevent="$emit('update-product', tempProduct)">確認</button>
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
      tempProduct: { },
      wrongMessage: '',
      mainImg: true
    }
  },
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    product () {
      if (this.product.imagesUrl) {
        this.tempProduct = this.product
      } else {
        this.tempProduct = { ...this.product, imagesUrl: [] }
      }
    }
  },
  emits: ['update-product'],
  methods: {
    upload (mainImg) {
      this.wrongMessage = ''
      const uploadedUrl = this.$refs.fileInput.value
      const uploadedFile = this.$refs.fileInput2.files[0]
      if (this.tempProduct.imagesUrl.length > 1 && mainImg === false) {
        this.wrongMessage = '其他圖片最多只能上傳 2 張'
      } else {
        if (uploadedUrl && !uploadedFile) {
          mainImg ? this.tempProduct.imageUrl = uploadedUrl : this.tempProduct.imagesUrl.push(uploadedUrl)
          this.$refs.fileInput.value = ''
        } else if (!uploadedUrl && uploadedFile) {
          this.uploadFile(mainImg, uploadedFile)
        } else {
          this.wrongMessage = '上傳失敗，請指定一種上傳方式'
        }
      }
    },
    uploadFile (mainImg, uploadedFile) {
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/admin/upload`
      this.axios.post(api, formData).then((res) => {
        if (res.data.success && mainImg === true) {
          this.tempProduct.imageUrl = res.data.imageUrl
        } else if (res.data.success && mainImg === false) {
          this.tempProduct.imagesUrl.push(res.data.imageUrl)
        } else {
          this.wrongMessage = res.data.message.message
        }
      })
      this.$refs.fileInput2.value = ''
    }
  },
  mixins: [modalMixins]
}
</script>
