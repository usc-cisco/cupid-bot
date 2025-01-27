import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { env } from './config/env';

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
  loadMessageCommandListeners: true,
  defaultCooldown: {
    delay: 10_000, // 10 secs
    limit: 5,
    // these ids can bypass the rate limit
    filteredUsers: [env.DEVELOPER_USER_ID],
  },
});

client.login(env.DISCORD_BOT_TOKEN);
