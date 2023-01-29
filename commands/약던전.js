module.exports = {
    name: "던전",
    aliases: ["ㄷㅈ", "던전임"],
    description: "던전이다요",
    isForAdmin: false,
    async execute(message, args) {
        const { RED, GREEN} = { RED: "#ff5454", GREEN: "#54ff62"}
        const Discord = require('discord.js');
        const fs = require('fs');
        const { id, name } = { id: message.author.id, name: message.author.username };
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        const Embed = new Discord.MessageEmbed().setTitle("던전").setDescription(`아직 개발이 끝나지 않은 베타 버전이다요.\n미리보기`).setImage('https://i.imgur.com/6phHQSF.png').setColor(GREEN);
        return message.channel.send({embeds: [Embed]});
    }
}
//흑염룡, 백빙룡, 청양룡, 적토룡
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})
