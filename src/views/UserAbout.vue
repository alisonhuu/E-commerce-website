<template>
<div class="container">
  <BreadcrumbCom></BreadcrumbCom>
  <router-link to="/user/member" class="btn-fixed d-none d-md-block link-dark-h">
    <div class="msg mb-1 text-center">快來加入會員吧！</div>
    <div class="btn-img" :style="{'backgroundImage': `url(${require('../../public/images/about_member.png')})`}"></div>
  </router-link>
</div>
<div class="bg-center mb-6" :style="{height: '35vh', 'backgroundImage': `url(${require('../../public/images/about_bg.jpeg')})`}"></div>
<div class="container">
  <div>
    <h4 class="text-primary display-6 text-center"><em>植到遇見，生活更美好。</em></h4>
    <h4 class="font-mirza text-primary mb-6 text-center">Life becomes better when we meet plants</h4>
    <div class="mx-auto">
      <div class="my-6 row justify-content-center align-items-center">
        <div class="col-5 about-img">
          <img src="../../public/images/about_1.jpg" class="img-fluid shadow position-relative"
          style="z-index: 5;" alt="about1">
        </div>
        <p class="col-5 bg-light p-2 p-md-5 m-3"><strong>植到花藝</strong>專賣乾燥花和各式各樣的植栽，搭配不同的盆器、擺飾，設計出一個個充滿生命力的作品。</p>
      </div>
      <div class="my-6 row justify-content-center align-items-center">
        <p class="col-5 bg-light p-2 p-md-5 m-3">我們是一群熱愛花草、植物的小夥伴，細心、用心，開心，做著讓我們幸福的事。</p>
        <div class="col-5 about-img">
          <img src="../../public/images/about_2.jpg" class="img-fluid shadow position-relative"
          style="z-index: 5;" alt="about1">
        </div>
      </div>
      <div class="my-6 row justify-content-center align-items-center">
        <div class="col-5 about-img">
          <img src="../../public/images/about_3.jpg" class="img-fluid shadow position-relative"
          style="z-index: 5;" alt="about1">
        </div>
        <p class="col-5 bg-light p-2 p-md-5 m-3">希望將這份美好傳遞給您，讓我們沐浴在花草的的清新中，感受身心全然的放鬆。</p>
      </div>
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
