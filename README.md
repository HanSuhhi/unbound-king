<i>Check it out, here’s the readme for the devs. If you’re a player, be sure to drop by todo.com!</i>

<b>The project is still under development, the first demo version will appear in the near future</b>

# 👋 Unbound-King

<samp>This is an attempt at a full stack project.</smap>

<samp>This is also a web game attempt without using Canvas.</smap>

<samp>I sincerely hope that you can participate in it, players feel the fun of the game, and developers participate in open source development. </smap>


## Database

Using MongoDb Altas for database support

<p align="center">
  <a href="https://www.mongodb.com/atlas/database" target="blank"><img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" width="320" alt="MongoDB Logo" /></a>
</p>

## Server

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

### 📝 Take Note

1. I find it tricky to keep the name in package.json and PROJECT_NAME in .env in sync. So whenever you change one, make sure to update the other two. Of course, I'm thinking of using a script to get this done.

2. some variables need to be set:

  Here, I have utilized Ali’s email campaign service and OSS object storage service.

  - .env.server

  |     name      |     description     |      example      |
  | :-----------: | :-----------------: | :---------------: |
  |   SMTP_HOST   |   email smtp host   | smtpdm.aliyun.com |
  |   SMTP_PORT   |   email smtp port   |        25         |
  |   SMTP_USER   | email smtp username |    xxx@xxx.com    |
  | SMTP_PASSWORD | email smtp password |       xxxx        |
  |  JWT_SECRET   |     jwt secret      |     a string      |
  <!--
  |  OSS_REGION   |   ali oss region    |   [ali-oss region](https://github.com/ali-sdk/ali-oss#node-usage)    |
  |    OSS_KEY    |   ali oss key id    |  [ali-oss user key](https://github.com/ali-sdk/ali-oss#node-usage)   |
  |  OSS_SECRET   |   ali oss secret    | [ali-oss user secret](https://github.com/ali-sdk/ali-oss#node-usage) |
  |  OSS_BUCKET   | ali oss bucket name |   [ali-oss bucket](https://github.com/ali-sdk/ali-oss#node-usage)    |
  -->

3. To save Git space, I have hidden most of the image resources. If you need access to these resources, please contact me at l_98b@outlook.com.
### Modules

- #### casl

Design user permissions using CASL.

## Client

> Before we begin, please generate the interface API by running the command `pnpm esno:api` after starting the server.

The client includes two important routes: one for game-related content and the other for backend management.

- ### i18n

Since English is not my native language, there might be errors in the English i18n translations. Feel free to point them out and submit a pull request (PR) to correct them.

- ### Header

This is a component, but shared globally.

- ### Login

Inspired by [nextjs](https://nextjs.org/) and [nuxt.js](https://nuxt.com/)

Only allow login through email code authentication or third-party login (try to adapt to as many third-party platforms as possible).

- ### Game-related

- ### Backend Management

It also includes some common pages.

## Features

- ### Testing

Use [Vitest](https://vitest.dev/) to test all content.

- ### composables

Have a globally shared code snippet (composables)

## Contribution

## License

[MIT](./LICENSE) License &copy; 2023 [Don](https://github.com/HanSuhhi)

