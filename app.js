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



// 햄버거 바에 가져다 대면  =>  메인메뉴가 나와요 ( 미완 )




