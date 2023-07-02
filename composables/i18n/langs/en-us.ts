import { invalid } from "../composable";
import { defineLang } from "../lang.model";

const enUsModel = {
  hotkey: "e",
  aside: {
    modules: {
      assets: "Assets",
      dev: "Developer Module"
    }
  },
  validate: {
    props: invalid("props"),
    email: invalid("email"),
    authenticationCode: invalid("authentication code")
  },
  header: {
    perference: {
      backLogin: "Back to Login",
      openSetting: "System Setting",
      quitGame: "Quit Game",
      replaceDeveloperPage: "Developer Page"
    }
  },
  registration: {
    title: "Register",
    text: "This account has not been registered yet. Are you sure to register?"
  },
  workshop: {
    standard: {
      title: "Standard Package",
      description: "This package is the game base package, containing the basic content of the game itself and all related systems. Loaded by default, irremovable. ",
      more: "Learn more..."
    }
  },
  usercard: {
    nameInputPlaceholder: "Not Logged In",
    toggle: "Toggle User"
  },
  modules: {
    i18n: "Language",
    theme: {
      title: "Theme"
    },
    screen: {
      title: "Full Screen"
    },
    modules: {
      title: "System Modules"
    },
    close: "Close Modules"
  },
  dialog: {
    global: {
      close: "Cancel",
      confirm: "Confirm"
    },
    quitGame: {
      description: "Are you sure you want to exit and close the page? Any unsaved gameplay data may not be saved."
    },
    logout: {
      title: "Return to the auth page",
      description: "Confirm to return to the auth page? Saved user information will be retained.",
      success: "Logout Successfully"
    }
  },
  exception: {
    findUserHistoryIndexDB: "01: Unable to find user in index db, please contact administrator",
    visitUnauthorizedPage: "02: Unauthorized address is being accessed."
  },
  auth: {
    unauthorizedRequest: "Unauthorized request",
    title: "Login to your Account",
    emailPlaceholder: "Email Address",
    verifyCodePlaceholder: "Email Code",
    getVerifyCode: "Get Email Code",
    loginTitle: "Login to Your Account",
    loginTitleSuffix: "nothing taboo",
    subtitle: "Your peeps are hanging on you coming back.",
    rememberEmail: "Remember Email",
    keepMeSignedIn: "Keep me signed in (10 days)",
    agreePolicy: "I have read and agree to the",
    policy: "Privacy Policy.",
    historicalAccount: "Historical Account",
    emailLoginTitle: "Login With Email",
    policyForm: "Follow it please 🙌",
    userHistoryEmpty: "No Saved Users",
    sendMail: "Send Mail Successfully",
    loginSuccess: "Login Successfully"
  },
  userDrawer: {
    title: "User List"
  }
};

export default defineLang(enUsModel, "English");

export type I18N = typeof enUsModel;
