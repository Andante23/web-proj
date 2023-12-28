// 모달 추가하기 

// 처음 모달 상태 

/*
 *  close 버튼과  모달 상세 내용은 비활성화 

    클릭하면  활성화
 
    닫기를 누르면  원래대로 
 */

  
const Modalinfo = document.getElementById('profie_info') ;

const Modalbtn = document.getElementById('info_btn') ;

const Modalclose = document.getElementById('modal_close');

Modalinfo.style.display = 'none';



//  처음에 모달 버튼 클릭했을 때
 // 보기 버튼 비활성화 , 모달 내용 , 모달 닫기 활성화

function modalbtnclick() {
   
    if(Modalbtn.onclick)
{
    Modalinfo.style.display = 'block' ;
    Modalbtn.style.display = 'none' ;
    
}

}

// 모달 닫기 버튼 클릭했을 때

//  모달 내용 비활성화 



function modalbtnclose() {

    if(Modalclose.onclick)
    {
        Modalinfo.style.display = 'none';
        Modalbtn.style.display = 'block' ;
     
    
    }

}



let lat = 37.3838233827022;
let lon = 126.85885639512794;
let API_key = '3c45503ba79203c075a5078319c09cec';
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;


fetch(apiUrl)
.then(response => {

if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}
return response.json();

})
.then(data => {
console.log('날씨 정보:', data);

 // 자바스크립트 라이브러리인 jquery를 이용  위치 / 날씨 부분에 붙여넣기 
 $('#weathn').append(data.name );    // 위치
 $('#weathm').append(data.weather[0].main);

 let iconcode = data.weather[0].icon ;
 let iconUrl =       "http://openweathermap.org/img/w/" + iconcode + ".png";   

 $('#wicon').attr('src' , iconUrl);
 





})
.catch(error => {
console.error('오류:', error);
});

