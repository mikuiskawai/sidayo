module.exports = {
    name: "중2병대사제작",
    aliases: ["ㅈㄷㅈ", "ㅈ2ㅂ"],
    description: "중2병대사",
    isForAdmin: false,
    async execute(message) {
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        let sent = "";
        const random1 = Math.random() * 10;
        const random2 = Math.random() * 10;
        const random3 = Math.random() * 10;
        const random4 = Math.random() * 10;
        const random5 = Math.random() * 10;
        const random6 = Math.random() * 10;
        const random7 = Math.random() * 10;
        const random8 = Math.random() * 10;

        if(random1 >=9.5){
            sent += "연의 "
        }
        else if(random1 >=0 && random1 < 0.5){
            sent += "서의 "
        }       
        else if(random1 >=0.5 && random1 < 1){
            sent += "죽음의 "
        }
        else if(random1 >=1 && random1 < 1.5){
            sent += "다크의 "
        }
        else if(random1 >=1.5 && random1 < 2){
            sent += "연옥의 "
        }
        else if(random1 >=2 && random1 < 2.5){
            sent += "공포의 "
        }
        else if(random1 >=2.5 && random1 < 3){
            sent += "윤회의 "
        }
        else if(random1 >=3 && random1 < 3.5){
            sent += "심판의 "
        }
        else if(random1 >=3.5 && random1 < 4){
            sent += "파괴의 "
        }
        else if(random1 >=4 && random1 < 4.5){
            sent += "규소다요의 "
        }
        else if(random1 >=4.5 && random1 < 5){
            sent += "여의 "
        }       
        else if(random1 >=5 && random1 < 5.5){
            sent += "인간들의 "
        }
        else if(random1 >=5.5 && random1 < 6){
            sent += "흑염룡의 "
        }
        else if(random1 >=6 && random1 < 6.5){
            sent += "심연의 "
        }
        else if(random1 >=6.5 && random1 < 7){
            sent += "종말의 "
        }
        else if(random1 >=7 && random1 < 7.5){
            sent += "정복의 "
        }
        else if(random1 >=7.5 && random1 < 8){
            sent += "생명의 "
        }
        else if(random1 >=8 && random1 < 8.5){
            sent += "진리의 "
        }
        else if(random1 >=8.5 && random1 < 9){
            sent += "일격의 "
        }
        else if(random1 >=9 && random1 < 9.5){
            sent += "하늘의 "
        }

        if(random2 >=9.5){
            sent += "흔들리는 "
        }
        else if(random2 >=0 && random2 < 0.5){
            sent += "꺼져가는 "
        }       
        else if(random2 >=0.5 && random2 < 1){
            sent += "흩날리는 "
        }
        else if(random2 >=1 && random2 < 1.5){
            sent += "불타는 "
        }
        else if(random2 >=1.5 && random2 < 2){
            sent += "희생하는 "
        }
        else if(random2 >=2 && random2 < 2.5){
            sent += "법칙이 되어가는 "
        }
        else if(random2 >=2.5 && random2 < 3){
            sent += "피워지는 "
        }
        else if(random2 >=3 && random2 < 3.5){
            sent += "대가로 바쳐지는 "
        }
        else if(random2 >=3.5 && random2 < 4){
            sent += "후회하는 "
        }
        else if(random2 >=4 && random2 < 4.5){
            sent += "거짓이 되어가는 "
        }
        else if(random2 >=4.5 && random2 < 5){
            sent += "환상이 되어가는 "
        }       
        else if(random2 >=5 && random2 < 5.5){
            sent += "진실이 되어가는 "
        }
        else if(random2 >=5.5 && random2 < 6){
            sent += "지배하는 "
        }
        else if(random2 >=6 && random2 < 6.5){
            sent += "끝이 보이는 "
        }
        else if(random2 >=6.5 && random2 < 7){
            sent += "조절이 되어가는 "
        }
        else if(random2 >=7 && random2 < 7.5){
            sent += "어두워지는 "
        }
        else if(random2 >=7.5 && random2 < 8){
            sent += "각성이 되어가는 "
        }
        else if(random2 >=8 && random2 < 8.5){
            sent += "끝이 다가오는 "
        }
        else if(random2 >=8.5 && random2 < 9){
            sent += "운명이 되어가는 "
        }
        else if(random2 >=9 && random2 < 9.5){
            sent += "이뤄가는 "
        }

        if(random3 >=9.5){
            sent += "업화여"
        }
        else if(random3 >=0 && random3 < 0.5){
            sent += "불가항력이여"
        }       
        else if(random3 >=0.5 && random3 < 1){
            sent += "믿음이여"
        }
        else if(random3 >=1 && random3 < 1.5){
            sent += "다크여"
        }
        else if(random3 >=1.5 && random3 < 2){
            sent += "빛이여"
        }
        else if(random3 >=2 && random3 < 2.5){
            sent += "신이여"
        }
        else if(random3 >=2.5 && random3 < 3){
            sent += "절망이여"
        }
        else if(random3 >=3 && random3 < 3.5){
            sent += "존재여"
        }
        else if(random3 >=3.5 && random3 < 4){
            sent += "예술이여"
        }
        else if(random3 >=4 && random3 < 4.5){
            sent += "폭팔이여"
        }
        else if(random3 >=4.5 && random3 < 5){
            sent += "찬사여"
        }       
        else if(random3 >=5 && random3 < 5.5){
            sent += "두려움이여"
        }
        else if(random3 >=5.5 && random3 < 6){
            sent += "절규여"
        }
        else if(random3 >=6 && random3 < 6.5){
            sent += "의미여"
        }
        else if(random3 >=6.5 && random3 < 7){
            sent += "검이여"
        }
        else if(random3 >=7 && random3 < 7.5){
            sent += "소리여"
        }
        else if(random3 >=7.5 && random3 < 8){
            sent += "심연이여"
        }
        else if(random3 >=8 && random3 < 8.5){
            sent += "법칙이여"
        }
        else if(random3 >=8.5 && random3 < 9){
            sent += "삶이여"
        }
        else if(random3 >=9 && random3 < 9.5){
            sent += "대등함이여"
        }

        if(random4 >= 5){
            sent += "!"
        }
        else if(random4 >=0 && random4 < 5){
            sent += "..."
        }     

        if(random5 >=9.5){
            sent += " 죽음의 바다에서 "
        }
        else if(random5 >=0 && random5 < 0.5){
            sent += " 지옥에서 "
        }       
        else if(random5 >=0.5 && random5 < 1){
            sent += " 이세계에서 "
        }
        else if(random5 >=1 && random5 < 1.5){
            sent += " 절망의 끝에서 "
        }
        else if(random5 >=1.5 && random5 < 2){
            sent += " 전장의 한복판에서 "
        }
        else if(random5 >=2 && random5 < 2.5){
            sent += " 수많은 세계에서 "
        }
        else if(random5 >=2.5 && random5 < 3){
            sent += " 나의 환상속에서 "
        }
        else if(random5 >=3 && random5 < 3.5){
            sent += " 신의 심판 속에서 "
        }
        else if(random5 >=3.5 && random5 < 4){
            sent += " 끝이 보이지 않는 심연속에서 "
        }
        else if(random5 >=4 && random5 < 4.5){
            sent += " 세계의 끝에서 "
        }
        else if(random5 >=4.5 && random5 < 5){
            sent += " 전설이 되어가는 과정속에서 "
        }       
        else if(random5 >=5 && random5 < 5.5){
            sent += " 죽음의데스에서 "
        }
        else if(random5 >=5.5 && random5 < 6){
            sent += " 끝없이 펼쳐치는 대지에서 "
        }
        else if(random5 >=6 && random5 < 6.5){
            sent += " 내려쬐는 선샤인속에서 "
        }
        else if(random5 >=6.5 && random5 < 7){
            sent += " 종말이 얼마 남지 않은 시간속에서 "
        }
        else if(random5 >=7 && random5 < 7.5){
            sent += " 끝이 보이지 않는 어둠에서 "
        }
        else if(random5 >=7.5 && random5 < 8){
            sent += " 아무도 보이지 않는 고독속에서 "
        }
        else if(random5 >=8 && random5 < 8.5){
            sent += " 죽을듯한 고통속에서 "
        }
        else if(random5 >=8.5 && random5 < 9){
            sent += " 진홍의 암흑속에서 "
        }
        else if(random5 >=9 && random5 < 9.5){
            sent += " 윤회의 세계속에서 "
        }

        if(random6 >=9.5){
            sent += "끝을 바라보며 "
        }
        else if(random6 >=0 && random6 < 0.5){
            sent += "고통속에 분해하며 "
        }       
        else if(random6 >=0.5 && random6 < 1){
            sent += "고통속에 아파하며 "
        }
        else if(random6 >=1 && random6 < 1.5){
            sent += "끝을 바라보며 "
        }
        else if(random6 >=1.5 && random6 < 2){
            sent += "울부짖으며 "
        }
        else if(random6 >=2 && random6 < 2.5){
            sent += "세상을 바라보며 "
        }
        else if(random6 >=2.5 && random6 < 3){
            sent += "종말을 예상하며 "
        }
        else if(random6 >=3 && random6 < 3.5){
            sent += "존재에 부정하며 "
        }
        else if(random6 >=3.5 && random6 < 4){
            sent += "모든것을 포기하며 "
        }
        else if(random6 >=4 && random6 < 4.5){
            sent += "천천히 잠들며 "
        }
        else if(random6 >=4.5 && random6 < 5){
            sent += "진정한 힘을 느끼며 "
        }       
        else if(random6 >=5 && random6 < 5.5){
            sent += "모든것을 용서하며 "
        }
        else if(random6 >=5.5 && random6 < 6){
            sent += "방아쇠를 당기며 "
        }
        else if(random6 >=6 && random6 < 6.5){
            sent += "각성하며 "
        }
        else if(random6 >=6.5 && random6 < 7){
            sent += "피를 쏟으며 "
        }
        else if(random6 >=7 && random6 < 7.5){
            sent += "세계를 파괴하며 "
        }
        else if(random6 >=7.5 && random6 < 8){
            sent += "자신의 운명을 결정하며 "
        }
        else if(random6 >=8 && random6 < 8.5){
            sent += "이길 수 없는 존재에 저항하며 "
        }
        else if(random6 >=8.5 && random6 < 9){
            sent += "끝을 향해 다가가며 "
        }
        else if(random6 >=9 && random6 < 9.5){
            sent += "진리를 재정의하며 "
        }

        if(random7 >=9.5){
            sent += "분해하라"
        }
        else if(random7 >=0 && random7 < 0.5){
            sent += "자결하라"
        }       
        else if(random7 >=0.5 && random7 < 1){
            sent += "바라보라"
        }
        else if(random7 >=1 && random7 < 1.5){
            sent += "슬퍼하라"
        }
        else if(random7 >=1.5 && random7 < 2){
            sent += "생각하라"
        }
        else if(random7 >=2 && random7 < 2.5){
            sent += "후회하라"
        }
        else if(random7 >=2.5 && random7 < 3){
            sent += "소리 없이 울어라"
        }
        else if(random7 >=3 && random7 < 3.5){
            sent += "기도하라"
        }
        else if(random7 >=3.5 && random7 < 4){
            sent += "함구하라"
        }
        else if(random7 >=4 && random7 < 4.5){
            sent += "말살하라"
        }
        else if(random7 >=4.5 && random7 < 5){
            sent += "변하라"
        }       
        else if(random7 >=5 && random7 < 5.5){
            sent += "없어져라"
        }
        else if(random7 >=5.5 && random7 < 6){
            sent += "비추라"
        }
        else if(random7 >=6 && random7 < 6.5){
            sent += "믿어라"
        }
        else if(random7 >=6.5 && random7 < 7){
            sent += "피워라"
        }
        else if(random7 >=7 && random7 < 7.5){
            sent += "소환시켜라"
        }
        else if(random7 >=7.5 && random7 < 8){
            sent += "맹세하라"
        }
        else if(random7 >=8 && random7 < 8.5){
            sent += "나타나라"
        }
        else if(random7 >=8.5 && random7 < 9){
            sent += "폭팔하라"
        }
        else if(random7 >=9 && random7 < 9.5){
            sent += "소실되어라"
        }

        if(random8 >=5){
            sent += "........."
        }
        else if(random8 >=0 && random8 < 5){
            sent += "!!"
        }       
                                  
        const embed = new Discord.MessageEmbed().setTitle('제작된 중2병대사').setDescription(`${sent}`).setColor(GREEN)
        message.channel.send({embeds: [embed]})
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})