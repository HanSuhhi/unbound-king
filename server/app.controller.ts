import { Controller, Redirect } from "@nestjs/common";
import { AppService } from "./app.service";
import { URL_PREFIX } from "#/composables/constant/url";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect(URL_PREFIX)
  public redirect() { }
}
