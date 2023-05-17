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
    i18n: "切换语言",
    theme: "日夜模式",
    screen: "切换全屏",
    modules: "系统模块",
    close_modules: "关闭打开模块"
  }
}, "中文");
