import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, { closeButton, enablehtml, position }) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton,
                    enablehtml,
                    position
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}