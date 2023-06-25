import type { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BadRequestException, Injectable } from "@nestjs/common";

import { toLower } from "lodash";
import { verifyEmail } from "#/composables/tools/vertivication";

@Injectable()
export class EmailQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const isEmail = verifyEmail(value);
    if (!isEmail) throw new BadRequestException("Invalid email", "Please check whether the email is entered correctly.");

    return isEmail ? toLower(value) : null;
  }
}
