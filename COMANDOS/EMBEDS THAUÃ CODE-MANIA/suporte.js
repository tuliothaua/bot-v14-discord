const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`:Purple_Shield: Sistema de Suporte!`)
        .setDescription(
            `
_Estamos com um novo sistema de suporte aqui no Servidor, e ele vai funcionar da seguinte forma..._

➥ clicando no botão __Criar um Ticket!__, o bot Ticket Tool irá criar um chat privado que só você e os suportes irão poder ver. Para nós da Staff avaliarmos e resolver a sua dúvida.

➥ Qualquer ticket aberto de má intenção ou na intenção de zoar, será passível de advertência.
`
        )
        .setColor("#dad95b")

        .setFooter(
            "Todos os Direitos Reservados - © Code Mania!",
            "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
        );
    message.channel.send(nome);
};
