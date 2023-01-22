export class Auth {
  constructor(private name: AuthModuleType) {}

  public get ticket() {
    return this.name;
  }
}

export const settingAuth = new Auth("setting");
