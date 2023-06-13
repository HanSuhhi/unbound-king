import type { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BadRequestException, Injectable } from "@nestjs/common";

import { verifyEmail } from "#/composables/tools/vertivication";

@Injectable()
export class EmailQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const isEmail = verifyEmail(value);
    if (!isEmail) throw new BadRequestException("Please check whether the mailbox is entered correctly.", "Invalid email");

    return isEmail ? value : null;
  }
}
