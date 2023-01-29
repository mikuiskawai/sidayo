const fs = require("fs")

module.exports = {
    name: "각성",
    aliases: ["hi", "하이"],
    description: "ㅎㅇ다요!",
    isForAdmin: false,
    async execute(message, args) {
        const date = ""
        const fs = require('fs');
        const { Client, Intents, DiscordAPIError } = require('discord.js');
        const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
        const { id, name } = { id: message.author.id, name: message.author.username };
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const Discord = require('discord.js');
        if(args[0]){
            //5 10 15 30
            switch (args[0]){
            case "2":
                if(user.blacklevel == 1){
                    if(user.sipza>=5){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:2, 
                            coin: user.coin, 
                            sipza: user.sipza -5, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                }else{
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`이미 흑염룡이 2레벨 이상이다요!\n현재 흑염룡 레벨: ${user.blacklevel}`).setColor(RED);
                    message.channel.send({embeds: [Embed]});
                }
                break;
            case "3":
                if(user.blacklevel == 1){
                    if(user.sipza>=15){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:3, 
                            coin: user.coin, 
                            sipza: user.sipza -15, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                }
                else if(user.blacklevel == 2){
                    if(user.sipza>=10){
                        Save = {
                            id, 
                            name, 
                            date: date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:3, 
                            coin: user.coin, 
                            sipza: user.sipza -10, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                }else{
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`이미 흑염룡이 3레벨 이상이다요!\n현재 흑염룡 레벨: ${user.blacklevel}`).setColor(RED);
                    message.channel.send({embeds: [Embed]});
                }
                break;
            case "4":
                if(user.blacklevel == 1){
                    //5 10 15 30
                    if(user.sipza>=30){
                        Save = {
                            id, 
                            name, 
                            date: date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:4, 
                            coin: user.coin, 
                            sipza: user.sipza -30, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                }
                else if(user.blacklevel == 2){
                    if(user.sipza>=25){
                        Save = {
                            id, 
                            name, 
                            date: date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:4, 
                            coin: user.coin, 
                            sipza: user.sipza -25, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                    
                }
                else if(user.blacklevel == 3){
                    //5 10 15 30
                    if(user.sipza>=15){
                        Save = {
                            id, 
                            name, 
                            date: date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:4, 
                            coin: user.coin, 
                            sipza: user.sipza -15, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                }else{
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`이미 흑염룡이 4레벨 이상이다요!\n현재 흑염룡 레벨: ${user.blacklevel}`).setColor(RED);
                    message.channel.send({embeds: [Embed]});
                }
                break;
            case "5":
                if(user.blacklevel == 1){
                    //5 10 15 30
                    if(user.sipza>=60){
                        Save = {
                            id, 
                            name, 
                            date: date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:5, 
                            coin: user.coin, 
                            sipza: user.sipza -60, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                }
                else if(user.blacklevel == 2){
                    if(user.sipza>=55){
                        Save = {
                            id, 
                            name, 
                            date: date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:5, 
                            coin: user.coin, 
                            sipza: user.sipza -55, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                    
                }
                else if(user.blacklevel == 3){
                    //5 10 15 30
                    if(user.sipza>=45){
                        Save = {
                            id, 
                            name, 
                            date: date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:5, 
                            coin: user.coin, 
                            sipza: user.sipza -45, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                }
                else if(user.blacklevel == 4){
                    //5 10 15 30
                    if(user.sipza>=30){
                        Save = {
                            id, 
                            name, 
                            date: date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:5, 
                            coin: user.coin, 
                            sipza: user.sipza -30, 
                            si: user.si, 
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
                        const Embed = new Discord.MessageEmbed().setTitle("각성").setDescription(`성공적으로 용이 각성되었다요!`).setColor(GREEN)
                        message.channel.send({embeds: [Embed]});
                    }else{
                        const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`십자석이 부족하다요!\n현재 십자석 개수: ${user.sipza}`).setColor(RED);
                        message.channel.send({embeds: [Embed]});
                    }
                }else{
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`이미 흑염룡이 5레벨이다요!\n현재 흑염룡 레벨: ${user.blacklevel}`).setColor(RED);
                    message.channel.send({embeds: [Embed]});
                }
                break;
            default:
                const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`규소 각성 <올릴 용의 레벨>과 같이 적어야 한다요!`).setColor(RED);
                message.channel.send({embeds: [Embed]});
                break;
            }
        }else{
            const embed = new Discord.MessageEmbed().setTitle("각성 이용 안내").setDescription("```규소 각성 <올릴 레벨>```\n1->2레벨:십자석 5개\n2->3레벨:십자석 10개\n3->4레벨:십자석 15개\n4->5레벨:십자석 30개").addFields([{ name: "초급", value: `초급 던전이다요!` },{ name: "중급", value: `중급 던전이다요!` },{ name: "상급", value: `상급 던전이다요!` },{ name: "최상급", value: `최상급 던전이다요!` },]).setColor(GREEN)
            return message.channel.send({embeds: [embed]})
        }
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})
