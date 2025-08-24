const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed();

    let avatar = message.author.displayAvatarURL({ dynamic: true });

    let servidor = message.guild.iconURL({ dynamic: true });
    let versao = new Discord.MessageEmbed()
        .setAuthor(`Selecione Sua Versão`, avatar)
        .setThumbnail(servidor)
        .setDescription(
            `Olá ${message.author.username}, Veja aki os scripts em \`Javascript\` do vídeos

:n_one: \`Discord.js\`  \`V13\`
:n_two: \`Discord.js\`  \`V12\`

 `
        )

        .setFooter(`Comando Executado Por: ${message.author.username}`, avatar)
        .setTimestamp()
        .setColor("BLUE");

    message.channel.send(`${message.author}`, versao).then((msg) => {
        const coletor = message.channel.createMessageCollector(
            (x) => x.author.id === message.author.id,
            { max: 1 }
        );

        coletor.on("collect", (resposta) => {
            if (resposta.content === "v12") {
                message.channel.send("Você Escolheu V12");
            }
            if (resposta.content === "v13") {
                message.channel.send("Você Escolheu V13");
            } else {
                message.channel.send(
                    `**_Senhor ${message.author.username}, a versâo não existe, verifique a ortografia._**`
                );
            }
        });
    });
};
