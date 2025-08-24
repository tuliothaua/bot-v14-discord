const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let nome = new discord.MessageEmbed()

        .setTitle(`:anao: Formulário seja STAFF/SUPORTE`)
        .setDescription(
            `
_stamos com um novo sistema de seja staff/suporte aqui no Servidor, e ele vai funcionar da seguinte forma..._
  
➥ Formulário para quem quer ser staff e suporte de linguagens! 
➥ Clicando no "Clique Aqui", você será direcionado para uma página do  google drive, onde você vai preencher e enviar.
➥ Leia com atenção e qualquer formulário enviado de má intenção ou na intenção de zoar, será passível de advertência.
➥ Att TuliZnzin. 

➥ [Clique Aqui!](https://docs.google.com/forms/d/e/1FAIpQLSd2--CHPWOOyHy7JyACMUvY60e_uabe52HYGwt-wQ5ewgfTrw/viewform?usp=sf_link)  

  `
        )
        .setFooter(
            "Todos os Direitos Reservados - © Code Mania!",
            "https://cdn.discordapp.com/icons/691972940484575252/90c25f55a4817a8506300a1ac84baf4e.png?size=2048"
        )
        .setColor("#bd66e6");

    message.channel.send(nome);
};
