const Discord = require('discord.js')
const moment = require('moment')
moment.locale('pt-br')

module.exports = {
    run: function (client, message, args) {
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const date = message.guild.createdAt;
        const joined = message.member.joinedAt;
        const region = {
            brazil: ":flag_br: Brasil",
        };

        const embed = new Discord.MessageEmbed()
            .setColor("90000")
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setAuthor("🔍 Informações do servidor")
            .setThumbnail(
                `${message.guild.iconURL({ dynamic: true })}?size=1024`
            )
            .addField(":5hyperbin: **Nome**", message.guild.name, true)
            .addField("🆔 **ID**", message.guild.id, true)
            .addField(
                ":cori: **Dono(a)**",
                message.guild.owner.user.username,
                true
            )
            .addField("🤍 **Região**", region[message.guild.region], true)
            .addField(
                ":identidade: **Membro(s)**",
                message.guild.memberCount,
                true
            )
            .addField(
                ":discordgg: **Bot(s)**",
                members.filter((member) => member.user.bot).size,
                true
            )
            .addField(
                ":nitrinho: **Boost**",
                message.guild.premiumSubscriptionCount || "0",
                true
            )
            .addField(
                ":mensagem: **Canais de texto**",
                channels.filter((channel) => channel.type === "text").size,
                true
            )
            .addField(
                "🔊 **Canais de voz**",
                channels.filter((channel) => channel.type === "voice").size,
                true
            )
            .addField(
                ":paode: **Criado em**",
                moment(date).format("DD/MM/YYYY, à\\s HH:mm:ss"),
                true
            )
            .addField(
                "🙋🏼‍♂️**Você entrou em**",
                moment(joined).format("DD/MM/YYYY, à\\s HH:mm:ss"),
                true
            )
            .setFooter(
                "Direitos reservados - © Obito",
                "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
            )
            .setTimestamp();

        // Aqui sera enviado o embed no canal que o usuário executo o comando
        message.channel.send(embed);
    },
    /**
     * Aqui podemos colocar mais algumas configurações do comando.
     */
    conf: {},

    get help() {
        return {
            name: "serverinfo",
            category: "Informação",
            description: "Informação sobre o servidor",
            usage: "o.serverinfo",
        };
    },
};