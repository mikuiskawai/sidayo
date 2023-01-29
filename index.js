const Discord = require('discord.js');
const fs = require('fs');
const { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const { token, prefix, blacklisted } = require('./config.json');
const ls = require('./level.json');
const keepAlive = require("./server.js");
const { Interaction } = require('chart.js');
const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" };

// 커맨드 핸들링
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// 디스코드 함수
client.on('ready', async () => {
    console.log(`Logged In As ${client.user.tag}`);
    client.user.setActivity('대규모 업데이트 준비',{type:'PLAYING'})
});

client.on('messageCreate', async (message) => {

    if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;

    if(message.content.includes('가입')){
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const id = message.author.id;
        const name = message.author.username;
        const filePath = `./Data/${id}.json`;
        const embed = new Discord.MessageEmbed().setTitle('오류').setColor(RED).setDescription('이미 가입되어 있다요!')
        const Embed = new Discord.MessageEmbed().setTitle("가입 성공").setDescription('성공적으로 가입되었다요!').setColor(GREEN)
        fs.existsSync(filePath) ? message.channel.send({embeds : [embed]}) : null
        !fs.existsSync(filePath) ? message.channel.send({embeds : [Embed]}) : null, fs.writeFileSync(filePath, JSON.stringify({ id, name, date: null, xp: 0, level: 1, blacklevel:1, coin: 0, sipza: 0, si: 1000, null1: 0, null2: 0, null3: 0, goblack:1, black1: 0, black2: 0, black3: 0, black4: 0, black5: 0}));
    }else {
    if(message.content.includes('핑')){
        const Embed = new Discord.MessageEmbed().setTitle("규소다요의 핑").setDescription(`${client.ws.ping}ms`).setColor(GREEN)
        message.channel.send({embeds : [Embed]})
    }
    // XP / 레벨 업 시스템
    try{
    const id = message.author.id;
    const name = message.author.username;
    const filePath = `./Data/${id}.json`;
    const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    if (user.xp >= ls.level[user.level + 1]) {
        fs.writeFileSync(filePath, JSON.stringify({ id, name, date: user.date, xp: user.xp, level: user.level+1, blacklevel:user.blacklevel, coin: user.coin, sipza: user.sipza + 8, si: user.si + 1000, null1: user.null1, null2:user.null2, null3: user.null3, goblack:user.goblack, black1: user.black1, black2: user.black2, black3: user.black3, black4: user.black4, black5: user.black5}));
        message.channel.send(`축하한다요!! ${user.level}레벨에서 **${user.level + 1}레벨**로 올랐다요!.\n보상으로 십자석 8개와 1000si를 획득했다요!`);
    } else {
        fs.writeFileSync(filePath, JSON.stringify({ id, name, date: user.date, xp: user.xp, level: user.level, blacklevel:user.blacklevel, coin: user.coin, sipza: user.sipza, si: user.si, null1: user.null1, null2:user.null2, null3: user.null3, goblack:user.goblack,  black1: user.black1, black2: user.black2, black3: user.black3, black4: user.black4, black5: user.black5}));
    }
    }catch(error){
       return message.channel.send('플레이어님은 아직 가입하지 않은 플레이어이다요!\n`규소 가입`을 입력해 가입하다요!')
    }

    //흑염룡, 백빙룡, 청양룡, 적토룡 => 흑염룡


    // 중2병 감지 시스템
    var foundInText = false;
    for (var i in blacklisted) {
        if (message.content.includes(blacklisted[i])) foundInText = true;
    }
    if (foundInText) {
        const id = message.author.id;
        const name = message.author.username;
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        Save = {
            id, 
            name, 
            date: user.date, 
            xp: user.xp + 5, 
            level: user.level, 
            blacklevel:user.blacklevel, 
            coin: user.coin, 
            sipza: user.sipza, 
            si: user.si + 10, 
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

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift();
    const command = client.commands.get(commandName);

    if (command) {
        try {
            command.execute(message, args, client);
        } catch (error) {
            console.log(error);
        }
    }
}
});
keepAlive()
client.login("ODg1MDQ1NjAxMTk1MTM5MTEz.GCAV8K.2-pPSZh_OupE0AiWdEgf9tqI-J1HLXhUWzu8Ns");
