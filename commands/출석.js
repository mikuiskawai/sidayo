module.exports = {
    name: "출석",
    aliases: ["daily", "출첵", "ㅊㅅ", "ㅊㅊ"],
    description: "하루에 한 번 출석하여 xp와 코인 보상을 받는다요.",
    isForAdmin: false,
    async execute(message) {
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        const fs = require('fs');
        const id = message.author.id;
        const name = message.author.username;
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const today = new Date();
        const date = "" + today.getFullYear() + today.getMonth() + today.getDate();
        if (user.date === date) {
            const embed = new Discord.MessageEmbed().setTitle("출석 실패").setColor(RED).setDescription(`오늘은 이미 출석했다요!`);
            return message.channel.send({embeds: [embed]});
        }
        const Embed = new Discord.MessageEmbed().setTitle("출석 성공이다요").setColor(GREEN).setDescription(`**30XP**와 **3티켓**과 **200si**와 **십자석 1개**가 지급되었다요!`);
        message.channel.send({embeds: [Embed]})
        Save = {
            id, 
            name, 
            date: date, 
            xp: user.xp + 30, 
            level: user.level, 
            blacklevel:user.blacklevel, 
            coin: user.coin + 3, 
            sipza: user.sipza +1, 
            si: user.si + 200, 
            null1: user.null1, 
            null2:user.null2, 
            null3: user.null3, 
            goblack:user.goblack,  
            black1: user.black1, 
            black2: user.black2, 
            black3: user.black3, 
            black4: user.black4, 
            black5: user.black5
        }
        fs.writeFileSync(filePath, JSON.stringify(Save));
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})