export default defineEventHandler(() => {
    return [
        {
            name: "首页",
            path: "/",
            children: []
        },
        {
            name: "前端三大框架",
            path: "前端三大框架",
            children: [
                {
                    name: "vue页面",
                    path: "/vue",
                    children: []
                },
                {
                    name: "react页面",
                    path: "/react",
                    children: []
                },
                {
                    name: "angular页面",
                    path: "/angular",
                    children: []
                }
            ]
        },
        {
            name: "后端两大框架",
            path: "后端两大框架",
            children: [
                {
                    name: "Spring Boot页面",
                    path: "/springBoot",
                    children: []
                },
                {
                    name: "Spring页面",
                    path: "Spring页面",
                    children: [
                        {
                            name: "MySql页面",
                            path: "/mysql",
                            children: []
                        },
                        {
                            name: "Redis页面",
                            path: "/redis",
                            children: []
                        }
                    ]
                },
                {
                    name: "Mybatis页面",
                    path: "/mybatis",
                    children: []
                }
            ]
        },
        {
            name: "其他",
            path: "/other",
            children: []
        }
    ];
});