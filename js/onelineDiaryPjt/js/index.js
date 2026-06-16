// document.addEventListener(이벤트종류, 콜백함수(이벤트가 발생되면 실행(호출)되는 함수));
document.addEventListener('DOMContentLoaded', function () {
    console.log('document ready')

    init()

});

function init() {
    console.log('init() called');

    //set dumy data

    //뷰와 관련된 내용
    initViews();

    //이벤트와 관련된 내용
    addEvents();
}

function addEvents() {
    console.log('addEvents() called');
    
    //menu button 시작
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn clicked');

        showSelectedView(SIGN_UP_VIEW);

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn clicked');

        showSelectedView(SIGN_IN_VIEW);

    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn clicked');
        
        signInedMemberId = '';

        // 메뉴 바꾸기
        setMenuByStatus(SIGN_OUT_STATUS);
        // 뷰 체인지
        showSelectedView(SIGN_OUT_VIEW);

    });
    
    let deleteMenuBtn = document.querySelector('div.menu_wrap a.delete');
    deleteMenuBtn.addEventListener('click', function() {
        console.log('deleteMenuBtn clicked');

        removeMember();
        alert('CONGRATULATION REMOVE');
        
        signInedMemberId == '';

        // 메뉴 바꾸기
        setMenuByStatus(SIGN_OUT_STATUS);
        // 뷰 체인지
        showSelectedView(HOME_VIEW);

    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn clicked');

        if (signInedMemberId === '') {
            alert('please sign in!');
            showSelectedView(SIGN_IN_VIEW);
            return;
        
        }
        showSelectedView(WRITE_VIEW);

    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn clicked');

        if (signInedMemberId === '') {
            alert('please sign in')
            showSelectedView(SIGN_IN_VIEW);
            return;
        }

        listUpDiaries();
        
        showSelectedView(LIST_VIEW);

    });
    //메뉴 버튼 끝

    //회원가입 시작
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    // console.log('signUpBtn: ', signUpBtn);
    signUpBtn.addEventListener('click', function() {
        console.log('signUpBtn clicked');

        let uIdEle = document.querySelector('div.sign_up_wrap input[name="u_id"]');
        let uPwEle = document.querySelector('div.sign_up_wrap input[name="u_pw"]');
        let uMailEle = document.querySelector('div.sign_up_wrap input[name="u_mail"]');

        addMember(uIdEle.value, uPwEle.value, uMailEle.value);
        // console.log('u_id:', u_id)
        // console.log('u_pw:', u_pw)
        // console.log('u_mail:', u_mail)
        alert('SIGNUP SUCCESS')
        removevalue([uIdEle, uPwEle, uMailEle]);
    });
    
    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    // console.log('signUpBtn: ', signUpBtn);
    signInBtn.addEventListener('click', function() {
        console.log('signInBtn clicked');
    
        let uIdEle = document.querySelector('div.sign_in_wrap input[name="u_id"]');
        let uPwEle = document.querySelector('div.sign_in_wrap input[name="u_pw"]');
        
        let isMember = searchMember(uIdEle.value, uPwEle.value);
        if (isMember) {
            signInedMemberId = uIdEle.value;
            alert('SignIn Success');

            //메뉴 체인지
            setMenuByStatus(SIGN_IN_STATUS);

            //뷰 체인지
            showSelectedView(HOME_VIEW);

        } else {
            signInedMemberId = '';
            alert('SIGNIN Fail');
            
            setMenuByStatus(SIGN_IN_STATUS);
        }

        removevalue([uIdEle, uPwEle]);

    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function(){
        console.log('WRITEBTN CLICKED');

       let txt = document.querySelector('div.write_wrap input').value;
    
       addDiary(getCurrentDate() + txt);

       removevalue([document.querySelector('div.write_wrap input')]);

       showSelectedView(LIST_VIEW);

    });  
}

function removevalue(eles){
    console.log('removalue() called');

for(let i = 0; i< eles.length; i++)
    eles[i].value = '';

}

function listUpDiaries() {
    console.log('listUpDiaries() called');

    listWrap.textContent= '';
    
    let diaryArr = searchDiaries();
    // console.log('diaryArr: ', diaryArr);

    for (let i= 0; i < diaryArr.length; i++){
        let tpl = document.querySelector('#list_item');  // list_item 선택
        let clone = document.importNode(tpl.content, true); //이 과정에서 클론이 된다. 위에서 가저온 내용을 복제한다.
        let txt = clone.querySelector('div.txt'); //<div class="txt"></div> 선택
        txt.textContent = diaryArr[i];

        listWrap.prepend(clone); //listWrap에 clone 내용을 넣어라

        /*
        <div class= "txt">
            첫번쨰 일기
        </div>
        */

    }
}
    

 







