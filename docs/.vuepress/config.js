const {
    defaultTheme
} = require('@vuepress/theme-default')
const {
    searchPlugin
} = require('@vuepress/plugin-search')
module.exports = {
    lang: 'zh-CN',
    title: '动力密码网络学院',
    description: '网络安全工程师|等保测评工程师|密码测评工程师|软件测试工程师|渗透测试|Linux 开发|Java开发|Web前端开发|',
    // base: '/dolimima/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/images/icon.png'
        }]
    ],
    //插件
    plugins: [
        searchPlugin({
            // 配置项
            locales: {
                '/': {
                    placeholder: '搜索文档',
                }
            },
        })
    ],
    theme: defaultTheme({
        // 导航
        navbar: [
            // NavbarItem
            {
                text: '网络安全',
                children: [{
                    text: '网络安全工程师',
                    link: '/webSafe/webSafeEngineer'
                }, {
                    text: '渗透测试工程师',
                    link: '/webSafe/penetrationTestEngineer'
                }]
            },
            {
                text: '等保密评',
                children: [{
                    text: '等级保护测评师',
                    link: '/webProtect/gradeProtectionEngineer'
                }, {
                    text: '商用密码测评师',
                    link: '/webProtect/cryptographicEngineer'

                }]
            },
            {
                text: '软件测试',
                link: '/softwareTest',
            },
            {
                text: '网络工程',
                link: '/webProject',
            },
            {
                text: 'Linux',
                link: '/linux',
            },
            {
                text: 'web全栈',
                children: [{
                        text: 'web前端',
                        link: '/web/web'

                    }, {
                        text: '微信小程序',
                        link: '/web/wechat'
                    },
                    {
                        text: 'vue',
                        link: '/web/vue'

                    },
                    {
                        text: 'java',
                        link: '/web/java'

                    }, {
                        text: 'php',
                        link: '/web/php'
                    },
                    {
                        text: 'python',
                        link: '/web/python'
                    }
                ]
            },

        ],
        //网站logo
        logo: '/images/logo.png',
        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: {
            '/': [{
                children: ['/codeGuide.md'],
            }],
            '/webSafe/webSafeEngineer/': [{
                // text: '网络安全工程师',
                children: ['/webSafe/webSafeEngineer/README.md'],
            }],
            '/webSafe/PenetrationTestEngineer/': [{
                // text: '渗透测试工程师',
                children: ['/webSafe/PenetrationTestEngineer/README.md'],
            }],
            '/webProtect/gradeProtectionEngineer': [{
                children: ['/webProtect/gradeProtectionEngineer/README.md'],
            }],
            '/webProtect/cryptographicEngineer': [{
                children: ['/webProtect/cryptographicEngineer/README.md'],
            }],
            '/web/java/': [{
                children: ['/web/java/readme.md'],
            }],
            '/web/php/': [{
                children: ['/web/php/readme.md'],
            }],
            '/web/vue/': [{
                children: ['/web/vue/readme.md'],
            }],
            '/web/wechat/': [{
                children: ['/web/wechat/readme.md'],
            }],
            '/web/web/': [{
                children: ['/web/web/readme.md'],
            }],
            '/web/python/': [{
                children: ['/web/python/readme.md'],
            }],
            '/softwareTest/': [{
                children: ['/softwareTest/readme.md'],
            }],
            '/linux/': [{
                children: ['/linux/readme.md'],
            }],
            '/webProject/': [{
                children: ['/webProject/readme.md']
            }]
        },
        displayAllHeaders: true,
        activeHeaderLinks: true,
        markdown: {
            headers: {
                level: [3, 4]
            }
        }
    }),
}