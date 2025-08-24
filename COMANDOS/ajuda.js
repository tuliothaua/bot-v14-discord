const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`Central de Ajuda!`)
        .setDescription(
            `:4Sonic_fortnite: Olá, meu nome é **Obito!** Sou um bot criado pelo **TuliZnzin**. Tenho varios comandos de diversão, moderação, utilidade e Muito mais. Espero que goste das minhas funcionalidades!

💻│**Website**
[Visite-o](https://obitowebsite3.webnode.com/)

📃│**Lista de Comandos **
[Comandos](https://obitowebsite3.cms.webnode.com/comandos/)

🤷│**Precisando de Ajuda?**
[Suporte](https://obitowebsite3.cms.webnode.com/contato/)`
        )
        .setColor("5599FF")
        .setThumbnail(
            "https://cdn.discordapp.com/attachments/940642373929697310/963553899137089566/developer.png"
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL())

        .setTimestamp();
    message.channel.send(nome);
};
