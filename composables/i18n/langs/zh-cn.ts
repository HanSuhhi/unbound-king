import { invalidCn } from "../composable";
import { defineLang } from "../lang.model";

export default defineLang({
  hotkey: "c",
  validate: {
    props: invalidCn("参数"),
    email: invalidCn("邮箱"),
    authenticationCode: invalidCn("验证码")
  },
  registration: {
    title: "注册用户",
    text: "该账号尚未注册，是否确认注册？"

  },
  workshop: {
    standard: {
      title: "基础包",
      description: " 此包为游戏基础包，包含了游戏本体的基本内容及所有相关系统。默认加载，无法卸除。 ",
      more: "了解更多"
    }
  },
  modules: {
    i18n: "切换语言",
    theme: {
      title: "日夜模式"
    },
    screen: {
      title: "切换全屏"
    },
    modules: {
      title: "系统模块"
    },
    close: "关闭顶部模块"
  },
  dialog: {
    global: {
      close: "弹窗关闭",
      confirm: "弹窗确定"
    }
  },
  auth: {
    title: "正在登录...",
    emailPlaceholder: "邮箱地址...",
    verifyCodePlaceholder: "邮箱验证码...",
    getVerifyCode: "获取验证码",
    loginTitle: "登录",
    loginTitleSuffix: "百无禁忌",
    subtitle: "伙伴们都在等待你的回来！",
    rememberEmail: "记住邮箱",
    keepMeSignedIn: "保持登录状态（一周）",
    agreePolicy: "我已经阅读并同意",
    policy: "隐私政策",
    historicalAccount: "历史登录账户",
    emailLoginTitle: "邮箱登录"
  }
}, "中文");
