const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`<a:stars1:962159529116713043> Servidor Code Mania ⊰ `)
        .setDescription(
            `Obrigado por visitar nossa comunidade! Nosso servidor foi criado com a intenção de fazermos várias amizades e ajudar em projetos. Aqui nós conversamos, jogamos, ouvimos música, participamos de eventos, Criamos Bots,fazemos Ediçôes e muito mais. Sinta-se a vontade para conversar e interagir, aproveite, faça amizades, e divirta-se!`
        )
        .setColor("161717")
        .setImage(
            "https://blogdoiphone.com/wp-content/uploads/2020/02/97387022d579d0d9806c8c3e176434f7.gif "
        )

        .setFooter(
            "Todos os Direitos Reservados - © Code Mania!",
            "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
        );

    message.channel.send(nome);
};
