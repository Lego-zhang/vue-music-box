// 创建组件对应DOM
import { createApp } from 'vue'
import loading from './loading'

import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

// 组件生命周期
const loadingDirective = {
  mounted (el, binding) {
    const app = createApp(loading)
    // 在挂载点上动态创建一个 DIV 对象;
    // Loading指令挂载到 el 上;
    const instance = app.mount(document.createElement('div'))
    // 保留 instance ，因为instance mounted 时只创建一次。其他钩子函数访问它的话。需要保留在 el 对象上
    el.instance = instance
    // 设置 loading title
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }
    // 挂载操作

    if (binding.value) {
      appendDiv(el)
    }
  },
  updated (el, binding) {
    // 设置 loading title
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? appendDiv(el) : removeDiv(el)
    }
  }
}

function appendDiv (el) {
  // 指令挂载到什么地方，el就指向那个DOM
  //

  // 获取被绑定DOM的样式
  const style = getComputedStyle(el)

  if (['absolte', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }

  el.appendChild(el.instance.$el)
}

function removeDiv (el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
