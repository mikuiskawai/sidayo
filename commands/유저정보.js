module.exports = {
    name: "유저정보",
    aliases: ["ㅇㅈㅈㅂ"],
    description: "자신의(맨션한 유저의) 현재 정보를 출력한다요.",
    isForAdmin: false,
    async execute(message) {
    try{

        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        const fs = require('fs');
        !message.mentions.members.first() ? target = message.author : target = message.mentions.users.first();
        const id = target.id;
        const name = target.username;
        const filePath = `./Data/${id}.json`;
        const ls = require('../level.json'); 
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const embed = new Discord.MessageEmbed()
        .setTitle(`${name}님의 정보`)
        .setColor(GREEN)
        .setThumbnail(target.displayAvatarURL())
        .addFields(
            { name: "레벨", value: `${user.level}` ,inline: true}, 
            { name: "XP", value: `${user.xp}`,inline: true }, 
            { name: `${user.level + 1}레벨까지`, value: `${ls.level[user.level + 1] - user.xp}XP`,inline: true },
		    { name: "흑염룡", value: `${user.goblack}성,${user.blacklevel}레벨` },
            { name: "크리스탈", value: `${user.null1}개`, inline: true}, 
            { name: "펄서", value: `${user.null2}개` ,inline: true},
            { name: "십자석", value: `${user.null3}개`,inline: true },
            { name: "si", value: `${user.si}si`,inline: true }, 
            { name: "티켓", value: `${user.coin}개`,inline: true },
	    ) 
        message.channel.send({embeds: [embed]})
    }catch(error){
        const RED = "#ff5454"
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed().setTitle('플레이어 검색 실패').setDescription(`존재하지 않는 플레이어다요!`).setColor(RED);
        message.channel.send({embeds: [embed]})
    }
        
    }
}
//흑염룡, 백빙룡, 청양룡, 적토룡
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})