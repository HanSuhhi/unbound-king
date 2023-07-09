import { readFileSync } from "node:fs";
import { Controller, Post } from "@nestjs/common";
import { Public } from "../auth/decorators/auth.decorator";
import { resolveDistPath } from "@/composables/path/path";

@Controller("assets")
export class AssetsController {
  @Post("image")
  @Public()
  getImage() {
    const path = "assets/standard/blood.png";

    const file = readFileSync(resolveDistPath(path));
    return {
      file
    };
    // return base64str;
  }
}
