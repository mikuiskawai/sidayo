module.exports = {
    name: "던ㅇ전",
    aliases: ["dungeon", "ㄷㅈ"],
    description: "던전이다요.",
    isForAdmin: false,
    async execute(message, args, interaction) {
        const date = ""
        const {MessageActionRow, MessageButton} = require('discord.js')
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        const fs = require('fs');
        const { id, name } = { id: message.author.id, name: message.author.username };
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        var ab = false
        function game_end(result) {
            if(result == win){
                Save = {
                    id, 
                    name, 
                    date: date, 
                    xp: user.xp + 30, 
                    level: user.level, 
                    blacklevel:user.blacklevel, 
                    coin: user.coin - 1, 
                    sipza: user.sipza, 
                    si: user.si + 1000, 
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
            }else if(result == defeat){
                Save = {
                    id, 
                    name, 
                    date: date, 
                    xp: user.xp + 10, 
                    level: user.level, 
                    blacklevel:user.blacklevel, 
                    coin: user.coin - 1, 
                    sipza: user.sipza, 
                    si: user.si + 500, 
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

        const utilbtn = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('a')
                    .setLabel('✨')
                    .setStyle('SECONDARY')
                    .setDisabled(ab),
                new MessageButton()
                    .setCustomId('b')
                    .setLabel('🕳️')
                    .setStyle('SECONDARY')
                    .setDisabled(ab),
                new MessageButton()
                    .setCustomId('c')
                    .setLabel('🎇')
                    .setStyle('SECONDARY')
                    .setDisabled(ab),
                new MessageButton()
                    .setCustomId('d')
                    .setLabel('💥')
                    .setStyle('SECONDARY')
                    .setDisabled(ab),
                new MessageButton()
                    .setCustomId('e')
                    .setLabel('➕')
                    .setStyle('SECONDARY')
                    .setDisabled(ab)
            );



            let mbp = 200 //적 체력
            var pgp = user.level*10 + 100 //플레이어 공격력
            var mgp = 123 //적 공격력
            let pbp = user.level*20 + 100 //플레이어 체력
            var MainPic = "";
            var tsp = ""
            const  Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                { name: '적 정보', value: '초급 몹' },
                { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '적의 체력', value: `${mbp}`, inline: true },
                { name: '적의 공격력', value: `${mgp}`, inline: true },
                ).setColor(GREEN);
            
            await interaction.reply({ ephemeral: true, embeds: [Message], components: [utilbtn]})

            const filter = (i, user) => i.customId === 'a'|| i.customId === 'b'|| i.customId === 'c'|| i.customId === 'd' && user.id === message.author.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: 30000 });

            setTimeout(() => {
                collector.stop()
                const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**시간 끝**`).setImage(MainPic).setColor(GREEN)
                game_end(defeat)
                return i.update({embeds: [Message], components: [] });
                }, 30 * 1000);

            setTimeout(() => {
                pbp -= mgp
                if(pbp <=0 && mbp >0){
                    collector.stop()
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                    game_end(defeat)
                    return i.update({embeds: [Message], components: [] });
                }
                else if(pbp >0 && mbp >0){
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                        { name: '적 정보', value: '초급 몹' },
                        { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                        { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                        { name: '\u200B', value: '\u200B' },
                        { name: '적의 체력', value: `${mbp}`, inline: true },
                        { name: '적의 공격력', value: `${mgp}`, inline: true },
                    ).setImage(MainPic).setColor(GREEN);
                    i.update({embeds: [Message], components: [utilbtn] });
                }
                else{}
                }, 3 * 1000);
                
                setTimeout(() => {
                    pbp -= mgp
                    if(pbp <=0 && mbp >0){
                        collector.stop()
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                        game_end(defeat)
                        return i.update({embeds: [Message], components: [] });
                    }
                    else if(pbp >0 && mbp >0){
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                            { name: '적 정보', value: '초급 몹' },
                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                            { name: '\u200B', value: '\u200B' },
                            { name: '적의 체력', value: `${mbp}`, inline: true },
                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                        ).setImage(MainPic).setColor(GREEN);
                        i.update({embeds: [Message], components: [utilbtn] });
                    }
                    else{}
                }, 6 * 1000);
                
                setTimeout(() => {
                    pbp -= mgp
                    if(pbp <=0 && mbp >0){
                        collector.stop()
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                        game_end(defeat)
                        return i.update({embeds: [Message], components: [] });
                    }
                    else if(pbp >0 && mbp >0){
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                            { name: '적 정보', value: '초급 몹' },
                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                            { name: '\u200B', value: '\u200B' },
                            { name: '적의 체력', value: `${mbp}`, inline: true },
                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                        ).setImage(MainPic).setColor(GREEN);
                        i.update({embeds: [Message], components: [utilbtn] });
                    }
                    else{}
                }, 9 * 1000);

                setTimeout(() => {
                    pbp -= mgp
                    if(pbp <=0 && mbp >0){
                        collector.stop()
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                        game_end(defeat)
                        return i.update({embeds: [Message], components: [] });
                    }
                    else if(pbp >0 && mbp >0){
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                            { name: '적 정보', value: '초급 몹' },
                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                            { name: '\u200B', value: '\u200B' },
                            { name: '적의 체력', value: `${mbp}`, inline: true },
                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                        ).setImage(MainPic).setColor(GREEN);
                        i.update({embeds: [Message], components: [utilbtn] });
                    }
                    else{}
                }, 12 * 1000);

                setTimeout(() => {
                    pbp -= mgp
                    if(pbp <=0 && mbp >0){
                        collector.stop()
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                        game_end(defeat)
                        return i.update({embeds: [Message], components: [] });
                    }
                    else if(pbp >0 && mbp >0){
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                            { name: '적 정보', value: '초급 몹' },
                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                            { name: '\u200B', value: '\u200B' },
                            { name: '적의 체력', value: `${mbp}`, inline: true },
                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                        ).setImage(MainPic).setColor(GREEN);
                        i.update({embeds: [Message], components: [utilbtn] });
                    }
                    else{}
                }, 15 * 1000);

                setTimeout(() => {
                    pbp -= mgp
                    if(pbp <=0 && mbp >0){
                        collector.stop()
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                        game_end(defeat)
                        return i.update({embeds: [Message], components: [] });
                    }
                    else if(pbp >0 && mbp >0){
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                            { name: '적 정보', value: '초급 몹' },
                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                            { name: '\u200B', value: '\u200B' },
                            { name: '적의 체력', value: `${mbp}`, inline: true },
                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                        ).setImage(MainPic).setColor(GREEN);
                        i.update({embeds: [Message], components: [utilbtn] });
                    }
                    else{}
                }, 18 * 1000);

                setTimeout(() => {
                    pbp -= mgp
                    if(pbp <=0 && mbp >0){
                        collector.stop()
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                        game_end(defeat)
                        return i.update({embeds: [Message], components: [] });
                    }
                    else if(pbp >0 && mbp >0){
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                            { name: '적 정보', value: '초급 몹' },
                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                            { name: '\u200B', value: '\u200B' },
                            { name: '적의 체력', value: `${mbp}`, inline: true },
                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                        ).setImage(MainPic).setColor(GREEN);
                        i.update({embeds: [Message], components: [utilbtn] });
                    }
                    else{}
                }, 21 * 1000);

                setTimeout(() => {
                    pbp -= mgp
                    if(pbp <=0 && mbp >0){
                        collector.stop()
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                        game_end(defeat)
                        return i.update({embeds: [Message], components: [] });
                    }
                    else if(pbp >0 && mbp >0){
                        const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                            { name: '적 정보', value: '초급 몹' },
                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                            { name: '\u200B', value: '\u200B' },
                            { name: '적의 체력', value: `${mbp}`, inline: true },
                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                        ).setImage(MainPic).setColor(GREEN);
                        i.update({embeds: [Message], components: [utilbtn] });
                    }
                    else{}
                }, 24 * 1000);

                setTimeout(() => {
                pbp -= mgp
                if(pbp <=0 && mbp >0){
                    collector.stop()
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN)
                    game_end(defeat)
                    return i.update({embeds: [Message], components: [] });
                }
                else if(pbp >0 && mbp >0){
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                        { name: '적 정보', value: '초급 몹' },
                        { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                        { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                        { name: '\u200B', value: '\u200B' },
                        { name: '적의 체력', value: `${mbp}`, inline: true },
                        { name: '적의 공격력', value: `${mgp}`, inline: true },
                    ).setImage(MainPic).setColor(GREEN);
                    i.update({embeds: [Message], components: [utilbtn] });
                }
                else{}
                }, 27 * 1000);
                
                collector.on('collect',async i => {
                    if (i.customId === 'a') {
                        mbp -= pgp
                        if(mbp <= 0 && pbp > 0){
                            collector.stop()
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                            game_end(win)
                            return i.update({embeds: [Message], components: [] });
                        }
                        else if(mbp >0 && pbp>0){
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                { name: '적 정보', value: '초급 몹' },
                                { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                { name: '\u200B', value: '\u200B' },
                                { name: '적의 체력', value: `${mbp}`, inline: true },
                                { name: '적의 공격력', value: `${mgp}`, inline: true },
                            ).setImage(MainPic).setColor(GREEN);
                            i.update({embeds: [Message], components: [utilbtn] });
                        }
                        else{}
                    }
                    else if (i.customId === 'b') {
                        mbp -= pgp
                        if(mbp <= 0 && pbp > 0){
                            collector.stop()
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                            game_end(win)
                            return i.update({embeds: [Message], components: [] });
                        }
                        else if(mbp >0 && pbp>0){
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                { name: '적 정보', value: '초급 몹' },
                                { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                { name: '\u200B', value: '\u200B' },
                                { name: '적의 체력', value: `${mbp}`, inline: true },
                                { name: '적의 공격력', value: `${mgp}`, inline: true },
                            ).setImage(MainPic).setColor(GREEN);
                            i.update({embeds: [Message], components: [utilbtn] });
                        }
                        else{}
                    }
                    else if (i.customId === 'c') {
                        mbp -= pgp
                        if(mbp <= 0 && pbp > 0){
                            collector.stop()
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                            game_end(win)
                            return i.update({embeds: [Message], components: [] });
                        }
                        else if(mbp >0 && pbp>0){
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                { name: '적 정보', value: '초급 몹' },
                                { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                { name: '\u200B', value: '\u200B' },
                                { name: '적의 체력', value: `${mbp}`, inline: true },
                                { name: '적의 공격력', value: `${mgp}`, inline: true },
                            ).setImage(MainPic).setColor(GREEN);
                            i.update({embeds: [Message], components: [utilbtn] });
                        }
                        else{}
                    }
                    else if (i.customId === 'd') {
                        mbp -= pgp
                        if(mbp <= 0 && pbp > 0){
                            collector.stop()
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                            game_end(win)
                            return i.update({embeds: [Message], components: [] });
                        }
                        else if(mbp >0 && pbp>0){
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                { name: '적 정보', value: '초급 몹' },
                                { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                { name: '\u200B', value: '\u200B' },
                                { name: '적의 체력', value: `${mbp}`, inline: true },
                                { name: '적의 공격력', value: `${mgp}`, inline: true },
                            ).setImage(MainPic).setColor(GREEN);
                            i.update({embeds: [Message], components: [utilbtn] });
                        }
                        else{}
                    }
                    else if (i.customId === 'e') {
                        pbp += user.level*50
                        if(mbp <= 0 && pbp > 0){
                            collector.stop()
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                            game_end(win)
                            return i.update({embeds: [Message], components: [] });
                        }
                        else if(mbp >0 && pbp>0){
                            const Message = new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                { name: '적 정보', value: '초급 몹' },
                                { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                { name: '\u200B', value: '\u200B' },
                                { name: '적의 체력', value: `${mbp}`, inline: true },
                                { name: '적의 공격력', value: `${mgp}`, inline: true },
                            ).setImage(MainPic).setColor(GREEN);
                            i.update({embeds: [Message], components: [utilbtn] });
                        }
                        else{}
                    }
                });


        /*
        if (args[0]) {
            if (user.coin >= 0) {
                switch (args[0]) {
                    case "초급":
                        var lev1 = Math.random()*10
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
                const embed = new Discord.MessageEmbed().setTitle("오류").setDescription("티켓이 부족하다요").setColor("RED")
                return message.channel.send({embeds: [embed]})
            }
        } else {
            const embed = new Discord.MessageEmbed().setTitle("던전 이용 안내").setDescription("```규소 던전 <레벨>```\n**던전 목록**").addFields([{ name: "초급", value: `초급 던전이다요!` },{ name: "중급", value: `중급 던전이다요!` },{ name: "상급", value: `상급 던전이다요!` },{ name: "최상급", value: `최상급 던전이다요!` },]).setColor(GREEN)
            return message.channel.send({embeds: [embed]})
        }
        */
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})