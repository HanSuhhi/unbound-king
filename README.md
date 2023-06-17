> The project is still under development, the first demo version will appear in the near future

# 👋 Code: FarmLand

<samp>This is an attempt at a full stack project.</smap>

<samp>This is also a web game attempt without using Canvas.</smap>

<samp>I sincerely hope that you can participate in it, players feel the fun of the game, and developers participate in open source development. </smap>

> Check it out, here’s the readme for the devs. If you’re a player, be sure to drop by todo.com!


## Database



## Server

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

### 📝 Take Note

1. I find it tricky to keep the name in package.json and PROJECT_NAME in .env in sync. So whenever you change one, make sure to update the other two. Of course, I'm thinking of using a script to get this done.

2. some variables need to be set:

  - .env.server

  |     name      |     description     |      example      |
  | :-----------: | :-----------------: | :---------------: |
  |   SMTP_HOST   |   email smtp host   | smtpdm.aliyun.com |
  |   SMTP_PORT   |   email smtp port   |        25         |
  |   SMTP_USER   | email smtp username |    xxx@xxx.com    |
  | SMTP_PASSWORD | email smtp password |       xxxx        |
  |  JWT_SECRET   |     jwt secret      |     a string      |

## client

The server-side currently consists of Vue and Vite.