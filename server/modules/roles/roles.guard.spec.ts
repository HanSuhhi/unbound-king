import { Reflector } from "@nestjs/core";
import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import type { ExecutionContext } from "@nestjs/common";
import { RolesGuard } from "./roles.guard";
import { UserRoute } from "@/trpc/routes/user.route";

describe("RolesGuard", () => {
  let guard: RolesGuard;
  let reflector: Reflector;
  const context = {
    getHandler: vi.fn(),
    getClass: vi.fn(),
    switchToHttp: vi.fn().mockReturnThis(),
    getRequest: vi.fn().mockReturnValue({
      user: { roles: UserRoute.DEFAULT_USER_ROLES }
    })
  } as unknown as ExecutionContext;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesGuard,
        {
          provide: Reflector,
          useValue: {
            getAllAndOverride: vi.fn()
          }
        }
      ]
    }).compile();

    reflector = module.get(Reflector);
    guard = module.get(RolesGuard);
  });

  it("should be defined", () => {
    expect(guard).toBeDefined();
  });

  it("should return true if roles are not set in metadata", () => {
    vi.spyOn(reflector, "getAllAndOverride").mockReturnValueOnce(undefined);
    expect(guard.canActivate(context)).toEqual(true);
  });

  it("should return true if user has at least one required role", () => {
    vi.spyOn(reflector, "getAllAndOverride").mockReturnValueOnce(UserRoute.DEFAULT_USER_ROLES);
    expect(guard.canActivate(context)).toEqual(true);
  });

  it("should return false if user does not have any required role", () => {
    vi.spyOn(reflector, "getAllAndOverride").mockReturnValueOnce(["admin"]);
    expect(guard.canActivate(context)).toEqual(false);
  });
});
