module.exports = {
    name: "가챠",
    aliases: ["gotcha", "ㄱㅊ"],
    description: "가챠이다요",
    isForAdmin: false,
    async execute(message, args) {
        const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
        const Discord = require('discord.js');
        const fs = require('fs');
        const { id, name } = { id: message.author.id, name: message.author.username };
        const filePath = `./Data/${id}.json`;
        const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        if (args[0]) {
            if (user.si >= 0) {
                switch (args[0]) {
                    case "1":
                        if(user.si>=1000){
                        let a1, b1, a2, b2, a3, b3, a4, a5;
                        a1= a2 = a3 = a4= a5 = b1= b2 = b3 = 0;
                        let firstgotcha = Math.random()*100
                        let onegotcha = ""
                        //1
                        if(firstgotcha<0.5){
                            a5 += 1
                            onegotcha += "5성 흑염룡\n"}

                        else if(firstgotcha>=0.5 && firstgotcha<2.5){
                            a4 += 1
                            onegotcha += "4성 흑염룡\n"}

                        else if(firstgotcha>=2.5 && firstgotcha<17.5){
                            a3 += 1
                             onegotcha += "3성 흑염룡\n"}
                        
                        else if(firstgotcha>=17.5 && firstgotcha<30.0){
                            a2 += 1
                            onegotcha += "2성 흑염룡\n"}
                        
                        else if(firstgotcha>=30.0 && firstgotcha<60.0){
                            a1 += 1
                            onegotcha += "1성 흑염룡\n"}
                        //나머지다요!    
                        else if(firstgotcha>=60.0 && firstgotcha<75.0){
                            b1 += 3
                            onegotcha += "티켓 3개\n"}
                        else if(firstgotcha>=75.0 && firstgotcha<85.0){
                            b1 += 5
                            onegotcha += "티켓 5개\n"}
                        else if(firstgotcha>=85.0 && firstgotcha<95.0){
                            b2 += 10
                            onegotcha += "십자석 10개\n"}
                        else if(firstgotcha>=95.0 && firstgotcha<100.0){
                            b3 += 10
                            onegotcha += "크리스탈 *10\n"}
                        onegotcha += "를 획득했다요!"
                        Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp + 10, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin + b1*1, 
                            sipza: user.sipza + b2*1, 
                            si: user.si - 1000, 
                            null1: user.null1 + b3*1, 
                            null2:user.null2, 
                            null3: user.null3, 
                            goblack:user.goblack,  
                            black1: user.black1 +a1*1, 
                            black2: user.black2 +a2*1, 
                            black3: user.black3 +a3*1, 
                            black4: user.black4 +a4*1, 
                            black5: user.black5 +a5*1
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const onegotchaembed = new Discord.MessageEmbed().setTitle("가챠").setDescription(`${onegotcha}`).setColor(GREEN);
                        return message.channel.send({embeds: [onegotchaembed]});
                    }
                    else{
                        const Embed = new Discord.MessageEmbed().setTitle("돈 부족").setDescription(`si가 부족하다요!\n현재 si: ${user.si}`).setColor(RED);
                         message.channel.send({embeds: [Embed]});
                    }

                    break;
                    case "5" :
                        if(user.si>=10000){
                            let a1, b1, a2, b2, a3, b3, a4, a5;
                            a1= a2 = a3 = a4= a5 = b1= b2 = b3 = 0;
                            let firstgotcha = Math.random()*100
                            let onegotcha = ""
                            //1
                            if(firstgotcha<0.5){
                                a5 += 1
                                onegotcha += "5성 흑염룡\n"}
    
                            else if(firstgotcha>=0.5 && firstgotcha<2.5){
                                a4 += 1
                                onegotcha += "4성 흑염룡\n"}
    
                            else if(firstgotcha>=2.5 && firstgotcha<17.5){
                                a3 += 1
                                 onegotcha += "3성 흑염룡\n"}
                            
                            else if(firstgotcha>=17.5 && firstgotcha<30.0){
                                a2 += 1
                                onegotcha += "2성 흑염룡\n"}
                            
                            else if(firstgotcha>=30.0 && firstgotcha<60.0){
                                a1 += 1
                                onegotcha += "1성 흑염룡\n"}
                            //나머지다요!    
                            else if(firstgotcha>=60.0 && firstgotcha<75.0){
                                b1 += 3
                                onegotcha += "티켓 3개\n"}
                            else if(firstgotcha>=75.0 && firstgotcha<85.0){
                                b1 += 5
                                onegotcha += "티켓 5개\n"}
                            else if(firstgotcha>=85.0 && firstgotcha<95.0){
                                b2 += 10
                                onegotcha += "십자석 10개\n"}
                            else if(firstgotcha>=95.0 && firstgotcha<100.0){
                                b3 += 10
                                onegotcha += "크리스탈 10개\n"}

                                let secondgotcha = Math.random()*100
                                //1
                                if(secondgotcha<0.5){
                                    a5 += 1
                                    onegotcha += "5성 흑염룡\n"}
        
                                else if(secondgotcha>=0.5 && secondgotcha<2.5){
                                    a4 += 1
                                    onegotcha += "4성 흑염룡\n"}
        
                                else if(secondgotcha>=2.5 && secondgotcha<17.5){
                                    a3 += 1
                                     onegotcha += "3성 흑염룡\n"}
                                
                                else if(secondgotcha>=17.5 && secondgotcha<30.0){
                                    a2 += 1
                                    onegotcha += "2성 흑염룡\n"}
                                
                                else if(secondgotcha>=30.0 && secondgotcha<60.0){
                                    a1 += 1
                                    onegotcha += "1성 흑염룡\n"}
                                //나머지다요!    
                                else if(secondgotcha>=60.0 && secondgotcha<75.0){
                                    b1 += 3
                                    onegotcha += "티켓 3개\n"}
                                else if(secondgotcha>=75.0 && secondgotcha<85.0){
                                    b1 += 5
                                    onegotcha += "티켓 5개\n"}
                                else if(secondgotcha>=85.0 && secondgotcha<95.0){
                                    b2 += 10
                                    onegotcha += "십자석 10개\n"}
                                else if(secondgotcha>=95.0 && secondgotcha<100.0){
                                    b3 += 10
                                    onegotcha += "크리스탈 10개\n"}

                                    let thirdgotcha = Math.random()*100
                                //1
                                if(thirdgotcha<0.5){
                                    a5 += 1
                                    onegotcha += "5성 흑염룡\n"}
        
                                else if(thirdgotcha>=0.5 && thirdgotcha<2.5){
                                    a4 += 1
                                    onegotcha += "4성 흑염룡\n"}
        
                                else if(thirdgotcha>=2.5 && thirdgotcha<17.5){
                                    a3 += 1
                                     onegotcha += "3성 흑염룡\n"}
                                
                                else if(thirdgotcha>=17.5 && thirdgotcha<30.0){
                                    a2 += 1
                                    onegotcha += "2성 흑염룡\n"}
                                
                                else if(thirdgotcha>=30.0 && thirdgotcha<60.0){
                                    a1 += 1
                                    onegotcha += "1성 흑염룡\n"}
                                //나머지다요!    
                                else if(thirdgotcha>=60.0 && thirdgotcha<75.0){
                                    b1 += 3
                                    onegotcha += "티켓 3개\n"}
                                else if(thirdgotcha>=75.0 && thirdgotcha<85.0){
                                    b1 += 5
                                    onegotcha += "티켓 5개\n"}
                                else if(thirdgotcha>=85.0 && thirdgotcha<95.0){
                                    b2 += 10
                                    onegotcha += "십자석 10개\n"}
                                else if(thirdgotcha>=95.0 && thirdgotcha<100.0){
                                    b3 += 10
                                    onegotcha += "크리스탈 10개\n"}

                                    let forthgotcha = Math.random()*100
                                    //1
                                    if(forthgotcha<0.5){
                                        a5 += 1
                                        onegotcha += "5성 흑염룡\n"}
            
                                    else if(forthgotcha>=0.5 && forthgotcha<2.5){
                                        a4 += 1
                                        onegotcha += "4성 흑염룡\n"}
            
                                    else if(forthgotcha>=2.5 && forthgotcha<17.5){
                                        a3 += 1
                                         onegotcha += "3성 흑염룡\n"}
                                    
                                    else if(forthgotcha>=17.5 && forthgotcha<30.0){
                                        a2 += 1
                                        onegotcha += "2성 흑염룡\n"}
                                    
                                    else if(forthgotcha>=30.0 && forthgotcha<60.0){
                                        a1 += 1
                                        onegotcha += "1성 흑염룡\n"}
                                    //나머지다요!    
                                    else if(forthgotcha>=60.0 && forthgotcha<75.0){
                                        b1 += 3
                                        onegotcha += "티켓 3개\n"}
                                    else if(forthgotcha>=75.0 && forthgotcha<85.0){
                                        b1 += 5
                                        onegotcha += "티켓 5개\n"}
                                    else if(forthgotcha>=85.0 && forthgotcha<95.0){
                                        b2 += 10
                                        onegotcha += "십자석 10개\n"}
                                    else if(forthgotcha>=95.0 && forthgotcha<100.0){
                                        b3 += 10
                                        onegotcha += "크리스탈 10개\n"}

                                        let fifthgotcha = Math.random()*100
                                //1
                                if(fifthgotcha<0.5){
                                    a5 += 1
                                    onegotcha += "5성 흑염룡\n"}
        
                                else if(fifthgotcha>=0.5 && fifthgotcha<2.5){
                                    a4 += 1
                                    onegotcha += "4성 흑염룡\n"}
        
                                else if(fifthgotcha>=2.5 && fifthgotcha<17.5){
                                    a3 += 1
                                     onegotcha += "3성 흑염룡\n"}
                                
                                else if(fifthgotcha>=17.5 && fifthgotcha<30.0){
                                    a2 += 1
                                    onegotcha += "2성 흑염룡\n"}
                                
                                else if(fifthgotcha>=30.0 && fifthgotcha<60.0){
                                    a1 += 1
                                    onegotcha += "1성 흑염룡\n"}
                                //나머지다요!    
                                else if(fifthgotcha>=60.0 && fifthgotcha<75.0){
                                    b1 += 3
                                    onegotcha += "티켓 3개\n"}
                                else if(fifthgotcha>=75.0 && fifthgotcha<85.0){
                                    b1 += 5
                                    onegotcha += "티켓 5개\n"}
                                else if(fifthgotcha>=85.0 && fifthgotcha<95.0){
                                    b2 += 10
                                    onegotcha += "십자석 10개\n"}
                                else if(fifthgotcha>=95.0 && fifthgotcha<100.0){
                                    b3 += 10
                                    onegotcha += "크리스탈 10개\n"}

                            onegotcha += "을 획득했다요!"
                            Save = {
                                id, 
                                name, 
                                date: user.date, 
                                xp: user.xp + 10, 
                                level: user.level, 
                                blacklevel:user.blacklevel, 
                                coin: user.coin + b1*1, 
                                sipza: user.sipza + b2*1, 
                                si: user.si - 10000, 
                                null1: user.null1 + b3*1, 
                                null2:user.null2, 
                                null3: user.null3, 
                                goblack:user.goblack,  
                                black1: user.black1 +a1*1, 
                                black2: user.black2 +a2*1, 
                                black3: user.black3 +a3*1, 
                                black4: user.black4 +a4*1, 
                                black5: user.black5 +a5*1
                            }
                            fs.writeFileSync(filePath, JSON.stringify(Save));
                            const onegotchaembed = new Discord.MessageEmbed().setTitle("가챠").setDescription(`${onegotcha}`).setColor(GREEN);
                            return message.channel.send({embeds: [onegotchaembed]});
                        }
                        else{
                            const Embed = new Discord.MessageEmbed().setTitle("돈 부족").setDescription(`si가 부족하다요!\n현재 si: ${user.si}`).setColor(RED);
                             message.channel.send({embeds: [Embed]});
                        }
                        break;
                    default:
                        const Embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription("명령어를 찾을 수 없다요\n**규소 가챠**")
                        return message.channel.send({embeds: [Embed]});
                }
            } else {
                const Embed = new Discord.MessageEmbed().setTitle("오류").setDescription("si가 비정상적이다요!").setColor(RED)
                return message.channel.send({embeds: [Embed]});
            }
        } else {
            const Embed = new Discord.MessageEmbed().setTitle("가챠 이용 안내").setDescription("```규소 가챠 <1회또는 5회>```").setColor(GREEN)
            return message.channel.send({embeds: [Embed]});
        }
    }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})
