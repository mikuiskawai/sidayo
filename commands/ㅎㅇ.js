const fs = require("fs")

module.exports = {
    name: "ㅎㅇ",
    aliases: ["hi", "하이"],
    description: "ㅎㅇ다요!",
    isForAdmin: false,
    async execute(message, args) {
      const fs = require('fs');
      const { Client, Intents, DiscordAPIError } = require('discord.js');
      const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
      const { id, name } = { id: message.author.id, name: message.author.username };
      const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
      const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed().setDescription(`<@${message.author.id}>,ㅎㅇ다요!`).setColor(GREEN)
    message.channel.send({embeds: [embed]})
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})
