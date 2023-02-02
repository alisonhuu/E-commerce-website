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
            component: () => import('../views/UserAll.vue')
          },
          {
            path: 'gift',
            name: '送禮首選',
            component: () => import('../views/UserGift.vue')
          },
          {
            path: 'plants',
            name: '植栽',
            component: () => import('../views/UserPlants.vue')
          },
          {
            path: 'flowers',
            name: '乾燥花',
            component: () => import('../views/UserFlowers.vue')
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
        name: 'about',
        component: () => import('../views/UserAbout.vue')
      },
      {
        path: 'FAQ',
        name: 'FAQ',
        component: () => import('../views/UserFAQ.vue')
      },
      {
        path: 'wishList',
        name: 'wishList',
        component: () => import('../views/UserWishList.vue')
      },
      {
        path: 'cart',
        name: 'cart',
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
        name: 'search',
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
