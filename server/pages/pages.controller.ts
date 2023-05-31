import { Controller, Get, Header, Req } from "@nestjs/common";
import { Request } from "express";
import { useClientRoutes } from "../composables/path/clientPath";
import { PagesService } from "./pages.service";
import { URL_PREFIX } from "#/composables/constant/url";

const ROUTES_PATH = useClientRoutes();

@Controller(URL_PREFIX)
export class PagesController {
  constructor(
    private readonly pagesService: PagesService
  ) { }

  @Get(ROUTES_PATH)
  @Header("Content-Type", "text/html")
  async renderApp(@Req() request: Request): Promise<string> {
    const url = request.originalUrl.replace(`/${URL_PREFIX}/`, "");
    const { html, render, manifest } = await this.pagesService.renderApp(url);
    const { appHtml, cssHtml, preloadLinks } = await render(url, manifest);

    return html
      .replace("<!--ssr-outlet-->", appHtml)
      .replace("<!--preload-links-->", preloadLinks)
      .replace("<!--css-outlet-->", cssHtml);
  }
}
