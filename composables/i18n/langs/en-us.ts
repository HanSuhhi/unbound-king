import { invalid } from "../composable";
import { defineLang } from "../lang.model";
import { EN_Gender } from "../packages/arcade/registcharacter/gender";
import { EN_Lineage } from "../packages/arcade/registcharacter/lineage";
import { EN_Profession } from "../packages/arcade/registcharacter/profession";
import { EN_Race } from "../packages/arcade/registcharacter/race";
import { EN_RegistCharacter } from "../packages/arcade/registcharacter/registCharacter";
import { EN_Trait } from "../packages/arcade/registcharacter/trait";

const enUsModel = {
  hotkey: "e",
  enum: {
    "gender": EN_Gender,
    "profession": EN_Profession,
    "trait": EN_Trait.title,
    "trait-description": EN_Trait.description,
    "race": EN_Race,
    "lineage": EN_Lineage
  },
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
  },
  asideModules: {
    "base-icon": {
      title: "Base Icon",
      desc: "Icons used in the system"
    },
    "game-icon": {
      title: "Game Icon",
      desc: "Icons used in the game"
    },
    "character-design": {
      title: "Character Design",
      desc: "Every character has a personality"
    },
    "name-design": {
      title: "Name Design",
      desc: "Design character Name"
    },
    "attribute-value": {
      title: "Attribute Value",
      desc: "ATK, DEF, HP ..."
    },
    "attribute": {
      title: "Attribute",
      desc: "Character attributes"
    },
    "personality-design": {
      title: "Personality Design",
      desc: "character's temperament!"
    },
    "trait-design": {
      title: "Trait Design",
      desc: "Some special traits."
    },
    "ambition-design": {
      title: "Ambition Design",
      desc: "character ambitions"
    },
    "ethnicity-design": {
      title: "Ethnicity Design",
      desc: "Includes race and lineage"
    },
    "destiny-design": {
      title: "Race Design",
      desc: "View all race parameters"
    },
    "lineageo-design": {
      title: "Lineage Design",
      desc: "control lineage parameters"
    },
    "skill-design": {
      title: "Skill Design",
      desc: "Parameter settings for skills"
    }
  },
  arcade: {
    "character-selection": {
      selectionTitle: "Character Selection",
      characterTitle: "Character Detail",
      registCharacterButton: "New character"
    },
    "regist_character": EN_RegistCharacter
  }
};

export default defineLang(enUsModel, "English");

export type I18N = typeof enUsModel;
