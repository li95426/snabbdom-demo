// parcel不支持这种写法，在webpack中没有问题
// import { init } from "snabbdom/init";
// import { h } from "snabbdom/h";
import { init } from "snabbdom/build/package/init";
import { h } from "snabbdom/build/package/h";

const patch = init([])

let vNode = h('div#container.cls', [
  h('h1', 'Hello Snabbdom'),
  h('p', '这是p')
])

const app = document.querySelector('#app')

let oldVNode = patch(app, vNode)

setTimeout(() => {
  // vNode = h('div#container', [
  //   h('h1', 'Hello World'),
  //   h('p', '你好p')
  // ])

  // 清空节点
  // patch(oldVNode, vNode)
  patch(oldVNode, h('!'))
}, 2000)