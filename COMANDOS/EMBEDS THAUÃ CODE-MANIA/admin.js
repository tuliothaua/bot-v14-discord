const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`:Purple_Shield: Cargos de Administração!`)
        .setDescription(
            `
_Aqui é um pouco das informações dos cargos._


<@&982770533848477756> ➥ Dono do Servidor.
<@&841385776986193961> ➥ Patente Maior do servidor, são os staffs superiores.
<@&819381766866599976> ➥ Segunda Maior patente do servidor, são os staffs que cuidam do servidor e dos staffs e o resto abaixo.
<@&691976763898855515> ➥ Terceira Maior patente do servidor, são os staffs que cuidam dos chats e dos membros e o resto abaixo.
<@&694287089730191431> ➥ São os ajudantes do servidor, cuidam das mensagens, dos chats de sugestões, os erros e membros que quebraram as regras.
<@&694286819528933446> ➥ Começando na área staff, são os iniciadores da área staff.
<@&692140650782523405> ➥ São responsáveis por cuidar dos chats de suportes e auxiliador do Servidor.
<@&907758216677556264> ➥ São responsáveis por verificar os bots da BOT LIST.
<@&885507608872624168> ➥ Responsáveis por
Cuidarem do Chat: - <#891878116664942602>

<@&892079487649460304> ➥ Responsáveis por
Cuidarem do Chat: - <#891878052374646784>

<@&949464982603595777> ➥ Responsáveis por
Cuidarem do Chat: - <#948702848709963807>

<@&1002331137366036602> ➥ Responsáveis por
Cuidarem do Chat: - <#966007110620033034>

**obs:** se quiser se juntar a staff vá no chat: <#841386031508094976>.
`
        )

        .setFooter(
            "Todos os Direitos Reservados - © Code Mania!",
            "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
        )
        .setColor("#e0aae6")
        .setThumbnail(
            `https://media.discordapp.net/attachments/1001898901701402707/1002637188284027001/unknown.png?width=160&height=160`
        );
    message.channel.send(nome);
};
