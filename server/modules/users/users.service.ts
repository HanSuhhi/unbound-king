import { Injectable } from "@nestjs/common";
import { Role } from "#/composables/enum/role.enum";

@Injectable()
export class UsersService {
  static DEFAULT_USER_ROLES = [Role.Player];
}
