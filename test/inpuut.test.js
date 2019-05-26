const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Inpt', () => {
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
            expect(inputElements.readOnly).to.equal(true)
        })
        it('可以接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement[0].getAttribute('xlink:href')).to.equal('#i-error')
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
        it('支持 change 事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.on('change', callback)
            var event = new Event('change')
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 input 事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.on('input', callback)
            var event = new Event('input')
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 focus 事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.on('focus', callback)
            var event = new Event('focus')
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
        it('支持 blur 事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.on('blur', callback)
            var event = new Event('blur')
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
    })
})