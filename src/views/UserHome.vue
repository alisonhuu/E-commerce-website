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
  <section class="row g-4  mt-5 justify-content-center align-items-center">
    <div class="col-7 col-md-4">
      <div class="card shadow slide-in align-left" ref="sliderImg">
        <img src="../../public/images/poster.jpg" class="img-fluid" alt="poster">
      </div>
    </div>
    <div class="col-7 col-md-4 slide-in align-right" ref="sliderArticle">
      <h4 class="text-primary fw-bold text-center">新會員招集中</h4>
      <p class="mt-3">您喜愛花草，希望有植物圍繞在身旁嗎？</p>
      <p>現在加入會員並輸入優惠碼：NewCustomer</p>
      <p>第一筆訂單享 85 折，每年獨享壽星優惠，不定期收到最新的優惠通知...等等好康，不能錯過。</p>
    </div>
  </section>
  <main class="mt-5">
    <section class="my-5">
      <h5 class="mb-4">送禮首選</h5>
      <swiper :slidesPerView="2" :spaceBetween="30" :slidesPerGroup="2"
        :loop="true" :loopFillGroupWithBlank="true"
        :navigation="true" :modules="modules" class="mySwiper"
        :breakpoints="swiperOptions.breakpoints"
        :style="{'--swiper-navigation-color': '#A398C3', '--swiper-navigation-size': '2rem'}">
        <swiper-slide v-for="item in gifts" :key="item.id">
          <div>
            <a class="card text-decoration-none h-100" href="javascript:;" @click.prevent="getProduct(item.id)">
              <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
                style="height: 240px" class="bg-center card-img-top"></div>
              <div class="card-body bg-light">
                <h5 class="card-title text-dark">{{ item.title }}</h5>
                <p class="card-text fw-bold text-secondary">{{ $filters.currency(item.price) }}</p>
              </div>
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <section class="my-5">
      <h5 class="mb-4">乾燥花</h5>
      <swiper :slidesPerView="2" :spaceBetween="30" :slidesPerGroup="2"
        :loop="true" :loopFillGroupWithBlank="true"
        :navigation="true" :modules="modules" class="mySwiper"
        :breakpoints="swiperOptions.breakpoints"
        :style="{'--swiper-navigation-color': '#A398C3', '--swiper-navigation-size': '2rem'}">
        <swiper-slide v-for="item in flowers" :key="item.id">
          <div>
            <a class="card text-decoration-none h-100" href="javascript:;" @click.prevent="getProduct(item.id)">
              <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
                style="height: 240px" class="bg-center card-img-top"></div>
              <div class="card-body bg-light">
                <h5 class="card-title text-dark">{{ item.title }}</h5>
                <p class="card-text fw-bold text-secondary">{{ $filters.currency(item.price) }}</p>
              </div>
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <section class="my-5">
      <h5 class="mb-4">植栽</h5>
      <swiper :slidesPerView="2" :spaceBetween="30" :slidesPerGroup="2"
        :loop="true" :loopFillGroupWithBlank="true"
        :navigation="true" :modules="modules" class="mySwiper"
        :breakpoints="swiperOptions.breakpoints"
        :style="{'--swiper-navigation-color': '#A398C3', '--swiper-navigation-size': '2rem'}">
        <swiper-slide v-for="item in plants" :key="item.id">
          <div>
            <a class="card text-decoration-none h-100" href="javascript:;" @click.prevent="getProduct(item.id)">
              <div :style="{ backgroundImage: `url(${item.imageUrl})`}"
                style="height: 240px" class="bg-center card-img-top"></div>
              <div class="card-body bg-light">
                <h5 class="card-title text-dark ">{{ item.title }}</h5>
                <p class="card-text fw-bold text-secondary">{{ $filters.currency(item.price) }}</p>
              </div>
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </main>
</template>

<script>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

export default {
  data () {
    return {
      products: [],
      isLoading: false,
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
      window.addEventListener('scroll', this.debounce(this.imgSlide))
    }
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
      const isHalfShown = slideInAt > this.$refs.sliderImg.offsetTop + 30
      const isNotScrolledPast = window.scrollY < imageBottom
      if (isHalfShown && isNotScrolledPast) {
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
