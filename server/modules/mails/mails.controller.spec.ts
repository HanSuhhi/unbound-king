import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "../auth/auth.service";
import { MailsController } from "./mails.controller";
import { MailsService } from "./mails.service";

describe("MailsController", () => {
  let controller: MailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, AuthService, MailsService],
      controllers: [MailsController]
    }).compile();

    controller = module.get<MailsController>(MailsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
