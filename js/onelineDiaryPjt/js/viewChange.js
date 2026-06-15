const SIGN_UP_VIEW = 1;
const SIGN_IN_VIEW = 2;
const SIGN_OUT_VIEW = 3;
const DIARY_WRITE_VIEW = 4;
const DIARY_LIST_VIEW = 5;


signUpWrap = '';
signInWrap = ''; /*전역변수*/
writeWrap = '';
listWrap = '';


function initviews(){
    console.log('initviews() CALLED');

    signUpWrap = document.querySelector('div.sign_up_wrap'); /*쿼리 선택자, css의 선택자를 쓴 거에따라 선택한다.*/
    signInWrap = document.querySelector('div.sign_in_wrap'); /*쿼리 선택자*/
    writeWrap = document.querySelector('div.write_wrap'); /*쿼리 선택자*/ //화면에 대한 것을 다 선택해서 위의 변수로 할당한다.
    listWrap = document.querySelector('div.list_wrap'); /*쿼리 선택자*/
    // console.log('signUpWrap: ', signUpWrap);
                                                                     
}

// 사용자가 원하는 뷰를 보이게 한다.
function showSelctionedView(viewNo) {
    console.log('showSelectedView() CALLED');

    switch(viewNo) {
        case SIGN_UP_VIEW:
            //회원 가입 화면 보이게 하자
            signUpWrap.style.display = 'block';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;
    

            
        case SIGN_IN_VIEW:
            //로그인 화면 보이게 하자
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;
    
    
   
        case SIGN_OUT_VIEW:

            break;


    
        case DIARY_WRITE_VIEW:
            //일기 작성 화면 보이게 하자
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'block';
            listWrap.style.display = 'none';
            break;
    
    
   
        case DIARY_LIST_VIEW:
            //일기 리스트 화면 보이게 하자
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'block';
            break;
    }
}