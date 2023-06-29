import type { Provider } from "@nestjs/common";
import { TrpcRouter } from "@/trpc/trpc.router";

export function useUserModelTestProviders(): Provider[] {
  return [
    {
      provide: TrpcRouter,
      useValue: {
        caller: {
          user: {
            findOneByEmail: vi.fn(),
            findOneByEmailAndUpdate: vi.fn().mockResolvedValue({
              nickname: "test"
            }),
            createDefaultUserByEmail: vi.fn()
          }
        }
      }
    }];
}
