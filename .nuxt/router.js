import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0373ba28 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _5b63d4e2 = () => interopDefault(import('..\\pages\\auctions\\index.vue' /* webpackChunkName: "pages/auctions/index" */))
const _108deb9d = () => interopDefault(import('..\\pages\\Blog\\index.vue' /* webpackChunkName: "pages/Blog/index" */))
const _351fb542 = () => interopDefault(import('..\\pages\\Cart\\index.vue' /* webpackChunkName: "pages/Cart/index" */))
const _7aaf0f18 = () => interopDefault(import('..\\pages\\classifiedAds\\index.vue' /* webpackChunkName: "pages/classifiedAds/index" */))
const _1011f25d = () => interopDefault(import('..\\pages\\courses\\index.vue' /* webpackChunkName: "pages/courses/index" */))
const _f06eecda = () => interopDefault(import('..\\pages\\details\\index.vue' /* webpackChunkName: "pages/details/index" */))
const _8283aeb4 = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _259f9fec = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _5203f456 = () => interopDefault(import('..\\pages\\Notify\\index.vue' /* webpackChunkName: "pages/Notify/index" */))
const _32bbd7ec = () => interopDefault(import('..\\pages\\Profile\\index.vue' /* webpackChunkName: "pages/Profile/index" */))
const _337817db = () => interopDefault(import('..\\pages\\requests\\index.vue' /* webpackChunkName: "pages/requests/index" */))
const _6c1fcbd6 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _d4672406 = () => interopDefault(import('..\\pages\\auth\\change-password.vue' /* webpackChunkName: "pages/auth/change-password" */))
const _642dd486 = () => interopDefault(import('..\\pages\\auth\\check-code.vue' /* webpackChunkName: "pages/auth/check-code" */))
const _cc24dd2c = () => interopDefault(import('..\\pages\\auth\\forgot-password.vue' /* webpackChunkName: "pages/auth/forgot-password" */))
const _5cd4490e = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _62328d0e = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _3e101984 = () => interopDefault(import('..\\pages\\auth\\update-password.vue' /* webpackChunkName: "pages/auth/update-password" */))
const _60874327 = () => interopDefault(import('..\\pages\\Cart\\adresses.vue' /* webpackChunkName: "pages/Cart/adresses" */))
const _bcd53fb8 = () => interopDefault(import('..\\pages\\Cart\\personal-data.vue' /* webpackChunkName: "pages/Cart/personal-data" */))
const _09eaf14c = () => interopDefault(import('..\\pages\\Cart\\storement.vue' /* webpackChunkName: "pages/Cart/storement" */))
const _7c5bb729 = () => interopDefault(import('..\\pages\\courses\\bye\\index.vue' /* webpackChunkName: "pages/courses/bye/index" */))
const _481018f0 = () => interopDefault(import('..\\pages\\courses\\successBye.vue' /* webpackChunkName: "pages/courses/successBye" */))
const _5ed11772 = () => interopDefault(import('..\\pages\\auctions\\_slug.vue' /* webpackChunkName: "pages/auctions/_slug" */))
const _0ed74a55 = () => interopDefault(import('..\\pages\\Blog\\_slug.vue' /* webpackChunkName: "pages/Blog/_slug" */))
const _0e5b5115 = () => interopDefault(import('..\\pages\\courses\\_slug.vue' /* webpackChunkName: "pages/courses/_slug" */))
const _85f0f144 = () => interopDefault(import('..\\pages\\events\\_slug.vue' /* webpackChunkName: "pages/events/_slug" */))
const _23e8fea4 = () => interopDefault(import('..\\pages\\news\\_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _0ef01e64 = () => interopDefault(import('..\\pages\\Product\\_id.vue' /* webpackChunkName: "pages/Product/_id" */))
const _5bb5fe82 = () => interopDefault(import('..\\pages\\Search\\_id.vue' /* webpackChunkName: "pages/Search/_id" */))
const _e62e3842 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0373ba28,
    name: "about"
  }, {
    path: "/auctions",
    component: _5b63d4e2,
    name: "auctions"
  }, {
    path: "/Blog",
    component: _108deb9d,
    name: "Blog"
  }, {
    path: "/Cart",
    component: _351fb542,
    name: "Cart"
  }, {
    path: "/classifiedAds",
    component: _7aaf0f18,
    name: "classifiedAds"
  }, {
    path: "/courses",
    component: _1011f25d,
    name: "courses"
  }, {
    path: "/details",
    component: _f06eecda,
    name: "details"
  }, {
    path: "/events",
    component: _8283aeb4,
    name: "events"
  }, {
    path: "/news",
    component: _259f9fec,
    name: "news"
  }, {
    path: "/Notify",
    component: _5203f456,
    name: "Notify"
  }, {
    path: "/Profile",
    component: _32bbd7ec,
    name: "Profile"
  }, {
    path: "/requests",
    component: _337817db,
    name: "requests"
  }, {
    path: "/test",
    component: _6c1fcbd6,
    name: "test"
  }, {
    path: "/auth/change-password",
    component: _d4672406,
    name: "auth-change-password"
  }, {
    path: "/auth/check-code",
    component: _642dd486,
    name: "auth-check-code"
  }, {
    path: "/auth/forgot-password",
    component: _cc24dd2c,
    name: "auth-forgot-password"
  }, {
    path: "/auth/login",
    component: _5cd4490e,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _62328d0e,
    name: "auth-register"
  }, {
    path: "/auth/update-password",
    component: _3e101984,
    name: "auth-update-password"
  }, {
    path: "/Cart/adresses",
    component: _60874327,
    name: "Cart-adresses"
  }, {
    path: "/Cart/personal-data",
    component: _bcd53fb8,
    name: "Cart-personal-data"
  }, {
    path: "/Cart/storement",
    component: _09eaf14c,
    name: "Cart-storement"
  }, {
    path: "/courses/bye",
    component: _7c5bb729,
    name: "courses-bye"
  }, {
    path: "/courses/successBye",
    component: _481018f0,
    name: "courses-successBye"
  }, {
    path: "/auctions/:slug",
    component: _5ed11772,
    name: "auctions-slug"
  }, {
    path: "/Blog/:slug",
    component: _0ed74a55,
    name: "Blog-slug"
  }, {
    path: "/courses/:slug",
    component: _0e5b5115,
    name: "courses-slug"
  }, {
    path: "/events/:slug",
    component: _85f0f144,
    name: "events-slug"
  }, {
    path: "/news/:slug",
    component: _23e8fea4,
    name: "news-slug"
  }, {
    path: "/Product/:id?",
    component: _0ef01e64,
    name: "Product-id"
  }, {
    path: "/Search/:id?",
    component: _5bb5fe82,
    name: "Search-id"
  }, {
    path: "/",
    component: _e62e3842,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
