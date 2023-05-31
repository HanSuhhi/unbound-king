import type { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Catch, NotFoundException } from "@nestjs/common";
import { URL_PREFIX } from "#/composables/constant/url";

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
    const { getRequest, getResponse } = host.switchToHttp();
    const { originalUrl } = getRequest();
    const { redirect } = getResponse();

    const [_, key] = originalUrl.split("/");

    /**
     * Redirect to different routes based on request key
     */
    switch (key) {
      case URL_PREFIX:
      case "":
      default:
        redirect(`/${URL_PREFIX}`);
        break;
    }
  }
}
