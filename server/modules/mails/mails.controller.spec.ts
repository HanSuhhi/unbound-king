import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthService } from "../auth/auth.service";
import { User } from "../users/schemas/user.schemas";
import { UsersService } from "../users/users.service";
import { MailsController } from "./mails.controller";
import { MailsService } from "./mails.service";

describe("MailsController", () => {
  let controller: MailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        AuthService,
        UsersService,
        MailsService,
        {
          provide: CACHE_MANAGER,
          useValue: {}
        },
        {
          provide: getModelToken(User.name),
          useValue: Model
        }
      ],
      controllers: [MailsController]
    }).compile();

    controller = module.get<MailsController>(MailsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
