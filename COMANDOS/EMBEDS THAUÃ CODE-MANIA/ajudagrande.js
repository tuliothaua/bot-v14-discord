const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setTitle(`   <:js:962172564275363904> Central de Ajuda!`)
        .setDescription(
            `**Como eu posso te ajudar?** 
    
🌟│**Comandos Scripts!**
    
🤷│**Precisando de Ajuda?**
     
💻│**informação**
     
     `
        )
        .setColor("#AF00FF");
    message.channel.send(embed).then((msg) => {
        msg.react("🌟");
        msg.react("🤷");
        msg.react("💻");

        let filtro1 = (r, u) =>
            r.emoji.name === "🌟" && u.id === message.author.id;
        let filtro2 = (r, u) =>
            r.emoji.name === "🤷" && u.id === message.author.id;
        let filtro3 = (r, u) =>
            r.emoji.name === "💻" && u.id === message.author.id;

        let coletor = msg.createReactionCollector(filtro1);
        let coletor2 = msg.createReactionCollector(filtro2);
        let coletor3 = msg.createReactionCollector(filtro3);

        coletor.on("collect", (c) => {
            let embed = new Discord.MessageEmbed()
                .setTitle(`Central de Comandos Js`)
                .setDescription(
                    `Abaixo está uma lista de comandos que você pode adicionar em seu bot, utilize-os no chat destinado a comandos para mais informações sobre como colocá-los em seu bot.

<a:ingrenagem:962173513547006043> **Comandos Disponíveis:**
t!say, t!color , t!avatar , t!kiss , t!ping e t!invisible.`
                )
                .setColor("RANDOM");

            msg.edit(embed);
        });

        coletor2.on("collect", (c) => {
            let embed = new Discord.MessageEmbed()
                .setTitle(`Central de Suporte!`)
                .setDescription(
                    `
🙋┇ **Meu Prefixo é: __t!__**
  
💠┇ **Caso Veja algun bug no script Contate o suporte:
https://obitowebsite3.cms.webnode.com/contato/**
  
💻┇ **Caso tenha alguma sugestão use "o.sugestao ou t!sugestao"** 
  
:discordgif: **┇Server suporte **(https://discord.gg/BdgR7x) 
  

  
  
  
  
  `
                )
                .setColor("#AF00FF");

            msg.edit(embed);
        });
        coletor3.on("collect", (c) => {
            let embed = new Discord.MessageEmbed()
                .setTitle(`Central de informações!`)
                .setDescription(
                    `
        Informações:
        
**:person_gesturing_no:┇ Meu Criador:**
TuliZnzin#9597
        
**:ghost:┇ YouTube:**
https://www.youtube.com/c/TuliZnzin
        
**:camera:┇Instagram:**
https://www.instagram.com/vk_tuliznzin/?r=nametag

**:video_game:┇Steam:**
http://steamcommunity.com/id/TuliZnzin

**:dizzy:┇ Espero Ter ajudado!!**
        
        `
                )
                .setColor("#AF00FF");

            msg.edit(embed);
        });
    });
};
