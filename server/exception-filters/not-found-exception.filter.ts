import type { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Catch, NotFoundException } from "@nestjs/common";
import { Prefix } from "#/composables/constant/url";

/**
 * NotFoundException Filter
 */
@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  /**
   * Catch NotFoundException
   * @param _exception NotFoundException exception
   * @param host ArgumentsHost host
   */
  catch(_exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const [_, key] = request.originalUrl.split("/");

    /**
     * Redirect to different routes based on request key
     */
    switch (key) {
      case Prefix.Api:
        response.redirect(`/${Prefix.Api}`);
        break;
      case Prefix.Client:
      default:
        response.redirect(`/${Prefix.Client}`);
        break;
    }
  }
}
