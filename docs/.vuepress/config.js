module.exports = {
    base:'/wheel/',
    title: 'Wheel UI',
    description: '基于 Vue 的 UI 框架',
    themeConfig: {
        nav:[
            {text: '主页', link:'/'},
            {text: 'Github', link:'https://github.com/carxinho'}
        ],
        sidebar: [
            {
                title:'入门',
                children: [
                    '/',
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