const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`:dwn_bot_add: ┇ Meu Convite`)
        .setDescription(
            `Olá Meu Nome é **Obito!** Sou um bot criado pelo **TuliZnzin.** Tenho varios comandos de diversão, moderação, utilidade e Muito mais. Caso queira me adicionar em seu servidor **clique aqui** abaixo!

> [➡ ┃ Clique Aqui!](https://discord.com/oauth2/authorize?client_id=683097563095629877&scope=bot&permissions=8)`
        )
        .setColor("fc7c0b")
        .setImage(
            "https://cdn.discordapp.com/attachments/940642582210424873/964005000198115389/1649892035662.jpg"
        )
        .setFooter("Todos os Direitos Reservados - © Obito!")

        .setThumbnail(
            "https://cdn.discordapp.com/attachments/940642582210424873/964009224952774726/7vm_tobi.png"
        )

        .setTimestamp();

    message.channel.send(nome);
};
