const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`**Informações Adicionais:**`)
        .setDescription(
            `
• A quebra de uma ou várias regras citadas acima poderá implicar em uma punição.
• As regras podem ser alteradas a qualquer momento, é importante estar sempre atento a qualquer atualização.
• Qualquer dúvida ou recomendação de uma possível nova regra, procure um STAFF ou  <#841386036650836009> 

_Sinta-se a vontade para conversar e interagir, aproveite, faça amizades, e divirta-se!_`
        )
        .setColor("E4C54F")
        .setFooter(
            "Todos os Direitos Reservados - © Code Mania!",
            "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
        );
    if (!["579396610916745226"].includes(message.author.id))
        return message.reply(
            " <a:rainbowo:941052516534194236> | **Apenas pessoas especiais podem utilizar ess  e comando!**"
        );

    message.channel.send(nome);
};
