const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`:zt_ye: Sistema de Cargo por XP`)
        .setDescription(
            `
_Sistema de xp converse nos chats para ganhar xp quando você consiguir subir em um nível específico você irá receber um dos cargos abaixo._

Nível 1 ➥<@&896772371099291700>
Nível 2 ➥<@&896772362517770251>
Nível 5 ➥<@&896772351620943912> 
Nível 10 ➥<@&896772169017720834> 
Nível 20 ➥<@&896771790364373032>   
Nível 40 ➥<@&896771640782888980>  
Nível 60 ➥<@&896771042276691968>  
Nível 80 ➥<@&896770762738901012>  
Nível 90 ➥<@&896770472170127390>
Nível 100 ➥<@&896247281861410836>  
Nível 200 ➥<@&896777682979786782>

**OBS:** Os cargos são automaticamente atribuídos pela Loritta. 



`
        )
        .setImage(
            `https://cdn.discordapp.com/attachments/904763196445978696/1002687115064266852/lvl-up-chino.gif`
        )
        .setFooter(
            "Todos os Direitos Reservados - © Code Mania!",
            "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
        )
        .setColor("#5fdfdf")
        .setThumbnail(
            `https://cdn.discordapp.com/attachments/1001898901701402707/1002687680569688074/lvlup.gif`
        );

    message.channel.send(nome);
};
