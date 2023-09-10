import { invalid, invalidCn } from "../composable";

export const EN_Validator = {
  props: invalid("props"),
  email: invalid("email"),
  authenticationCode: invalid("authentication code"),
  characterName: invalid("name")
};

export const CN_Validator = {
  props: invalidCn("参数"),
  email: invalidCn("邮箱"),
  authenticationCode: invalidCn("验证码"),
  characterName: invalidCn("姓名")
};
