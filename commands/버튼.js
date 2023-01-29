const fs = require("fs")

module.exports = {
    name: "버튼",
    aliases: ["button", "ㅂㅌ"],
    description: "버튼입니다",
    isForAdmin: false,
    async execute(interaction, message, args) {
        const {MessageActionRow, MessageButton} = require('discord.js');
        const Discord = require('discord.js')
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const { id, name } = { id: interaction.author.id, name: interaction.author.username };
        const ab = false;
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const win = true;
        const defeat = false;
        function game_end(result) {
            if(result == true){
                Save = {
                    id, 
                    name, 
                    date: user.date, 
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
            }else if(result == false){
                Save = {
                    id, 
                    name, 
                    date: user.date, 
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
            var mgp = 10 //적 공격력
            let pbp = user.level*20 + 100 //플레이어 체력
            var MainPic = "";
            var tsp = "";
            const  Message = new Discord.MessageEmbed().setTitle("초급 던전").addFields(
                { name: '적 정보', value: '초급 몹' },
                { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '적의 체력', value: `${mbp}`, inline: true },
                { name: '적의 공격력', value: `${mgp}`, inline: true },
                ).setColor(GREEN);

        await interaction.channel.send({ ephemeral: true, embeds: [Message], components: [utilbtn]});
            
        const filter = i => i.customId === 'a'|| i.customId === 'b'|| i.customId === 'c'|| i.customId === 'd'|| i.customId === 'e'

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 30000 });

        collector.on('collect',async i => {
            if (i.customId === 'a') {
                mbp -= pgp
                if(mbp <= 0 && pbp > 0){
                    collector.stop()
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                    game_end(win)
                    return await i.update({embeds: [Message], components: [] });
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
                    await i.update({embeds: [Message], components: [utilbtn] });
                }
                else{}
            }
            else if (i.customId === 'b') {
                mbp -= pgp
                if(mbp <= 0 && pbp > 0){
                    collector.stop()
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                    game_end(win)
                    return await i.update({embeds: [Message], components: [] });
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
                    await i.update({embeds: [Message], components: [utilbtn] });
                }
                else{}
            }
            else if (i.customId === 'c') {
                mbp -= pgp
                if(mbp <= 0 && pbp > 0){
                    collector.stop()
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                    game_end(win)
                    return await i.update({embeds: [Message], components: [] });
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
                    await i.update({embeds: [Message], components: [utilbtn] });
                }
                else{}
            }
            else if (i.customId === 'd') {
                mbp -= pgp
                if(mbp <= 0 && pbp > 0){
                    collector.stop()
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                    game_end(win)
                    return await i.update({embeds: [Message], components: [] });
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
                    await i.update({embeds: [Message], components: [utilbtn] });
                }
                else{}
            }
            else if (i.customId === 'e') {
                pbp += user.level*50
                if(mbp <= 0 && pbp > 0){
                    collector.stop()
                    const Message = new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN)
                    game_end(win)
                    return await i.update({embeds: [Message], components: [] });
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
                    await i.update({embeds: [Message], components: [utilbtn] });
                }
                else{}
            }
        });
    }
}