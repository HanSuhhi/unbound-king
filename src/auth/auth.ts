export class Auth {
  public mount;
  public unmount;
  constructor(authFunc: AuthFunc, public ticket: string, public from?: AuthFrom) {
    this.mount = authFunc.mount;
    this.unmount = authFunc.unmount;
  }
}
