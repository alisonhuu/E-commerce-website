<template>
<div class="container">
  <BreadcrumbCom></BreadcrumbCom>
  <router-link to="/user/member" class="btn-fixed d-none d-md-block link-dark-h">
    <div class="msg mb-1 text-center">快來加入會員吧！</div>
    <div class="btn-img"></div>
  </router-link>
</div>
<div class="bg-center w-100 my-5" style="height: 250px; backgroundImage: url('/images/about_bg2.jpg')">
</div>
<div class="container">
  <div class="text-center row my-6">
    <h4 class="text-primary"><em>植到遇見，生活更美好。</em></h4>
    <h4 class="font-mirza text-primary mb-5">Life becomes better when we meet plants</h4>
    <div class="col-8 mx-auto">
      <p><strong>植到花藝</strong>專賣乾燥花和各式各樣的植栽，搭配不同的盆器、擺飾，設計出一個個充滿生命力的作品。</p>
      <p class="mt-5">我們是一群熱愛花草、植物的小夥伴，細心、用心，開心，做著讓我們幸福的事。</p>
      <p class="mt-5">希望將這份美好傳遞給您，讓我們沐浴在花草的的清新中，感受身心全然的放鬆。</p>
    </div>
  </div>
</div>
</template>

<script>
import BreadcrumbCom from '@/components/BreadcrumbCom.vue'

export default {
  components: { BreadcrumbCom }
}
</script>
