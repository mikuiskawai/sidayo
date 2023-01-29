module.exports = {
    name: "중2병대사",
    aliases: ["chuunibyou", "중이병대사"],
    description: "규소다요의 중2병을 느낄수 있다요!",
    isForAdmin: false,
    async execute(message) {
        const middlecancer = require("./middlecancer.json");
        const item = middlecancer[Math.floor(Math.random() * middlecancer.length)];
        const limit = 5;
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        const filter = (response) => {
            console.log(item.answer.some((answer) => answer === response.content));
            return item.answer.some((answer) => answer === response.content);
        }
        const embed = new Discord.MessageEmbed().setTitle('중2병대사').setDescription(`${item.question}`).setColor(GREEN)
        message.channel.send({embeds: [embed]})
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})
//https://tgd.kr/s/2017070187xd/16690264