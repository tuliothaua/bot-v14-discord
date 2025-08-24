const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`:5bob:┇ Minhas Informações! `)
        .setDescription(
            `:setaa: **Nome:** Obito
:setaa: **Criado em:** 28/02/2020
:setaa: **Comandos:**    
:setaa: **Ajuda:** o.ajuda
:setaa: **Prefixo:** o.


:5DISCKET: **Servidores**
Servidores: ${client.guilds.cache.size}


:pencil:  **Desenvolvedor**
➥ **Criado por: TuliZnzin#6882**`
        )
        .setColor("90000")
        .setThumbnail(
            "https://cdn.discordapp.com/attachments/693045656763498567/760911788899303434/cute-shooting-star.png"
        )
        .setFooter(message.author.tag)
        .setTimestamp();

    message.channel.send(nome);
};
