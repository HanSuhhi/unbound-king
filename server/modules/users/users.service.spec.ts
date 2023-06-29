import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { TrpcRouter } from "@/trpc/trpc.router";
import { useUserModelTestProviders } from "@/composables/tests/providers";

describe("UsersService", () => {
  let service: UsersService;
  let trpcRouter: TrpcRouter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        ...useUserModelTestProviders()
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
    trpcRouter = module.get<TrpcRouter>(TrpcRouter);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("updateUserNicknameByEmail", () => {
    it("should call trpc router to update user nickname by email", async () => {
      const email = "user@mail.com";
      const update = { nickname: "John" };
      const findOneByEmailAndUpdateSpy = vi.spyOn(trpcRouter.caller.user, "findOneByEmailAndUpdate");

      const { nickname } = await service.updateUserNicknameByEmail(email, update);

      expect(findOneByEmailAndUpdateSpy).toHaveBeenCalledWith({
        email,
        update
      });
      expect(nickname).toBeTypeOf("string");
    });
  });
});
