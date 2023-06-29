import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UsersService } from "./users.service";
import { useUserModelTestProviders } from "@/composables/tests/providers";

describe("UserController", () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        ...useUserModelTestProviders()
      ],
      controllers: [UserController]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
