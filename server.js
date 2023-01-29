const express = require('express')
const server = express();
server.all ('/',(req,res)=>{
  res.send('봇의 상태: \n온라인이다요!')
});
function keepAlive(){
  server.listen(3000,()=>{console.log("현재 서버는 온라인이다요!")})
}
module.exports = keepAlive