import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

describe("AuthController", () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, {
        provide: CACHE_MANAGER,
        useValue: {
          get: () => "",
          set: vi.fn()
        }
      }]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
