import { defineLang } from "../lang.model";
import { CN_Gender } from "../packages/arcade/regist-character/gender";
import { CN_Lineage } from "../packages/arcade/regist-character/lineage";
import { CN_Profession } from "../packages/arcade/regist-character/profession";
import { CN_Race } from "../packages/arcade/regist-character/race";
import { CN_RegistCharacter } from "../packages/arcade/regist-character/registCharacter";
import { CN_Trait } from "../packages/arcade/regist-character/trait";
import { CN_Validator } from "../packages/validator";

export default defineLang({
  hotkey: "c",
  aside: {
    modules: {
      assets: "资源管理",
      dev: "开发者模块"
    }
  },
  enum: {
    "gender": CN_Gender,
    "profession": CN_Profession,
    "trait": CN_Trait.title,
    "trait-description": CN_Trait.description,
    "race": CN_Race,
    "lineage": CN_Lineage
  },
  validate: CN_Validator,
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
      close: "取消",
      confirm: "确认"
    },
    quitGame: {
      description: "是否确认退出并关闭页面？未保存的游玩数据可能不会被保存。"
    },
    logout: {
      title: "返回到登录界面",
      description: "是否确认并返回到登录界面？已保存的用户信息不会被清空。",
      success: "返回成功"
    }
  },
  exception: {
    findUserHistoryIndexDB: "01: 无法在 indexDB 中查找到用户，请联系管理员。",
    visitUnauthorizedPage: "02: 正在访问未授权地址。"
  },
  usercard: {
    nameInputPlaceholder: "尚未登录",
    toggle: "切换用户"
  },
  header: {
    perference: {
      backLogin: "返回登录界面",
      openSetting: "系统设置",
      quitGame: "退出游戏",
      replaceDeveloperPage: "开发者界面"
    }
  },
  auth: {
    unauthorizedRequest: "未认证请求，请重新登录",
    title: "正在登录...",
    loginSuccess: "欢迎回来",
    emailPlaceholder: "邮箱地址...",
    verifyCodePlaceholder: "邮箱验证码...",
    getVerifyCode: "获取验证码",
    loginTitle: "登录",
    loginTitleSuffix: "百无禁忌",
    subtitle: "伙伴们都在等待你的回来！",
    rememberEmail: "记住邮箱",
    keepMeSignedIn: "保持登录状态（10 天）",
    agreePolicy: "我已经阅读并同意",
    policy: "隐私政策",
    historicalAccount: "历史登录账户",
    emailLoginTitle: "邮箱登录",
    policyForm: "请关注这里 🙌",
    userHistoryEmpty: "暂无用户登录信息",
    sendMail: "发送邮件验证码成功"
  },
  userDrawer: {
    title: "用户列表"
  },
  asideModules: {
    "base-icon": {
      title: "基础图标",
      desc: "项目框架所使用图标"
    },
    "game-icon": {
      title: "游戏图标",
      desc: "游戏中用到的图标"
    },
    "character-design": {
      title: "角色设计",
      desc: "角色的各项设计"
    },
    "name-design": {
      title: "姓名设计",
      desc: "设计角色姓名"
    },
    "attribute-value": {
      title: "属性值",
      desc: "角色数值属性及含义"
    },
    "attribute": {
      title: "属性",
      desc: "角色属性及属性效果"
    },
    "personality-design": {
      title: "个性设计",
      desc: "每个角色都有脾气！"
    },
    "trait-design": {
      title: "特征设计",
      desc: "角色是灰的。"
    },
    "ambition-design": {
      title: "抱负设计",
      desc: "角色抱负相关设计"
    },
    "ethnicity-design": {
      title: "族裔设计",
      desc: "包含种族、血统"
    },
    "destiny-design": {
      title: "种族设计",
      desc: "查看所有种族参数"
    },
    "lineageo-design": {
      title: "血统设计",
      desc: "查看、控制血统参数"
    },
    "skill-design": {
      title: "技能设计",
      desc: "技能参数设置"
    }
  },
  arcade: {
    "character-selection": {
      selectionTitle: "选择角色",
      characterTitle: "角色详情",
      registCharacterButton: "新建角色"
    },
    "regist_character": CN_RegistCharacter
  }
}, "中文");
