const express = require('express')
const path = require('path')
const app = express()
const port = 3000



//  path.join(__dirname , 'public') static (script , css image 등 변하지 않는 파일들)의 위치 반환
app.use(express.static(path.join(__dirname, 'public')));


// 사용자가 메인 홈페이지를 원한다면 (요청)  
app.get('/', (req, res) => {

   
    // 다음과 같이  index.html ( 단테's 홈페이지의 메인페이지 ) 문서 파일을  보낸다(응답)
    res.sendFile('index.html' , {root: path.join(__dirname,'public')});
   
   

  })





// posting 요청하면




// 3000번 포트에서  express 서버가 시작되는 곳이다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


