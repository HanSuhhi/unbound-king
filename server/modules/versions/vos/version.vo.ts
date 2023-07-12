import { ApiVersionProperty } from "../decorators/ApiVersionProperty";

export class VersionVo {
  @ApiVersionProperty()
  asset: Version;
}
