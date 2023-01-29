module.exports = {
    name: "대기실",
    aliases: ["waitingroom", "ㄷㄳ"],
    description: "대기실이다요",
    isForAdmin: false,
    async execute(message, args) {
        const { RED, GREEN} = { RED: "#ff5454", GREEN: "#54ff62"}
        const Discord = require('discord.js');
        const fs = require('fs');
        const { id, name } = { id: message.author.id, name: message.author.username };
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));

                        
        const Embed = new Discord.MessageEmbed().setTitle("대기실").setDescription(`<@${message.author.id}> 님의 대기실`).addFields([{ name: "1성 흑염룡", value: `${user.black1}` },{ name: "2성 흑염룡", value: `${user.black2}` },{ name: "3성 흑염룡", value: `${user.black3}` },{ name: "4성 흑염룡", value: `${user.black4}` },{ name: "5성 흑염룡", value: `${user.black5}` },]).setColor(GREEN);
        return message.channel.send({embeds: [Embed]});

    }
}
//흑염룡, 백빙룡, 청양룡, 적토룡
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})