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
import { MailsController } from "./mails.controller";
import { MailsService } from "./mails.service";
import { UserRoute } from "@/trpc/routes/user.route";
import { TrpcRouter } from "@/trpc/trpc.router";
import { TrpcService } from "@/trpc/trpc.service";

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
        {
          provide: getModelToken(User.name),
          useValue: Model
        },
        TrpcService,
        UserRoute,
        {
          provide: TrpcRouter,
          useValue: {
            caller: {
              user: {
                create: vi.fn(),
                createDefaultUserByEmail: vi.fn(),
                findOneByEmail: vi.fn()
              }
            }
          }
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
