const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let say = args.join(" ");

    if (message.deletable) message.delete();
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.reply(
            `${message.author} **❌ | Você não possui a permissão \`MANAGE_SERVER\` para usar esse comando!**`
        );

    if (!say)
        return message.channel.send(
            `**❌ | ${message.author} Você precisa escrever algo para eu falar!**`
        );

    message.channel.send(`${say}

**Enviado por: ${message.author}**`);
};
