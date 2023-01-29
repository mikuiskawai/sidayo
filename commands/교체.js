const fs = require("fs")

module.exports = {
    name: "교체",
    aliases: ["change", "ㄱㅊ"],
    description: "교체다요!",
    isForAdmin: false,
    async execute(message, args) {
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN :"#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        const fs = require('fs');
        const { id, name } = { id: message.author.id, name: message.author.username };
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        if(!args[0]){ 
            const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`규소 교체 <새로 교체할 용의 레벨>과 같이 적어야 한다요!`).setColor(RED);
            return message.channel.send({embeds: [Embed]});
        }
        if (user.si >= 0){
            switch (args[0]){
                case "1" :
                if (user.black1 >=1){
                    if (user.goblack == 1){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:1,  
                            black1: user.black1-1+1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 2){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:1,  
                            black1: user.black1-1, 
                            black2: user.black2+1, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 3){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:1,  
                            black1: user.black1-1, 
                            black2: user.black2, 
                            black3: user.black3+1, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 4){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:1,  
                            black1: user.black1-1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4+1, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 5){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:1,  
                            black1: user.black1-1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5+1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                }
                else {
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`<@${message.author.id}> 님의 1성 흑염룡의 마리수가 부족하다요!`).setColor(RED);
                    return message.channel.send({embeds: [Embed]});
                }
                break;
            case "2" :
                if (user.black2 >=1){
                    if (user.goblack == 1){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:2,  
                            black1: user.black1+1, 
                            black2: user.black2-1, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 2){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:2,  
                            black1: user.black1, 
                            black2: user.black2-1+1, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 3){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:2,  
                            black1: user.black1, 
                            black2: user.black2-1, 
                            black3: user.black3+1, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 4){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:2,  
                            black1: user.black1, 
                            black2: user.black2-1, 
                            black3: user.black3, 
                            black4: user.black4+1, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 5){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:2,  
                            black1: user.black1, 
                            black2: user.black2-1, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5+1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                }
                else {
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`<@${message.author.id}> 님의 2성 흑염룡의 마리수가 부족하다요!`).setColor(RED);
                    return message.channel.send({embeds: [Embed]});
                }
                break;
            case "3" :
                if (user.black3 >=1){
                    if (user.goblack == 1){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:3,  
                            black1: user.black1+1, 
                            black2: user.black2, 
                            black3: user.black3-1, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 2){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:3,  
                            black1: user.black1, 
                            black2: user.black2+1, 
                            black3: user.black3-1, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 3){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:3,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3-1+1, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 4){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:3,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3-1, 
                            black4: user.black4+1, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 5){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:3,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3-1, 
                            black4: user.black4, 
                            black5: user.black5+1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                }
                else {
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`<@${message.author.id}> 님의 3성 흑염룡의 마리수가 부족하다요!`).setColor(RED);
                    return message.channel.send({embeds: [Embed]});
                }
                break;
            case "4" :
                if (user.black4 >=1){
                    if (user.goblack == 1){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:4,  
                            black1: user.black1+1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4-1, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 2){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:4,  
                            black1: user.black1, 
                            black2: user.black2+1, 
                            black3: user.black3, 
                            black4: user.black4-1, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 3){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:4,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3+1, 
                            black4: user.black4-1, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 4){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:4,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4-1+1, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 5){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:4,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4-1, 
                            black5: user.black5+1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                }
                else {
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`<@${message.author.id}> 님의 4성 흑염룡의 마리수가 부족하다요!`).setColor(RED);
                    return message.channel.send({embeds: [Embed]});
                }
                break;
            case "5" :
                if (user.black5 >=1){
                    if (user.goblack == 1){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:5,  
                            black1: user.black1+1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5-1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 2){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:5,  
                            black1: user.black1, 
                            black2: user.black2+1, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5-1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 3){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:5,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3+1, 
                            black4: user.black4, 
                            black5: user.black5-1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 4){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:5,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4+1, 
                            black5: user.black5-1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                    else if (user.goblack == 5){
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si, 
                            null1: user.null1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:5,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5-1+1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const Embed = new Discord.MessageEmbed().setTitle("편성 교체 성공").setDescription("성공적으로 편성이 교체되었다요!").setColor(GREEN);
                        return message.channel.send({embeds: [Embed]});
                    }
                }
                else {
                    const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription(`<@${message.author.id}> 님의 5성 흑염룡의 마리수가 부족하다요!`).setColor(RED);
                    return message.channel.send({embeds: [Embed]});
                }
                break;
            }
        }else{
            const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription("si가 비정상적이다요!").setColor(RED)
            return message.channel.send({embeds: [Embed]});
        }
    }
}