import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { AuthService } from "../auth/auth.service";
import { MailsService } from "./mails.service";

describe("MailsService", () => {
  let service: MailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailsService, ConfigService, AuthService, {
        provide: CACHE_MANAGER,
        useValue: {}
      }]
    }).compile();

    service = module.get<MailsService>(MailsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
