# cupid-bot

<div align="center">
    <img alt="USC CISCO Scientia" src="./banner.png" />
</div>

<p align="center">
  <i>A simple confession bot that sends a direct message to a user in the Discord Server the bot is in.<br>
  Everybody deserves a little love.</i><br>
  <i>Proudly built with <a href="https://sapphirejs.dev/">Sapphire</a> + <a href="https://bun.sh/">Bun</a> + <a href="https://www.typescriptlang.org/">TypeScript</a></i>
</p>

<details align="center">
  <summary>See Demo 🎀</summary>
  
<img alt="USC CISCO Scientia" src="./demo.gif" />

</details>

## Usage

```bash
bun install
bun run start # the bot will now listen to commands once invited to join your server
```

Then, to invite the bot, you need to go to the [Discord Developer Portal](https://discord.com/developers/applications) > OAuth2 and tick `bot` and `Administrator` then visit the `Generated URL`.

### Environment Variables

```bash
cp .env.example .env
nano .env # then paste your variables there
```

1. `DISCORD_BOT_TOKEN`: obtained from the [Discord Developer Portal](https://discord.com/developers/applications) > Bot > Token > Reset Token.

- ensure the bot has the following `Bot > Privileged Gateway Intents`
  - `Presence Intent`
  - `Server Members Intent`
  - `Message Content Intent`

2. `TENOR_API_KEY`: follow the guide to get a [Tenor API Key from the Google Cloud Console](https://developers.google.com/tenor/guides/quickstart#setup)

3. `DEVELOPER_USER_ID`: the Discord User ID that is exempted from rate-limiting

## License

MIT License
