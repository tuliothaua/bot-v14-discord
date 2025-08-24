const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`:sininho: Cargos de Notificações!`)
        .setDescription(
            `_bom veja qual cargo você quer e reaja ao emoji._


🔔 ➥ <@&841385803770363975>
🎞 ➥ <@&841385802956013628>
🎉 ➥ <@&841385804626133052>
👥 ➥ <@&885723361148272691>

`
        )

        .setFooter(
            "Todos os Direitos Reservados - © Code Mania!",
            "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
        )
        .setColor("#d0f081")
        .setThumbnail(
            `https://cdn.discordapp.com/attachments/1001898901701402707/1002684113100226601/8690-pastel-shield.png`
        );
    if (!["579396610916745226"].includes(message.author.id))
        return message.reply(
            " :rainbowo: | **Apenas pessoas especiais podem utilizar ess  e comando!**"
        );
    message.channel.send(nome);
};
