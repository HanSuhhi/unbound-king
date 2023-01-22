export class Auth {
  constructor(private name: AuthModuleType) {}

  public get tocket() {
    return this.name;
  }
}

export const settingAuth = new Auth("setting");
