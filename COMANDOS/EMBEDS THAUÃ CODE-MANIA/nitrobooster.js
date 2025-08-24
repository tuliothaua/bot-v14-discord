const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(
            `<a:nitrinho:963117059313651772> __SEJA BOOSTER__ <a:nitrinho:963117059313651772>`
        )
        .setDescription(
            `_Impulsione nosso servidor e ganhe algumas vantagens._


 **<a:5hyperbin:732004152833736789> ┃ Vantagens ao impulsionar:**

 <a:setaaroxa:963990389138800681> Ganhe o cargo <@&853015757415383111>  exclusivo;
 <a:setaaroxa:963990389138800681> Ganhe permissão de enviar arquivos no <#691977468441133097>
<a:setaaroxa:963990389138800681> Símbolo exclusivo no seu perfil que evoluí <a:v_pink_boost_FGC:963991151864582144> conforme você mantém o booster no servidor;


<a:5hyperbin:732004152833736789>** ┃ Vantagens ao impulsionar 2 vezes:**

 <a:setaaroxa:963990389138800681> Todas as vantagens acima;
 <a:setaaroxa:963990389138800681> Direito de criar tag exclusiva;
 <a:setaaroxa:963990389138800681> Direito de criar call exclusiva;
<a:setaaroxa:963990389138800681> Direito de Comandos prontos;
<a:setaaroxa:963990389138800681> Direito de Um (Audio Effect ou de um Chroma-Keyer).

**Ta Esperando O que? Venha Impulsionar o Nosso Servidor!**

`
        )
        .setColor("70049f")
        .setImage(
            "https://cdn.discordapp.com/attachments/940642373929697310/963986966708383775/X2Download.com-seja_nitro_booster_gif360p.gif"
        )
        .setThumbnail(
            "https://cdn.discordapp.com/attachments/940642373929697310/963988174902812692/v_pink_boost_FGC.gif"
        )
        .setFooter("Todos os Direitos Reservados - © Code Mania!");

    if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
        return message.channel.send(
            "> **Você não tem permissão para usar esse comando!**"
        );

    message.channel.send(nome);
};
