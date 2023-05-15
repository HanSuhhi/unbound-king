import { defineLang } from "../lang.model";

export default defineLang({
  workshop: {
    standard: {
      title: "基础包",
      description: " 此包为游戏基础包，包含了游戏本体的基本内容及所有相关系统。默认加载，无法卸除。 ",
      more: "了解更多"
    }
  },
  modules: {
    i18n: "语言",
    theme: "主题",
    screen: "是否全屏",
    modules: "系统模块"
  }
}, "中文");
