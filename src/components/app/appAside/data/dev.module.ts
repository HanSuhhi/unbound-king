import { h } from "vue";
import type { MenuOption } from "naive-ui";
import MenuItem from "../components/baseMenu/MenuItem.vue";
import AppMenuIcon from "../components/baseMenu/AsideMenuIcon.vue";

const routes: MenuOption[] = [
  {
    key: "character-design",
    label: () => h(MenuItem, {
      title: "角色设计",
      description: "角色的各项设计"
    }),
    icon: () => h(AppMenuIcon, {
      icon: "thinking"
    }),
    children: [
      {
        key: "name-design",
        label: () => h(MenuItem, {
          title: "姓名设计",
          path: "name-design",
          description: "设计角色姓名"
        }),
        icon: () => h(AppMenuIcon, {
          icon: "thinking"
        })
      },
      {
        key: "attribute-value",
        label: () => h(MenuItem, {
          title: "属性值",
          path: "attribute-value",
          description: "角色数值属性及含义"
        }),
        icon: () => h(AppMenuIcon, {
          icon: "thinking"
        })
      },
      {
        key: "attribute",
        label: () => h(MenuItem, {
          title: "属性",
          path: "attribute",
          description: "角色属性及属性效果"
        }),
        icon: () => h(AppMenuIcon, {
          icon: "thinking"
        })
      },
      {
        key: "personality-design",
        label: () => h(MenuItem, {
          title: "个性设计",
          path: "personality-design",
          description: "每个角色都有脾气！"
        }),
        icon: () => h(AppMenuIcon, {
          icon: "thinking"
        })
      },
      {
        key: "trait-design",
        label: () => h(MenuItem, {
          title: "特征设计",
          path: "trait-design",
          description: "角色是灰的。"
        }),
        icon: () => h(AppMenuIcon, {
          icon: "thinking"
        })
      },
      {
        key: "ambition-design",
        label: () => h(MenuItem, {
          title: "抱负设计",
          path: "ambition-design",
          description: "角色抱负相关设计"
        }),
        icon: () => h(AppMenuIcon, {
          icon: "thinking"
        })
      }
    ]
  },
  {
    key: "ethnicity-design",
    label: () => h(MenuItem, {
      title: "族裔设计",
      description: "包含种族、血统"
    }),
    icon: () => h(AppMenuIcon, {
      icon: "monster"
    }),
    children: [
      {
        key: "destiny-design",
        label: () => h(MenuItem, {
          title: "种族设计",
          path: "destiny-design",
          description: "查看所有种族参数"
        }),
        icon: () => h(AppMenuIcon, {
          icon: "monster"
        })
      },
      {
        key: "lineageo-design",
        label: () => h(MenuItem, {
          title: "血统设计",
          path: "lineageo-design",
          description: "查看、控制血统参数"
        }),
        icon: () => h(AppMenuIcon, {
          icon: "monster"
        })
      }
    ]
  },
  {
    key: "skill-design",
    label: () => h(MenuItem, {
      title: "技能设计",
      path: "skill-design",
      description: "技能参数设置"
    }),
    icon: () => h(AppMenuIcon, {
      icon: "character-param"
    })
  }
];

export default routes;
