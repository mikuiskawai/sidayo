module.exports = {
    name: "던d전",
    aliases: ["dungeon", "ㄷㅈ"],
    description: "던전이다요",
    isForAdmin: false,
    async execute(message, args) {
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        const fs = require('fs');
        const Embed = new Discord.MessageEmbed();
        const { id, name } = { id: message.author.id, name: message.author.username };
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        if (args[0]) {
            if (user.si >= 1) {
                switch (args[0]) {
                    case "야바위":
                        var Answer = Math.floor(Math.random() * 3 + 1);
                        var Picture = "";
                        var MainPic = ""; // "" 에 야바위 게임 메인 사진의 링크를 기입 (직접 만드세요)
                        if (Answer == 1) Picture = ""; // "" 에 1번 컵에 코인이 있는 사진의 링크를 기입
                        if (Answer == 2) Picture = ""; // "" 에 2번 컵에 코인이 있는 사진의 링크를 기입
                        if (Answer == 3) Picture = ""; // "" 에 3번 컵에 코인이 있는 사진의 링크를 기입
                        
                        const Message = await message.reply(Embed.setTitle("⚱ 야바위 게임").setDescription(`<@${message.author.id}> 님이 야바위 게임을 시작했습니다.\n아래 세 컵 중 한 컵을 골라 번호 클릭해주세요.\n코인이 들어있는 컵을 고르면 코인 세 개를 드릴게요!`).setImage(MainPic).setColor(BLUE));
                        
                        await Message.react("1️⃣");
                        await Message.react("2️⃣");
                        await Message.react("3️⃣");
                        await Message.react("🔄");
                        
                        const Filter_1 = (r, user) => (r.emoji.name === "1️⃣" || r.emoji.name === "2️⃣" || r.emoji.name === "3️⃣" || r.emoji.name === "🔄") && user.id === message.author.id;
                        
                        const collector = Message.createReactionCollector(Filter_1, { time: 900000, dispose: true });
                        
                        collector.on('collect', r => {
                            switch (r.emoji.name) {
                                case "1️⃣":
                                    Picked(1);
                                    collector.stop();
                                    break;
                                case "2️⃣":
                                    Picked(2);
                                    collector.stop();
                                    break;
                                case "3️⃣":
                                    Picked(3);
                                    collector.stop();
                                    break;
                                case "🔄":
                                    Picked(4);
                                    break;
                            }
                            async function Picked(Cup) {
                                if (Cup == 4) {
                                    return Message.edit(new Discord.MessageEmbed().setTitle("⚱ 야바위 게임").setDescription(`**컵을 다시 섞었습니다!**\n아래 세 컵 중 한 컵을 골라 번호 클릭해주세요.\n코인이 들어있는 컵을 고르면 코인 세 개를 드릴게요!`).setImage(MainPic).setColor(BLUE));
                                } else if (Cup == Answer) {
                                    Message.edit(new Discord.MessageEmbed().setTitle("⚱ 야바위 게임").setDescription(`<@${message.author.id}>, 정답입니다! 코인 세 개를 드릴게요.` + '```+ 3코인```').setColor(BLUE).setImage(Picture));
                                    Save = {
                                        id,
                                        name,
                                        date: user.date,
                                        xp: user.xp,
                                        level: user.level,
                                        coin: user.coin + 2
                                    }
                                    fs.writeFileSync(filePath, JSON.stringify(Save));
                                } else {
                                    Message.edit(new Discord.MessageEmbed().setTitle("⚱ 야바위 게임").setDescription(`<@${message.author.id}>, 틀렸습니다! 코인을 잃었어요.` + '```- 1코인```').setColor(BLUE).setImage(Picture));
                                    Save = {
                                        id,
                                        name,
                                        date: user.date,
                                        xp: user.xp,
                                        level: user.level,
                                        coin: user.coin - 1
                                    }
                                    fs.writeFileSync(filePath, JSON.stringify(Save));
                                }
                            }
                        });
                        break;

                    case "주사위":
                        const Player_1 = Math.floor(Math.random() * 6 + 1);
                        const Player_2 = Math.floor(Math.random() * 6 + 1);
                        const Match_1 = Math.floor(Math.random() * 6 + 1);
                        const Match_2 = Math.floor(Math.random() * 6 + 1);
                        var result;
                        if (Player_1 + Player_2 > Match_1 + Match_2) {
                            result = [`🎲 <@${id}>, 이겼습니다! 코인을 세 개 드렸어요.\n현재 코인: **${user.coin + 2}**`, `🎲 <@${id}>, 대단해요, 코인 세 개를 받아가세요.\n현재 코인: **${user.coin + 2}**`];
                            result = result[Math.floor(Math.random() * 2)];
                            Game_End(true);
                        } else if (Player_1 + Player_2 < Match_1 + Match_2) {
                            result = [`🎲 <@${id}>, 졌습니다! 코인을 잃었어요.\n현재 코인: **${user.coin - 1}**`, `🎲 <@${id}>, 아쉽네요, 코인은 가져갈게요.\n현재 코인: **${user.coin - 1}**`];
                            result = result[Math.floor(Math.random() * 2)];
                            Game_End(false);
                        } else {
                            result = [`🎲 <@${id}>, 비겼습니다! 코인은 돌려드릴게요.\n현재 코인: **${user.coin}**`, `🎲 <@${id}>, 비겼네요, 코인 가져가세요.\n현재 코인: **${user.coin}**`];
                            result = result[Math.floor(Math.random() * 2)];
                        };
                        message.channel.send(`🎲 <@${id}> 님이 코인을 걸고 주사위를 던졌습니다.`);
                        setTimeout(() => {
                            message.channel.send(`🎲 <@${id}> 님은 ${Player_1}, 그리고 ${Player_2} 이(가) 나왔습니다.`);
                            setTimeout(() => {
                                message.channel.send(`🎲 <@${id}> 님의 상대는 ${Match_1}, 그리고 ${Match_2} 이(가) 나왔습니다.`);
                                setTimeout(() => {
                                    message.channel.send(result);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                        break;

                    default:
                        return message.channel.send(Embed.setColor(RED).setTitle("오류").setDescription("게임을 찾을 수 없습니다. **!도박**"))
                }
                function Game_End(WIN) {
                    switch (WIN) {
                        case true:
                            Save = {
                                id,
                                name,
                                date: user.date,
                                xp: user.xp,
                                level: user.level,
                                coin: user.coin + 2
                            }
                            fs.writeFileSync(filePath, JSON.stringify(Save));
                            break;

                        case false:
                            Save = {
                                id,
                                name,
                                date: user.date,
                                xp: user.xp,
                                level: user.level,
                                coin: user.coin - 1
                            }
                            fs.writeFileSync(filePath, JSON.stringify(Save));
                            break;
                    }
                }
            } else {
                return message.channel.send(Embed.setTitle("오류").setDescription("코인이 부족합니다.").setColor("RED"));
            }
        } else {
            return message.channel.send(Embed.setTitle("도박 이용 안내").setDescription("```!도박 <게임>```\n**게임 목록**").addFields([{ name: "야바위", value: `구슬이 들어있는 컵에 배팅합니다.` }, { name: "주사위", value: `주사위를 던져 나온 눈의 수에 배팅합니다.` }]).setColor(BLUE));
        }
    }
}
