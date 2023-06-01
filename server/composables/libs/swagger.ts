import type { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

/**
 * Creates the Swagger configuration.
 * @returns The Swagger configuration object.
 */
function createSwaggerConfig() {
  const config = new DocumentBuilder()
    .setTitle(process.env.PROJECT_NAME)
    .setDescription(`Here's the info about ${process.env.PROJECT_NAME}'s API.`)
    .setVersion("1.0")
    .addTag("api")
    .build();

  return config;
}

/**
 * Binds the Swagger module to the Nest application.
 * @param {NestExpressApplication} app The Nest Express application.
 * @returns {NestExpressApplication} The Nest Express application.
 */
export function bindSwageerModule(app: NestExpressApplication) {
  const document = SwaggerModule.createDocument(app, createSwaggerConfig());
  SwaggerModule.setup("api", app, document);
  return app;
}
