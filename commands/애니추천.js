const Discord = require('discord.js');

module.exports = {
    name: "애니추천",
    aliases: ["animerecommend", "ㅇㄴㅊㅊ"],
    description: "중2병애니메이션 추천이다요!",
    isForAdmin: false,
    async execute(message) {
        const ani = Math.random() * 24;

        if(ani >= 20){
			const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('사카모토입니다만?')
	.addFields(
		{ name: '중2병력', value: '★★★★☆'},
	)
	.setImage('https://images-ext-2.discordapp.net/external/mSwvIuAmkvN6r0xybckB_ibOmH_vioj-NtHQPgRc-8I/https/media.kitsu.io/anime/poster_images/11751/medium.jpg')
	.setTimestamp()

	message.channel.send({embeds: [exampleEmbed]})
        }


        else if(ani >=0 && ani < 4){
			const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('중병격발 보이')
	.addFields(
		{ name: '중2병력', value: '★★★★☆'},
	)
	.setImage('https://images-ext-1.discordapp.net/external/x2S67qQy0BBSRjd7BFPe4B9HCeUBWgm1W4DrUo1K_qk/https/media.kitsu.io/anime/poster_images/42120/medium.jpg')
	.setTimestamp()

	message.channel.send({embeds: [exampleEmbed]})
        }   


        else if(ani >=4 && ani < 8){
			const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('내 옆에 암흑파괴신이 있습니다.')
	.addFields(
		{ name: '중2병력', value: '★★★☆☆'},
	)
	.setImage('https://images-ext-2.discordapp.net/external/kv02Sbcx5sD1Wn6b8rf4POxzHbLra8eFSIiBz6VgcSc/https/media.kitsu.io/anime/poster_images/42100/medium.jpg')
	.setTimestamp()

	message.channel.send({embeds: [exampleEmbed]})
        }      


        else if(ani >=8 && ani < 12){
			const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('중2병이라도 사랑이 하고싶어!')
	.addFields(
		{ name: '중2병력', value: '★★★★☆'},
	)
	.setImage('https://media.kitsu.io/anime/poster_images/7160/medium.jpg')
	.setTimestamp()

	message.channel.send({embeds: [exampleEmbed]})
        }


		else if(ani >=12 && ani < 16){
			const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('마기아 레코드 마법소녀 마도카 마기카')
	.addFields(
		{ name: '중2병력', value: '★★★★☆'},
	)
	.setImage('https://images-ext-1.discordapp.net/external/hMPzFQJCTpHpQi3zWkRWcrPTbnpLGJ9nUsP9CQe3HF4/https/media.kitsu.io/anime/poster_images/42016/medium.jpg')
	.setTimestamp()

	message.channel.send({embeds: [exampleEmbed]})
        }


		else if(ani >=16 && ani < 20){
			const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('사이키 쿠스오의 재난')
	.addFields(
		{ name: '중2병력', value: '★★☆☆☆'},
	)
	.setImage('https://images-ext-1.discordapp.net/external/nBB0LeqRbwfG4ePhPpsceqnVQOXh6oPLO-2Zhp3vXMw/https/media.kitsu.io/anime/poster_images/13477/medium.jpg')
	.setTimestamp()

	message.channel.send({embeds: [exampleEmbed]})
        }
	}
}
