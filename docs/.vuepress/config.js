module.exports = {
    base:'/wheel/',
    title: 'Wheel UI',
    description: '基于 Vue 的 UI 框架',
    themeConfig: {
        nav:[
            {text: '主页', link:'https://github.com/carxinho'},
            {text: '文档', link:'/guide/'},
            {text: '交流', link:'https://google.com'}
        ],
        sidebar: [
            {
                title:'入门',
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title:'组件',
                children: [
                    '/components/button',
                ]
            }
        ]
    }
}