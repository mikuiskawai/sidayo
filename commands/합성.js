module.exports = {
    name: "합성",
    aliases: ["hapsung", "ㅎㅅ"],
    description: "합성이다요",
    isForAdmin: false,
    async execute(message, args) {
        const { RED, GREEN} = { RED: "#ff5454", GREEN: "#54ff62"}
        const Discord = require('discord.js');
        const fs = require('fs');
        const { id, name } = { id: message.author.id, name: message.author.username };
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        if (args[0]) {
            switch (args[0]) {
                    case "2":
                        if(user.black1>=10){
                            Save = {
                                id, 
                                name, 
                                date: user.date, 
                                xp: user.xp + 10, 
                                level: user.level, 
                                blacklevel:user.blacklevel, 
                                coin: user.coin, 
                                sipza: user.sipza, 
                                si: user.si, 
                                null1: user.null1, 
                                null2:user.null2, 
                                null3: user.null3, 
                                goblack:user.goblack,  
                                black1: user.black1 - 10, 
                                black2: user.black2 + 1, 
                                black3: user.black3, 
                                black4: user.black4, 
                                black5: user.black5
                            }
                            fs.writeFileSync(filePath, JSON.stringify(Save));
                            const embed = new Discord.MessageEmbed().setTitle("합성").setDescription("성공적으로 합성되었다요!").setColor(GREEN)
                            message.channel.send({embeds: [embed]})
                        } else {
                                const embed = new Discord.MessageEmbed().setTitle("합성").setDescription("레벨 1 흑염룡의 수가 부족하다요!\n필요한 레벨 1 흑염룡의 수: 10").setColor(GREEN)
                                message.channel.send({embeds: [embed]})
                        }
                        break;
                    case "3":
                        if(user.black2>=10){
                            Save = {
                                id, 
                                name, 
                                date: user.date, 
                                xp: user.xp + 15, 
                                level: user.level, 
                                blacklevel:user.blacklevel, 
                                coin: user.coin, 
                                sipza: user.sipza, 
                                si: user.si, 
                                null1: user.null1, 
                                null2:user.null2, 
                                null3: user.null3, 
                                goblack:user.goblack,  
                                black1: user.black1, 
                                black2: user.black2 - 10, 
                                black3: user.black3 + 1, 
                                black4: user.black4, 
                                black5: user.black5
                            }
                            fs.writeFileSync(filePath, JSON.stringify(Save));
                            const embed = new Discord.MessageEmbed().setTitle("삽성").setDescription("성공적으로 합성되었다요!").setColor(GREEN)
                            message.channel.send({embeds: [embed]})
                        } else {
                                const embed = new Discord.MessageEmbed().setTitle("합성").setDescription("레벨 2 흑염룡의 수가 부족하다요!\n필요한 레벨 2 흑염룡의 수: 10").setColor(GREEN)
                                message.channel.send({embeds: [embed]})
                        }
                        break;
                    case "4":
                        if(user.black3>=10){
                            Save = {
                                id, 
                                name, 
                                date: user.date, 
                                xp: user.xp + 20, 
                                level: user.level, 
                                blacklevel:user.blacklevel, 
                                coin: user.coin, 
                                sipza: user.sipza, 
                                si: user.si, 
                                null1: user.null1, 
                                null2:user.null2, 
                                null3: user.null3, 
                                goblack:user.goblack,  
                                black1: user.black1, 
                                black2: user.black2, 
                                black3: user.black3 -10, 
                                black4: user.black4 + 1, 
                                black5: user.black5
                            }
                            fs.writeFileSync(filePath, JSON.stringify(Save));
                            const embed = new Discord.MessageEmbed().setTitle("합성").setDescription("성공적으로 합성되었다요!").setColor(GREEN)
                            message.channel.send({embeds: [embed]})
                        } else {
                                const embed = new Discord.MessageEmbed().setTitle("합성").setDescription("레벨 3 흑염룡의 수가 부족하다요!\n필요한 레벨 3 흑염룡의 수: 10").setColor(GREEN)
                                message.channel.send({embeds: [embed]})
                        }
                        break;
                    case "5":
                        if(user.black4>=10){
                            Save = {
                                id, 
                                name, 
                                date: user.date, 
                                xp: user.xp + 100, 
                                level: user.level, 
                                blacklevel:user.blacklevel, 
                                coin: user.coin, 
                                sipza: user.sipza, 
                                si: user.si, 
                                null1: user.null1, 
                                null2:user.null2, 
                                null3: user.null3, 
                                goblack:user.goblack,  
                                black1: user.black1, 
                                black2: user.black2, 
                                black3: user.black3, 
                                black4: user.black4 - 10, 
                                black5: user.black5 + 1
                            }
                            fs.writeFileSync(filePath, JSON.stringify(Save));
                            const embed = new Discord.MessageEmbed().setTitle("합성").setDescription("성공적으로 합성되었다요!").setColor(GREEN)
                            message.channel.send({embeds: [embed]})
                        } else {
                                const embed = new Discord.MessageEmbed().setTitle("합성").setDescription("레벨 4 흑염룡의 수가 부족하다요!\n필요한 레벨 4 흑염룡의 수: 10").setColor(GREEN)
                                message.channel.send({embeds: [embed]})
                        }
                        break;
                    default:
                        const Embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription("레벨을 찾을 수 없다요. **규소 합성**");
                        message.channel.send({embeds: [Embed]})
                }
        } else {
            const embed = new Discord.MessageEmbed().setTitle("합성 이용 안내").setDescription("```규소 합성 <합성할 흑염룡 레벨>```\n아래 레벨 흑염룡 10마리로\n 윗레벨 흑염룡 1마리를 합성할 수 있다요!").setColor(GREEN)
            return message.channel.send({embeds: [embed]})
        }
    }
}
//흑염룡, 백빙룡, 청양룡, 적토룡
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})