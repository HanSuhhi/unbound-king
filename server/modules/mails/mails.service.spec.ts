import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "../auth/auth.service";
import { UsersService } from "../users/users.service";
import { MailsService } from "./mails.service";
import { useUserModelTestProviders } from "@/composables/tests/providers";

describe("MailsService", () => {
  let service: MailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailsService,
        ConfigService,
        UsersService,
        JwtService,
        AuthService,
        {
          provide: CACHE_MANAGER,
          useValue: {}
        },
        ...useUserModelTestProviders()
      ]
    }).compile();

    service = module.get<MailsService>(MailsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
