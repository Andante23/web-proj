const express = require('express')
const path = require('path')
const app = express()
const port = 3000



//  path.join(__dirname , 'public') static (script , css image 등 변하지 않는 파일들)의 위치 반환
app.use(express.static(path.join(__dirname, 'public')));


// 사용자가 단테's 홈페이지를 원한다면 (요청)  
app.get('/', (req, res) => {

   try{
    // 다음과 같이  index.html ( 단테's 홈페이지의 메인페이지 ) 문서 파일을  보낸다(응답)
    res.sendFile('index.html' , {root: path.join(__dirname,'public')});
   } catch(error){  // index.html를 응답받기를 실패한다면

        // 500은 내부서버오류 , 즉 서버에 이상이 생겨서 요청이 받아들여지지 않는다.
        res.status(500).send('Internal Server Error. Please contact our support at  andante1104@naver.com .')
   }


  })


// 3000번 포트에서  express 서버가 시작되는 곳이다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})