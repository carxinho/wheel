const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('可以接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'hi'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('hi')
        })
        it('可以设置 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElements = vm.$el.querySelector('input')
            expect(inputElements.disabled).to.equal(true)
        })
        it('可以设置 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElements = vm.$el.querySelector('input')
            expect(inputElements. readOnly).to.equal(true)
        })
        it('可以接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('错了')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                    vm = new Constructor({}).$mount()
                    const callback = sinon.fake();
                    vm.$on(eventName, callback)
                    let event = new Event(eventName)
                    Object.defineProperty(
                        event, 'target', {
                            value: { value: 'hi' }, enumerable: true
                        }
                    )
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith('hi')
                })
        })
    })
})