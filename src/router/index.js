import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/DashboardHome.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/OrdersView.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/CouponsView.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/UserHome.vue')
      },
      {
        path: 'productList',
        name: 'productList',
        component: () => import('../views/UserProductList.vue'),
        children: [
          {
            path: 'all',
            name: '全部商品',
            meta: { name: 'All' },
            component: () => import('../views/UserAll.vue')
          },
          {
            path: 'gift',
            name: '送禮首選',
            meta: { name: 'Gift' },
            component: () => import('../views/UserGift.vue')
          },
          {
            path: 'plants',
            name: '植栽',
            meta: { name: 'Plant' },
            component: () => import('../views/UserPlants.vue')
          },
          {
            path: 'flowers',
            name: '乾燥花',
            meta: { name: 'Flower' },
            component: () => import('../views/UserFlowers.vue')
          },
          {
            path: 'wishList',
            name: '我的最愛',
            meta: { name: 'Wish List' },
            component: () => import('../views/UserWishList.vue')
          }
        ]
      },
      {
        path: 'product/:productId',
        name: 'product',
        props: true,
        component: () => import('../views/UserProduct.vue')
      },
      {
        path: 'about',
        name: '關於我們',
        meta: { name: 'About' },
        component: () => import('../views/UserAbout.vue')
      },
      {
        path: 'FAQ',
        name: '常見問題',
        meta: { name: 'FAQ' },
        component: () => import('../views/UserFAQ.vue')
      },
      {
        path: 'member',
        name: '加入會員',
        meta: { name: 'Membership' },
        component: () => import('../views/UserMembership.vue')
      },
      {
        path: 'cart',
        name: '購物車',
        meta: { name: 'Cart' },
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('../views/UserInfo.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('../views/UserCheckout.vue')
      },
      {
        path: 'search/:searchText',
        redirect: to => {
          return { path: '/search', query: { q: to.params.searchText } }
        }
      },
      {
        path: 'search',
        name: '搜尋',
        meta: { name: 'Search' },
        component: () => import('../views/UserSearch.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/UserNotFound.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
