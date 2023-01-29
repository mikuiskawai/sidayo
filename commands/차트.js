const fs = require("fs")

module.exports = {
    name: "차트",
    aliases: ["chart", "ㅊㅌ"],
    description: "주식 차트",
    isForAdmin: false,
    async execute(message, args) {
    const Discord = require('discord.js');
    const fs = require('fs');
    const Embed = new Discord.MessageEmbed();
    const { id, name } = { id: message.author.id, name: message.author.username };
    const QuickChart = require('quickchart-js');
    const td = new Date();
    const date = "" + td.getFullYear() + td.getMonth() + td.getDate();
    const s1filePath = `./commands/주식.json`;
    const stock1 = JSON.parse(fs.readFileSync(s1filePath, "utf-8"));

    const chart = new QuickChart();
        chart.setConfig({
        type: 'line',
        data: { labels: [`10`,`9`,`8`,`7`,`6`,`5`,`4`,`3`,`2`,`1`,], datasets: [{ label: '크리스탈 가격(단위:si)', data: [`${stock1.ones}`,`${stock1.twos}`,`${stock1.threes}`,`${stock1.fours}`,`${stock1.fives}`,`${stock1.sixs}`,`${stock1.sevens}`,`${stock1.eights}`,`${stock1.nines}`,`${stock1.tens}`, ] }] },
        }).setBackgroundColor('#000000');
        const url = await chart.getShortUrl();

    message.channel.send(`${url}`)
    }
    
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})