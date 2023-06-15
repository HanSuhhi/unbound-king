import { Controller, Post } from "@nestjs/common";
import { PackagesService } from "./packages.service";

@Controller("packages")
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Post()
  async create() {
    this.packagesService.create({
      name: "test"
    });
  }
}
