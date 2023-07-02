export default [
  {
    path: "base-icon",
    title: "基础图标",
    description: "项目框架所使用图标",
    icon: "icons"
  },
  {
    path: "package-design",
    title: "包设计",
    description: "来设计自己的包！",
    icon: "package",
    children: [
      {
        path: "package-name",
        title: "包名设计",
        description: "每个人都需要有一个名字",
        icon: "package"
      },
      {
        path: "data-package-design",
        title: "数据包设计",
        description: "设计数据包内容！",
        icon: "package"
      }
    ]
  },
  {
    path: "creator-settings",
    title: "创造器设置",
    description: "创造器相关内容",
    icon: "light",
    children: [
      {
        path: "creator-plugin",
        title: "创造器插件",
        icon: "plugin",
        description: "把它理解为乐高积木！"
      },
      {
        path: "creator",
        title: "创造器",
        icon: "combine",
        description: "用乐高搭建大厦！"
      }
    ]
  }
];
