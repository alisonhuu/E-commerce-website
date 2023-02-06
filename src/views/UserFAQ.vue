<template>
  <div class="container">
    <BreadcrumbCom></BreadcrumbCom>
    <div class="row justify-content-center">
      <div class="col-11 col-md-8 mb-4">
        <span class="h5">商品</span>
        <span class="h5 font-mirza ms-2">Product</span>
      </div>
      <div class="accordion col-10" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              乾燥花是什麼？
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              乾燥花是鮮花經自然或人為乾燥後的成果，不需澆水。觸感偏皺、偏硬，顏色偏黃，容易保存，可以放置數月至數年。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              常見的乾燥花有哪些？
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              常見的有：滿天星、繡球、卡斯比亞、星辰、兔尾草、棉花、玫瑰、金杖球、大圓葉尤加利、小圓葉尤加利、帶果實尤加利等。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              植栽的外型會跟網站上一樣嗎？
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              因花藝商品非標準化商品，是有生命有個性的植物，植物的顏色或尺寸，會隨區域、季節及氣候的不同而有所差異。我們會確保商品的完整性（如植物的豐富度、顏色等），並維持接近照片中的設計風格。
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 mb-4 mt-5">
        <span class="h5">訂購</span>
        <span class="h5 font-mirza ms-2">Product</span>
      </div>
      <div class="accordion col-10" id="accordionExample2">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneShop" aria-expanded="false" aria-controls="collapseOneShop">
              可以更改訂單嗎？
            </button>
          </h2>
          <div id="collapseOneShop" class="accordion-collapse collapse" aria-labelledby="headingOne2" data-bs-parent="#accordionExample2">
            <div class="accordion-body">
              訂單成立24小時內可接受更改，請聯繫客服（Tel: +886 886 886），將有專人為您處理。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoShop" aria-expanded="false" aria-controls="collapseTwoShop">
              運費多少呢？
            </button>
          </h2>
          <div id="collapseTwoShop" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample2">
            <div class="accordion-body">
              商品總價內含運費，無需額外加付運費。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeShop" aria-expanded="false" aria-controls="collapseThreeShop">
              可以客製化商品嗎？
            </button>
          </h2>
          <div id="collapseThreeShop" class="accordion-collapse collapse" aria-labelledby="headingThree2" data-bs-parent="#accordionExample2">
            <div class="accordion-body">
              若需特別訂製，請詳述偏好的價位、風格、種類（有圖片更好），並寄至 <a class="text-decoration-none link-secondary" href="mailto:service@plantsarrive.com">service@plantsarrive.com</a>，
          我們將盡快與您聯繫。
            </div>
          </div>
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
