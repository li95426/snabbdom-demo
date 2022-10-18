import { init } from "snabbdom/build/package/init";
import { h } from "snabbdom/build/package/h";

// 1、导入模块
import { styleModule } from "snabbdom/build/package/modules/style";
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";

// 2、注册模块
const patch = init([styleModule, eventListenersModule])

// 3、使用h()函数的第二个参数传入模块中使用的数据（对象）
let vNode = h('div', [
  h('h1', {
    style: {
      backgroundColor: 'red'
    }
  }, '这是h1'),
  h('p', {
    on:{
      click: eventHandler
    }
  },'这是p')
])

function eventHandler() {
  console.log('eventHandler')
}

let app = document.querySelector('#app')
patch(app, vNode)