const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('messageCreate', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});


client.on('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);
