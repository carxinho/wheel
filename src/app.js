import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})

import chai from 'chai'
const expect = chai.expect
//单元测试
//icon
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
//loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
//iconPosition:left
{   const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('0')
    vm.$el.remove()
    vm.$destroy()
}
//iconPosition:right
{   const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
//click事件
{
    // mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    })
    vm.$mount()
    vm.$on('click', function () {
      expect(1).to.eq(1)
    })
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
  }