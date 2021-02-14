import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const Login = () => import('views/login/Login')
const Search = () => import('views/search/Search')
const SearchResult = () => import('views/searchResult/SearchResult')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      needLogin: false
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '分类',
      needLogin: false
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: '购物车',
      needLogin: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '个人',
      needLogin: true
    }
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '详情',
      needLogin: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      needLogin: false
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: '搜索',
      needLogin: false
    }
  },
  {
    path: '/searchResult',
    name: 'SearchResult',
    component: SearchResult,
    meta: {
      title: '搜索',
      needLogin: false
    }
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // 判断是否需要登录
  if (to.meta.needLogin) {
    // 需要登录
    const token = sessionStorage.getItem('token')
    if (!token) {
      // 并且缓存中没有token
      next({
        name: 'Login',
        params: {
          from: to.fullPath
        }
      })
    } 
  }
  next() //不写这个next函数的话，路径都不出来（路径映射的组件没出来）
})

export default router
