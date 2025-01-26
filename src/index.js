"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var framework_1 = require("@sapphire/framework");
var discord_js_1 = require("discord.js");
var env_1 = require("./config/env");
var client = new framework_1.SapphireClient({
    intents: [
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
    ],
    loadMessageCommandListeners: true,
});
client.login(env_1.env.DISCORD_BOT_TOKEN);
