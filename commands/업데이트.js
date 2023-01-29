
module.exports = {
    name: "업데이트",
    aliases: ["update", "업뎃"],
    description: "규소의 업데이트 소식이다요!",
    isForAdmin: false,
    async execute(message) {
      const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#04B404')
    .setTitle('업데이트 내역')
    .setDescription('규소다요가 업데이트되었다요!')
    .addFields(
      { name: '마이너 업데이트', value: '1년만의 마이너 업데이트다요!'},
    )
    .setTimestamp();
  
    message.channel.send({embeds: [exampleEmbed]})
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})