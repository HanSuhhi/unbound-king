import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { getModelToken } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/schemas/user.schemas";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import type { LoginDto } from "./dtos/login.dto";
import type { LoginRegistration } from "#/composables/constant/request";

describe("AuthController", () => {
  let service: AuthService;
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UsersService,
        ConfigService,
        JwtService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: () => "",
            set: vi.fn()
          }
        },
        {
          provide: getModelToken(User.name),
          useValue: Model
        }
      ]
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should throw error for invalid loginType", async () => {
    await expect(controller.loginWithEmail({
      loginType: "invalid" as LoginRegistration,
      email: "test@example.com",
      code: 123456
    } as LoginDto)).rejects.toThrowError();
  });
});
