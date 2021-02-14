import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  // console.log(Vue);
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 此时这里的Toast不是一个组件只是一个对象
  // toastContrustor是一个构造函数 new 这个构造函数 创建一个组件

  // 2.new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  // 3.将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'))
  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj