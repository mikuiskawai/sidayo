









                                ((((((((((((((((gd))))))))))))))))
                                {{{{{{{{{{{{{{{{gd}}}}}}}}}}}}}}}}
                                [[[[[[[[[[[[[[[[gd]]]]]]]]]]]]]]]]
                                
client.on
                                        let mbp = 500 //적 체력
                                        var pgp = user.level*10 + 100 //플레이어 공격력
                                        var mgp = 200 //적 공격력
                                        let pbp = user.level*20 + 100 //플레이어 체력
                                        var MainPic = "";
                                        var tsp = ""
                
                                        const Message = await message.reply(Embed.setTitle("초급 던전").setAuthor(tsp).addFields(
                                            { name: '적 정보', value: '초급 몹' },
                                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                            { name: '\u200B', value: '\u200B' },
                                            { name: '적의 체력', value: `${mbp}`, inline: true },
                                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                                            ).setImage(MainPic).setColor(GREEN));
                                        
                                        await Message.react("🩸");
                                        await Message.react("🎇");
                                        await Message.react("💥");
                                        await Message.react("🕳️");
                                        await Message.react("➕");
                
                                        const Filter_1 = (r, user) => (r.emoji.name === "🩸" || r.emoji.name === "🎇" || r.emoji.name === "💥" || r.emoji.name === "🕳️" || r.emoji.name === "➕") && user.id === message.author.id;
                
                                        const collector = Message.createReactionCollector(Filter_1, { time: 900000, dispose: true });
                
                                        setTimeout(() => {
                                            collector.stop()
                                            Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**끝**`).setImage(MainPic).setColor(GREEN));
                                            }, 30 * 1000);
                
                                        setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 3 * 1000);
                                            
                                            setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 6 * 1000);
                                            
                                            setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 9 * 1000);
                
                                            setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 12 * 1000);
                
                                            setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 15 * 1000);
                
                                            setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 18 * 1000);
                
                                            setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 21 * 1000);
                
                                            setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 24 * 1000);
                
                                            setTimeout(() => {
                                            pbp -= mgp
                                            if(pbp <=0 && mbp >0){
                                                collector.stop()
                                                Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**패배**`).setImage(MainPic).setColor(GREEN));
                                                Save = {
                                                    id,
                                                    name,
                                                    date: user.date,
                                                    xp: user.xp + 10,
                                                    level: user.level,
                                                    coin: user.coin -1,
                                                    si: user.si,
                                                    null1: user.null1,
                                                    null2: user.null2
                                                }
                                                fs.writeFileSync(filePath, JSON.stringify(Save));
                                            }
                                            else if(pbp >0 && mbp >0){
                                                return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                    { name: '적 정보', value: '초급 몹' },
                                                    { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                    { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                    { name: '\u200B', value: '\u200B' },
                                                    { name: '적의 체력', value: `${mbp}`, inline: true },
                                                    { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                ).setImage(MainPic).setColor(GREEN));
                                            }
                                            else{}
                                            }, 27 * 1000);
                                            
                                            collector.on('collect', r => {
                                            switch (r.emoji.name) {
                                                case "🩸":
                                                    mbp -= pgp
                                                    if(mbp <= 0 && pbp > 0){
                                                        collector.stop()
                                                        Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN));
                                                        Save = {
                                                            id,
                                                            name,
                                                            date: user.date,
                                                            xp: user.xp + 20,
                                                            level: user.level,
                                                            coin: user.coin -1,
                                                            si: user.si,
                                                            null1: user.null1,
                                                            null2: user.null2
                                                        }
                                                        fs.writeFileSync(filePath, JSON.stringify(Save));
                                                    }
                                                    else if(mbp >0 && pbp>0){
                                                        return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                            { name: '적 정보', value: '초급 몹' },
                                                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                            { name: '\u200B', value: '\u200B' },
                                                            { name: '적의 체력', value: `${mbp}`, inline: true },
                                                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                        ).setImage(MainPic).setColor(GREEN));
                                                    }
                                                    else{}
                                                case "🎇":
                                                    mbp -= pgp
                                                    if(mbp <= 0 && pbp > 0){
                                                        collector.stop()
                                                        Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN));
                                                        Save = {
                                                            id,
                                                            name,
                                                            date: user.date,
                                                            xp: user.xp + 20,
                                                            level: user.level,
                                                            coin: user.coin -1,
                                                            si: user.si,
                                                            null1: user.null1,
                                                            null2: user.null2
                                                        }
                                                        fs.writeFileSync(filePath, JSON.stringify(Save));
                                                    }
                                                    else if(mbp >0 && pbp>0){
                                                        return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                            { name: '적 정보', value: '초급 몹' },
                                                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                            { name: '\u200B', value: '\u200B' },
                                                            { name: '적의 체력', value: `${mbp}`, inline: true },
                                                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                        ).setImage(MainPic).setColor(GREEN));
                                                    }
                                                    else{}
                                                case "💥":
                                                    mbp -= pgp
                                                    if(mbp <= 0 && pbp > 0){
                                                        collector.stop()
                                                        Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN));
                                                        Save = {
                                                            id,
                                                            name,
                                                            date: user.date,
                                                            xp: user.xp + 20,
                                                            level: user.level,
                                                            coin: user.coin -1,
                                                            si: user.si,
                                                            null1: user.null1,
                                                            null2: user.null2
                                                        }
                                                        fs.writeFileSync(filePath, JSON.stringify(Save));
                                                    }
                                                    else if(mbp >0 && pbp>0){
                                                        return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                            { name: '적 정보', value: '초급 몹' },
                                                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                            { name: '\u200B', value: '\u200B' },
                                                            { name: '적의 체력', value: `${mbp}`, inline: true },
                                                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                        ).setImage(MainPic).setColor(GREEN));
                                                    }
                                                    else{}
                                                case "🕳️":
                                                    mbp -= pgp
                                                    if(mbp <= 0 && pbp > 0){
                                                        collector.stop()
                                                        Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN));
                                                        Save = {
                                                            id,
                                                            name,
                                                            date:user.date,
                                                            xp: user.xp + 20,
                                                            level: user.level,
                                                            coin: user.coin -1,
                                                            si: user.si,
                                                            null1: user.null1,
                                                            null2: user.null2
                                                        }
                                                        fs.writeFileSync(filePath, JSON.stringify(Save));
                                                    }
                                                    else if(mbp >0 && pbp>0){
                                                        return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                            { name: '적 정보', value: '초급 몹' },
                                                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                            { name: '\u200B', value: '\u200B' },
                                                            { name: '적의 체력', value: `${mbp}`, inline: true },
                                                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                        ).setImage(MainPic).setColor(GREEN));
                                                    }
                                                    else{}
                                                case "➕" :
                                                    pbp += user.level*50
                                                    if(mbp <= 0 && pbp > 0){
                                                        collector.stop()
                                                        Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setDescription(`**승리**`).setImage(MainPic).setColor(GREEN));
                                                        Save = {
                                                            id,
                                                            name,
                                                            date:user.date,
                                                            xp: user.xp + 20,
                                                            level: user.level,
                                                            coin: user.coin -1,
                                                            si: user.si,
                                                            null1: user.null1,
                                                            null2: user.null2
                                                        }
                                                        fs.writeFileSync(filePath, JSON.stringify(Save));
                                                    }
                                                    else if(mbp >0 && pbp>0){
                                                        return Message.edit(new Discord.MessageEmbed().setTitle("초급 던전").setAuthor(tsp).addFields(
                                                            { name: '적 정보', value: '초급 몹' },
                                                            { name: '플레이어의 체력', value: `${pbp}`, inline: true },
                                                            { name: '플레이어의 공격력', value: `${pgp}`, inline: true },
                                                            { name: '\u200B', value: '\u200B' },
                                                            { name: '적의 체력', value: `${mbp}`, inline: true },
                                                            { name: '적의 공격력', value: `${mgp}`, inline: true },
                                                        ).setImage(MainPic).setColor(GREEN));
                                                    }
                                                    else{}
                                            }
                                            });
                                            break;


                                            const chart = new QuickChart();
                                                chart.setConfig({
                                                type: 'line',
                                                data: { labels: [`5`,`4`,`3`,`2`,`1`,], datasets: [{ label: '영역 이름', data: [`${stock1.ones}`,`${stock1.twos}`,`${stock1.threes}`,`${stock1.fours}`,`${stock1.fives}`,`${stock1.sixs}`,`${stock1.sevens}`,`${stock1.eights}`,`${stock1.nines}`,`${stock1.tens}`, ] }] },
                                                }).setBackgroundColor('#000000');
                                                const url = await chart.getShortUrl();

                                            message.channel.send(`${url}`)