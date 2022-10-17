// parcel不支持这种写法，在webpack中没有问题
// import { init } from "snabbdom/init";
// import { h } from "snabbdom/h";
import { init } from "snabbdom/build/package/init";
import { h } from "snabbdom/build/package/h";

const patch = init([])

// 第一个参数：标签+选择器
// 第二个参数：如果是字符串就是标签中的文本内容
let vNode = h('div#container.cls', 'Hello World')

const app = document.querySelector('#app')

// 第一个参数：旧的VNode，可以是 DOM 元素
// 第二个参数：新的 VNode
// 返回新的 VNode
let oldVNode = patch(app, vNode)

vNode = h('div#container.xxx', 'Hello Snabbdom')

patch(oldVNode, vNode)