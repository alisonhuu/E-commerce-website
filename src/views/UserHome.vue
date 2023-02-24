<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active position-relative">
        <div class="text-center">
          <router-link to="/user/productList/all" class="btn btn-light rounded-4 px-2 px-md-4 position-absolute"
          style="top:50%; left:50%;">來逛逛</router-link>
        </div>
        <img src="../../public/images/banner0.jpg" class="d-block w-100" alt="banner0">
      </div>
      <div class="carousel-item">
        <img src="../../public/images/banner2.jpeg" class="d-block w-100" alt="banner1">
      </div>
      <div class="carousel-item">
        <img src="../../public/images/banner1.jpeg" class="d-block w-100" alt="banner2">
      </div>
      <div class="carousel-item">
        <img src="../../public/images/banner3.jpg" class="d-block w-100" alt="banner3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <section class="text-center mt-5 mb-6">
      <router-link to="/user/product/-NM001mjaHToREKpQrfs" class="p-2 d-block mx-auto new-img position-relative rounded">
        <img src="../../public/images/psa.jpg" class="position-relative rounded img-fluid" alt="newImg">
        <div class="new-text position-absolute text-center px-3 py-1 text-dark">
          <p class="display-6">新品上市</p>
          <p class="font-mirza display-6 mb-0">New Arrival</p>
          </div>
      </router-link>
    <div class="mt-4">
      <h4>掌握</h4>
      <p>屹立不搖的仙人掌與充滿活力的多肉植物<br>
        特別選用具有歷史痕跡的盆器<br>
        搭配刻有藝術氣息的圖騰<br>
        適合慧眼獨具的收藏家
      </p>
    </div>
  </section>
  <div class="container">
    <section class="row g-4 mt-5 justify-content-center align-items-center">
      <div class="col-7 col-md-4">
        <div class="card shadow slide-in align-left" ref="sliderImg">
          <img src="../../public/images/poster.jpg" class="img-fluid" alt="poster">
        </div>
      </div>
      <div class="col-7 col-md-4 slide-in align-right" ref="sliderArticle">
        <h4 class="text-primary fw-bold text-center">新會員招集中</h4>
        <h4 class="font-mirza text-primary text-center">Membership</h4>
        <p class="mt-2">您跟我們一樣喜愛花草，並希望享有更多優惠嗎？</p>
        <p>第一筆訂單享 85 折，每年獨享壽星優惠，不定期收到最新的行銷活動...等等好康，不能錯過。</p>
        <div class="text-center">
          <router-link to="/user/member" class="btn btn-outline-primary rounded-4 px-4">加入會員</router-link>
        </div>
      </div>
    </section>
    <main class="mt-6">
      <section class="my-6">
        <h4 class="text-center display-6">送禮首選</h4>
        <h4 class="font-mirza text-center display-6 mb-4">Gift</h4>
        <swiper :slidesPerView="2" :spaceBetween="30" :slidesPerGroup="2"
          :loop="true" :loopFillGroupWithBlank="true"
          :navigation="true" :modules="modules" class="mySwiper"
          :breakpoints="swiperOptions.breakpoints"
          :style="{'--swiper-navigation-color': '#A398C3', '--swiper-navigation-size': '2rem'}">
          <swiper-slide v-for="item in gifts" :key="item.id">
            <div>
              <a class="card text-decoration-none h-100" href="javascript:;" @click.prevent="getProduct(item.id)">
                <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
                class="product-img bg-center card-img-top"></div>
                <div class="card-body bg-light rounded-bottom">
                  <h6 class="card-title text-dark">{{ item.title }}</h6>
                  <p class="card-text fw-bold text-secondary">{{ $filters.currency(item.price) }}</p>
                </div>
              </a>
            </div>
          </swiper-slide>
        </swiper>
        <div class="text-center">
          <router-link to="/user/productList/gift" class="btn btn-outline-primary rounded-4 px-4 mt-4"> 查看更多</router-link>
        </div>
      </section>
      <section class="my-6">
        <h4 class="text-center display-6">乾燥花</h4>
        <h4 class="font-mirza text-center display-6 mb-4">Dried Flower</h4>
        <swiper :slidesPerView="2" :spaceBetween="30" :slidesPerGroup="2"
          :loop="true" :loopFillGroupWithBlank="true"
          :navigation="true" :modules="modules" class="mySwiper"
          :breakpoints="swiperOptions.breakpoints"
          :style="{'--swiper-navigation-color': '#A398C3', '--swiper-navigation-size': '2rem'}">
          <swiper-slide v-for="item in flowers" :key="item.id">
            <div>
              <a class="card text-decoration-none h-100" href="javascript:;" @click.prevent="getProduct(item.id)">
                <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
                class="product-img bg-center card-img-top"></div>
                <div class="card-body bg-light rounded-bottom">
                  <h6 class="card-title text-dark">{{ item.title }}</h6>
                  <p class="card-text fw-bold text-secondary">{{ $filters.currency(item.price) }}</p>
                </div>
              </a>
            </div>
          </swiper-slide>
        </swiper>
        <div class="text-center">
          <router-link to="/user/productList/flowers" class="btn btn-outline-primary rounded-4 px-4 mt-4"> 查看更多</router-link>
        </div>
      </section>
      <section class="my-6">
        <h4 class="text-center display-6">植栽</h4>
        <h4 class="font-mirza text-center display-6 mb-4">Plant</h4>
        <swiper :slidesPerView="2" :spaceBetween="30" :slidesPerGroup="2"
          :loop="true" :loopFillGroupWithBlank="true"
          :navigation="true" :modules="modules" class="mySwiper"
          :breakpoints="swiperOptions.breakpoints"
          :style="{'--swiper-navigation-color': '#A398C3', '--swiper-navigation-size': '2rem'}">
          <swiper-slide v-for="item in plants" :key="item.id">
            <div>
              <a class="card text-decoration-none h-100" href="javascript:;" @click.prevent="getProduct(item.id)">
                <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
                  class="product-img bg-center card-img-top"></div>
                <div class="card-body bg-light rounded-bottom">
                  <h6 class="card-title text-dark ">{{ item.title }}</h6>
                  <p class="card-text fw-bold text-secondary">{{ $filters.currency(item.price) }}</p>
                </div>
              </a>
            </div>
          </swiper-slide>
        </swiper>
        <div class="text-center">
          <router-link to="/user/productList/plants" class="btn btn-outline-primary rounded-4 px-4 mt-4"> 查看更多</router-link>
        </div>
      </section>
    </main>
    <section class="position-relative mx-0 bg-light my-6 p-4 row row-cols-1 row-cols-md-2 g-4 rounded justify-content-center">
      <div class="home-img bg-center rounded shadow"></div>
      <div class="col ps-md-4 ">
        <div class="opacity-75 h4 rounded-circle bg-primary text-light position-absolute d-flex justify-content-center align-items-center"
        style="top:-7%; left: -2%; width:6rem; height:6rem"><p class="mb-0">限時開課</p></div>
        <h4 class="text-center display-6">花藝課程</h4>
        <h4 class="font-mirza text-center  mb-3 display-6">Course</h4>
        <p>課程內容｜永生花、乾燥花束教學，包含相關知識、工具的使用、花材的加工與照顧、實用技術等等。</p>
        <p>課程時間｜兩小時</p>
        <p>課程費用｜NT $2,500</p>
        <p>課程提供｜花材、包裝、提袋</p>
        <p>課程報名｜請來電客服 <a class="link-dark-h" href="tel:+886886886">+886 886 886</a></p>
      </div>
    </section>
    <section class="text-center mt-6">
      <h4 class="display-6">為何選擇我們</h4>
      <h4 class="font-mirza display-6">Why choose us</h4>
      <div class="row row-cols-2 row-cols-md-4 justify-content-between align-items-center">
        <div class="col">
            <img src="../../public/images/feature.png" class="img-fluid" alt="feature">
          <div>
            <h5 class="mt-3">獨家設計</h5>
            <p>專業的花藝設計師精心製作而成</p>
          </div>
        </div>
        <div class="col">
          <img src="../../public/images/feature2.png" class="img-fluid" alt="feature">
          <div>
            <h5 class="mt-3">出貨快速</h5>
            <p>當季花材，訂單完成後立即製作</p>
          </div>
        </div>
        <div class="col">
          <img src="../../public/images/feature1.png" class="img-fluid" alt="feature">
          <div>
            <h5 class="mt-3">企業服務</h5>
            <p>專屬合作方案，大量採購更優惠</p>
          </div>
        </div>
        <div class="col">
          <img src="../../public/images/feature3.png" class="img-fluid" alt="feature">
          <div>
            <h5 class="mt-3">訂製需求</h5>
            <p>依照需求客製化喜歡的風格樣式</p>
          </div>
        </div>
      </div>
    </section>
    <div>
      <div class="modal" tabindex="-1" ref="mailModal">
        <div class="modal-dialog modal-dialog-centered justify-content-center">
          <div class="modal-content bg-center border-0" :style="{maxWidth: '320px', 'backgroundImage': `url(${require('../../public/images/home_mail.jpg')})`}">
            <div class="modal-header border-bottom-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body mx-4 rounded" style="background:rgba(255,255,255,0.8)">
              <h5><i class="bi bi-envelope me-2"></i>訂閱電子報</h5>
              <p>想獲得更多優惠通知嗎？<br>
                請在下方輸入Email，接收最新消息！</p>
              <input type="text" ref="mail" placeholder="Email" class="form-control">
              <p v-if="wrongMsg" class="text-danger">{{ wrongMsg }}</p>
            </div>
            <div class="modal-footer border-top-0">
              <button type="button" class="btn btn-light rounded-4 px-2" @click="sentEmail">送出</button>
            </div>
          </div>
        </div>
     </div>
     <div class="modal modal-sm fade" ref="successModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered justify-content-center">
          <div class="modal-content" style="width:200px;">
            <div class="modal-body text-center">
              <p class="display-5 text-primary"><i class="bi bi-patch-check"></i></p>
              恭喜訂閱成功！
            </div>
            <div class="modal-footer ">
              <button type="button" class="btn btn-sm btn-outline-primary rounded-4 px-2" data-bs-dismiss="modal">確認</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      products: [],
      isLoading: false,
      listener: '',
      modules: [Navigation],
      swiperOptions: {
        breakpoints: {
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20
          }
        }
      },
      modal: {},
      successModal: {},
      wrongMsg: ''
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    this.modal = new Modal(this.$refs.mailModal)
    this.successModal = new Modal(this.$refs.successModal)
    this.modal.show()
    if (this.$refs.sliderImg) {
      this.listener = this.debounce(this.imgSlide)
      window.addEventListener('scroll', this.listener)
    }
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.listener)
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_API_PATH}/products/all`
      this.axios.get(api).then((res) => {
        this.isLoading = false
        this.products = res.data.products
      })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },
    debounce (func, wait = 20, immediate = true) {
      let timeout
      return function () {
        const context = this; const args = arguments
        const later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    },
    imgSlide () {
      const img = this.$refs.sliderImg
      const slideInAt = window.scrollY + window.innerHeight - img.clientHeight / 3 // 滾動到圖片三分之一時滑入
      const imageBottom = img.offsetTop + img.clientHeight
      const isShown = slideInAt > img.offsetTop
      const isNotScrolledPast = window.scrollY < imageBottom
      if (isShown && isNotScrolledPast) {
        this.$refs.sliderImg.classList.add('active')
        this.$refs.sliderArticle.classList.add('active')
      } else {
        this.$refs.sliderImg.classList.remove('active')
        this.$refs.sliderArticle.classList.remove('active')
      }
    },
    sentEmail () {
      if (this.$refs.mail.value) {
        this.modal.hide()
        this.successModal.show()
      } else {
        this.wrongMsg = '請輸入Email'
      }
    }
  },
  computed: {
    gifts () {
      return this.products.filter(
        (item) => item.is_gift === true)
    },
    flowers () {
      return this.products.filter(
        (item) => item.category === 'flowers')
    },
    plants () {
      return this.products.filter(
        (item) => item.category === 'plants')
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
