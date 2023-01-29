module.exports = {
  name: "펄서",
  aliases: ["흑염룡의펄서", "ㅇㄵ"],
  description: "펄서상점이다요.",
  isForAdmin: false,
  async execute(message, args) {
      const { RED, GREEN, BLUE } = { RED: "#ff5454", GREEN: "#54ff62", BLUE: "#38e1ff" }
      const Discord = require('discord.js');
      const fs = require('fs');
      const Embed = new Discord.MessageEmbed();
      const { id, name } = { id: message.author.id, name: message.author.username };
      const filePath = `./Data/${id}.json`;
      const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      const sfilepath = `./commands/주식2.json`
      const stock = JSON.parse(fs.readFileSync(sfilepath, "utf-8"));
      function isInt(num) {
        return num % 1 === 0;
      }
      if (args[0]) {
          if (user.si >= 0) {
              switch (args[0]) {
                  case "구매":
                      if(!isInt(args[1])){
                        const embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription(`구매 가능한 숫자가 아니다요!`)
                        message.channel.send({embeds: [embed]})
                      }
                      else if(args[1]>0){
                        let howmany = args[1]*stock.won
                        if(howmany<=user.si){
                          Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp + 1, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si - howmany, 
                            null1: user.null1, 
                            null2:user.null2 + args[1]*1, 
                            null3: user.null3, 
                            goblack:user.goblack,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        const embed = new Discord.MessageEmbed().setTitle("구매 완료").setDescription(`현재 펄서 개수: ${user.null2 + args[1]*1}`).setColor(GREEN)
                        message.channel.send({embeds: [embed]})
                        
                        if(stock.won + Math.floor(args[1]*0.1) > 1200){
                          Save = {
                            won: 1100,
                            sname: stock.sname
                            }
                          fs.writeFileSync(sfilepath, JSON.stringify(Save));
                        }
                        else if(stock.won + Math.floor(args[1]*0.1) < 50){
                          Save = {
                            won: 55,
                            sname: stock.sname
                            }
                          fs.writeFileSync(sfilepath, JSON.stringify(Save));
                        }
                        else{
                          Save = {
                            won: stock.won + Math.floor(args[1]*0.1),
                            sname: stock.sname
                            }
                          fs.writeFileSync(sfilepath, JSON.stringify(Save));
                        }

                      }
                      else{
                        const embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription(`si가 부족하다요! \n현재 si:${user.si}`)
                        message.channel.send({embeds: [embed]})
                          
                      }
                    }
                    else{
                      const embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription(`규소 펄서 구매 <구매할 펄서의 개수>와 같이 적어야 한다요!`)
                      message.channel.send({embeds: [embed]})
                    }
                    break;
                  case "판매":
                      if(!isInt(args[1])){
                        const embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription(`판매 가능한 숫자가 아니다요!`)
                        message.channel.send({embeds: [embed]})
                      }
                      else if(args[1]>0){
                        let howmany = args[1]*stock.won;
                        if(user.null2>=args[1]){
                          Save = {
                            id, 
                            name, 
                            date: user.date, 
                            xp: user.xp + 1, 
                            level: user.level, 
                            blacklevel:user.blacklevel, 
                            coin: user.coin, 
                            sipza: user.sipza, 
                            si: user.si + howmany, 
                            null1: user.null1, 
                            null2:user.null2- args[1]*1, 
                            null3: user.null3, 
                            goblack:user.goblack,  
                            black1: user.black1, 
                            black2: user.black2, 
                            black3: user.black3, 
                            black4: user.black4, 
                            black5: user.black5
                        }
                        fs.writeFileSync(filePath, JSON.stringify(Save));
                        if(stock.won - Math.floor(args[1]*0.1) > 1200){
                          Save = {
                            won: 1100,
                            sname: stock.sname
                            }
                          fs.writeFileSync(sfilepath, JSON.stringify(Save));
                        }
                        else if(stock.won - Math.floor(args[1]*0.1) < 50){
                          Save = {
                            won: 55,
                            sname: stock.sname
                            }
                          fs.writeFileSync(sfilepath, JSON.stringify(Save));
                        }
                        else{
                          Save = {
                            won: stock.won - Math.floor(args[1]*0.1),
                            sname: stock.sname
                            }
                          fs.writeFileSync(sfilepath, JSON.stringify(Save));
                        }
                          const embed = new Discord.MessageEmbed().setColor(GREEN).setTitle("판매 완료").setDescription(`현재 펄서 개수: ${user.null2 - args[1]*1}`)
                          message.channel.send({embeds: [embed]})
                        }
                        else{
                          const embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription(`펄서의 개수가 부족하다요! \n현재 펄서 개수:${user.null2}`)
                          return message.channel.send({embeds: [embed]})
                        }
                      }
                      else{
                        const embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription("규소 펄서 판매 <판매할 펄서의 개수>와 같이 적어야 한다요!")
                        return message.channel.send({embeds: [embed]})
                      }
                      break;
                  default:
                    const embed = new Discord.MessageEmbed().setColor(RED).setTitle("오류").setDescription("명령어를 찾을 수 없다요. **규소 펄서**")
                    message.channel.send({embeds: [embed]})
                      break;
              }

          } else {
            const embed = new Discord.MessageEmbed().setTitle("오류").setDescription("si가 부족하다요").setColor(RED)
              return message.channel.send({embeds: [embed]})
          }
      } else {
        const embed = new Discord.MessageEmbed().setTitle("펄서").setDescription("```규소 펄서 <명령어>```\n**명령어 목록**").addFields([{ name: "구매", value: `펄서를 구매한다요!` },{ name: "판매", value: `펄서를 판매한다요!`}]).setColor(GREEN)
        return message.channel.send({embeds: [embed]})
      }
  }
}
//const embed = new Discord.MessageEmbed()
// message.channel.send({embeds: [embed]})
