import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "../auth/auth.service";
import { User } from "../users/schemas/user.schemas";
import { UsersService } from "../users/users.service";
import { MailsService } from "./mails.service";

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
        {
          provide: getModelToken(User.name),
          useValue: Model
        }
      ]
    }).compile();

    service = module.get<MailsService>(MailsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
