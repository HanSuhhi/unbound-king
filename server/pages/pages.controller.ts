import { Controller, Get, Header, Req } from "@nestjs/common";
import { Request } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { useClientRoutes } from "../composables/path/clientPath";
import { PagesService } from "./pages.service";
import { Prefix } from "#/composables/constant/url";

const ROUTES_PATH = useClientRoutes();

@ApiTags("Pages")
@Controller(Prefix.Client)
export class PagesController {
  constructor(
    private readonly pagesService: PagesService
  ) { }

  @Get(ROUTES_PATH)
  @Header("Content-Type", "text/html")
  @ApiOperation({ summary: "📚 SSR Pages", description: "The frontend page is rendered by SSR. See /src for the details." })
  async renderApp(@Req() request: Request): Promise<string> {
    const url = request.originalUrl.replace(`/${Prefix.Client}/`, "");
    const { html, render, manifest } = await this.pagesService.renderApp(url);
    const { appHtml, cssHtml, preloadLinks } = await render(url, manifest);

    return html
      .replace("<!--ssr-outlet-->", appHtml)
      .replace("<!--preload-links-->", preloadLinks)
      .replace("<!--css-outlet-->", cssHtml);
  }
}
