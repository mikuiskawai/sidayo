module.exports = {
    name: "도움말",
    aliases: ["help", "명령어"],
    description: "도움말을 보여 준다요!",
    isForAdmin: false,
    async execute(message) {
      const Discord = require('discord.js');
      const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#54ff62')
    .setTitle('도움말')
    .setDescription('규소다요는 중2병 컨셉의 디스코드 봇이다요!\n다양한 기능을 통해 중2병을 느껴보다요!')
    .addFields(
      { name: '규소 가챠', value: 'si로 흑염룡과 아이템을 뽑을 수 있다요!'},
      { name: '규소 각성', value: '흑염룡의 레벨을 올릴 수 있다요!'},
      { name: '규소 교체', value: '흑염룡의 편성을 바꿀 수 있다요!'},
      { name: '규소 던전', value: '아직 베타 테스트중인 기능이다요!'},
      { name: '규소 유저정보 <유저 맨션>', value: '유저의 스탯을 확인할 수 있다요!'},
      { name: '규소 업데이트', value: '규소다요의 업데이트 현황을 알 수 있다요!'},
      { name: '규소 중2병대사', value: '중2병 규소의 대사를 느낄수 있다요!'},
      { name: '규소 중2병만들기', value: '랜덤 중2병 대사를 만들 수 있다요!'},
      { name: '규소 차트', value: '크리스탈의 가격 현황을 볼 수 있다요!'},
      { name: '규소 대기실', value: '가지고 있는 흑염룡을 볼 수 있다요!'},
      { name: '규소 출석', value: '출석체크를 하고 약간의 보상을 받을 수 있다요!'},
      { name: '규소 합성', value: '낮은 레벨의 흑염룡을 높은 레벨의 흑염룡으로 바꿀 수 있다요!'},
      { name: '규소 ㅎㅇ', value: '인사를 할 수 있다요!'},
      { name: '규소 크리스탈', value: '크리스탈 주식을 거래할 수 있다요!'},
      { name: '규소 펄서', value: '펄서 주식을 거래할 수 있다요!'},
      { name: '규소 십자석', value: '십자석 주식을 거래할 수 있다요!'},
      { name: '\n', value: '여러 기능을 활용해 최고의 던전을 공략하고\n다른 플레이어들과 싸워보다요!'},
    )
    message.channel.send({embeds: [exampleEmbed]})
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})