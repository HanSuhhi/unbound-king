import type { CanActivate, ExecutionContext } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../../composables/constants/auth";
import type { Role } from "./enum/role.enum";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflecttor: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflecttor.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some(role => user.roles?.includes(role));
  }
}
