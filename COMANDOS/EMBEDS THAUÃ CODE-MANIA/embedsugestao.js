const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`:chat: Sistema de Sugestões!`)
        .setDescription(
            `
_Estamos com um novo sistema de sugestões aqui no Servidor, e ele vai funcionar da seguinte forma..._

➥ Usando o comando __t!sugestao__ no chat: <#841386021018271836> fará com que a sua sugestão seja encaminhada para outro chat, sendo ele o <#899367098860572672>. Para nós da Staff avaliarmos e quem sabe, adicioná-la ao Servidor.

➥ Qualquer sugestão de má intenção ou na intenção de zoar, será passível de advertência.
`
        )
        .setColor("#dad95b")
        .setThumbnail(
            `https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048`
        )
        .setFooter(
            "Todos os Direitos Reservados - © Code Mania!",
            "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
        );
    message.channel.send(nome);
};
