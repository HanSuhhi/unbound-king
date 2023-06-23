import { Injectable } from "@nestjs/common";
import { Role } from "../roles/enum/role.enum";

@Injectable()
export class UsersService {
  static DEFAULT_USER_ROLES = [Role.Player];
}
