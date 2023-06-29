import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "../auth/auth.service";
import { UsersService } from "../users/users.service";
import { MailsController } from "./mails.controller";
import { MailsService } from "./mails.service";
import { useUserModelTestProviders } from "@/composables/tests/providers";

describe("MailsController", () => {
  let controller: MailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        AuthService,
        UsersService,
        JwtService,
        MailsService,
        {
          provide: CACHE_MANAGER,
          useValue: {}
        },
        ...useUserModelTestProviders()
      ],
      controllers: [MailsController]
    }).compile();

    controller = module.get<MailsController>(MailsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
