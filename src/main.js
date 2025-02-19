const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});

client.on("error", (error) => {
  console.error("❌ An error occurred:", error);
});

client.on("warn", (info) => {
  console.warn("⚠️ Warning:", info);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else {
    await interaction.reply("Unknown command");
  }
});

client.login(`${env.DISCORD_BOT_TOKEN}`);
