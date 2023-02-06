<template>
  <LoadingCom :active="isLoading"></LoadingCom>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
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
  <section class="bg-light mt-4 p-4 row row-cols-1 row-cols-md-2 g-4">
    <div class="col home-img bg-center rounded"></div>
    <div class="col ps-md-4">
      <h4 class="text-center display-5">花藝課程</h4>
      <h4 class="font-mirza text-center  mb-3 display-6">Course</h4>
      <p>課程內容｜永生花、乾燥花束教學，包含相關知識、工具的使用、花材的加工與照顧、實用技術等等。</p>
      <p>課程時間｜兩小時</p>
      <p>課程費用｜NT $2,500</p>
      <p>課程提供｜花材、包裝、提袋</p>
      <p>課程報名｜請來電客服 <a class="link-dark-h" href="tel:+886886886">+886 886 886</a></p>
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
        <p class="mt-3">您跟我們一樣喜愛花草，並希望享有更多優惠嗎？</p>
        <p>第一筆訂單享 85 折，每年獨享壽星優惠，不定期收到最新的行銷活動...等等好康，不能錯過。</p>
        <div class="text-center">
          <router-link to="/user/member" class="btn btn-outline-primary rounded-4 px-4">加入會員</router-link>
        </div>
      </div>
    </section>
    <main class="mt-6">
      <section class="my-6">
        <h4 class="text-center text-primary">送禮首選</h4>
        <h4 class="font-mirza text-center text-primary mb-4">Gift</h4>
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
                <div class="card-body bg-light">
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
        <h4 class="text-center text-primary">乾燥花</h4>
        <h4 class="font-mirza text-center text-primary mb-4">Dried Flower</h4>
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
                <div class="card-body bg-light">
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
        <h4 class="text-center text-primary">植栽</h4>
        <h4 class="font-mirza text-center text-primary mb-4">Plant</h4>
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
                <div class="card-body bg-light">
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
    <section class="text-center mt-6">
      <h4 class="text-primary">為何選擇我們</h4>
      <h4 class="font-mirza text-primary">Why choose us</h4>
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
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

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
      }
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
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
      const slideInAt = window.scrollY + window.innerHeight - 30
      const imageBottom = this.$refs.sliderImg.offsetTop
      const isShown = slideInAt > this.$refs.sliderImg.offsetTop + 30
      const isNotScrolledPast = window.scrollY < imageBottom
      // console.log(window.scrollY, window.innerHeight, slideInAt, imageBottom)
      if (isShown && isNotScrolledPast) {
        this.$refs.sliderImg.classList.add('active')
        this.$refs.sliderArticle.classList.add('active')
      } else {
        this.$refs.sliderImg.classList.remove('active')
        this.$refs.sliderArticle.classList.remove('active')
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
