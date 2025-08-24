const Discord = require("discord.js");
const express = require("express");
const {
    EmbedBuilder,
    ApplicationCommandType,
    ApplicationCommandOptionType,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require("discord.js");

const client = new Discord.Client({
    intents: [Discord.GatewayIntentBits.Guilds],
});

module.exports = client;

client.on("interactionCreate", (interaction) => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        const cmd = client.slashCommands.get(interaction.commandName);

        if (!cmd) return interaction.reply(`Error`);

        interaction["member"] = interaction.guild.members.cache.get(
            interaction.user.id
        );

        cmd.run(client, interaction);
    }
});

client.on("ready", async () => {
    console.log(`🔥 Estou online em ${client.user.username}!`);
});

client.slashCommands = new Discord.Collection();

require("./handler")(client);

client.login(process.env.TOKEN);
