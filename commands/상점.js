module.exports = {
    name: "던d전",
    aliases: ["dungeon", "ㄷㅈ"],
    description: "던전이다요.",
    isForAdmin: false,
    async execute(message, args) {
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        const fs = require('fs');
        const { id, name } = { id: message.author.id, name: message.author.username };
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        if (args[0]) {
            switch (args[0]) {
                    case "목록":
                        const embed = new Discord.MessageEmbed().setTitle("상점").setDescription("").addFields([{ name: "초급", value: `초급 던전이다요!` },{ name: "중급", value: `중급 던전이다요!` },{ name: "상급", value: `상급 던전이다요!` },{ name: "최상급", value: `최상급 던전이다요!` },]).setColor(GREEN)
                        message.channel.send({embeds: [embed]})
                        if(lev1>=8){}
                        else if(lev1>=6 && lev1 <8){
                            dungeon(100, 200)
                        }
                        else if(lev1>=4 && lev1 <6){
                            dungeon(200, 300)
                        }
                        else if(lev1>=2 && lev1 <4){
                            dungeon(232, 123)
                        }
                        else if(lev1 <2){
                            dungeon(123, 2321)
                        }
                        break;
                    case "중급":
                        var lev1 = Math.random()*7
                        if(lev1>=6){}
                        else if(lev1>=5 && lev1 <6){}
                        else if(lev1>=4 && lev1 <5){}
                        else if(lev1>=3 && lev1 <4){}
                        else if(lev1>=2 && lev1 <3){}
                        else if(lev1>=1 && lev1 <2){}
                        else if(lev1 <1){}
                        break;
                    case "상급":
                        var lev1 = Math.random()*8
                        if(lev1>=7){}
                        else if(lev1>=6 && lev1 <7){}
                        else if(lev1>=5 && lev1 <6){}
                        else if(lev1>=4 && lev1 <5){}
                        else if(lev1>=3 && lev1 <4){}
                        else if(lev1>=2 && lev1 <3){}
                        else if(lev1>=1 && lev1 <2){}
                        else if(lev1 <1){}
                        break;
                    case "최상급":
                        var lev1 = Math.random()*10
                        if(lev1>=8){}
                        else if(lev1>=6 && lev1 <8){}
                        else if(lev1>=2 && lev1 <6){}
                        else if(lev1>=0.1 && lev1 <2){}
                        else if(lev1 <0.1){}
                        break;
                    default:
                        const Embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription("던전을 찾을 수 없다요. **규소 던전**");
                        message.channel.send({embeds: [Embed]})
                }
        } else {
            const embed = new Discord.MessageEmbed().setTitle("상점 이용 안내").setDescription("```규소 상점 <명령어>```\n**명령어 목록**").addFields([{ name: "초급", value: `초급 던전이다요!` },{ name: "중급", value: `중급 던전이다요!` },{ name: "상급", value: `상급 던전이다요!` },{ name: "최상급", value: `최상급 던전이다요!` },]).setColor(GREEN)
            return message.channel.send({embeds: [embed]})
        }
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})