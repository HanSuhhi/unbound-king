import type { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BadRequestException, Injectable } from "@nestjs/common";

import { verifyEmail } from "#/composables/tools/vertivication";

@Injectable()
export class EmailQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const isEmail = verifyEmail(value);
    if (!isEmail) throw new BadRequestException("Invalid email", "Please check whether the email is entered correctly.");

    return isEmail ? value : null;
  }
}
