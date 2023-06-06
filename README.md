> Check it out, here’s the readme for the devs. If you’re a player, be sure to drop by todo.com!

# 👋 Code: FarmLand

<samp>This is an attempt at a full stack project.</smap>

<samp>This is also a web game attempt without using Canvas.</smap>

<samp>I sincerely hope that you can participate in it, players feel the fun of the game, and developers participate in open source development. </smap>

## The project is still under development, the first demo version will appear in the near future


## Server

The server-side currently consists of NestJS and MongoDB.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">
  <a href="http://mongodb.com/" target="blank"><img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" width="320" alt="Nest Logo" /></a>
</p>

### 📝 Take Note

1. For database connectivity, this project relies on [Mongo Atlas](https://www.mongodb.com/cloud/atlas/register) with x509. Just so you know, you may need to get a PEM at some point and dump it under server/certs. Once you have it, tweak KEY_NAME in app.module.ts.

2. I find it tricky to keep the name in package.json and PROJECT_NAME in .env in sync. So whenever you change one, make sure to update the other two. Of course, I'm thinking of using a script to get this done.

3. some variables need to be set:

  - .env.server

  |     name      |     description     |      example      |
  | :-----------: | :-----------------: | :---------------: |
  |   SMTP_HOST   |   email smtp host   | smtpdm.aliyun.com |
  |   SMTP_PORT   |   email smtp port   |        25         |
  |   SMTP_USER   | email smtp username |    xxx@xxx.com    |
  | SMTP_PASSWORD | email smtp password |       xxxx        |

## client

The server-side currently consists of Vue and Vite.