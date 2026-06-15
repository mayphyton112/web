document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY')
    init();

});
/*웹문서가 랜더링이 다 되었을때 올라오는것이 DOMContentLoaded*/
/* addEventListener = DOMContentLoaded라는 event를 감지할 수 있는 무언가를 붙인다.
DOMContentLoaded라는 이벤트가 실행되면 실행된다고 해서 callback함수*/

function init() {
    console.log('init() CALLED');
    
    initviews();
    addEvents();
}

function addEvents() {
    console.log('addEvents() called');

    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function(){
        console.log('signUpMenuBtn Clicked');

        showSelctionedView(SIGN_UP_VIEW);
    });
    
    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signInMenuBtn.addEventListener('click', function(){
        console.log('signInMenuBtn Clicked');

        showSelctionedView(SIGN_IN_VIEW);
    });
    
    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function(){
        console.log('signOutMenuBtn Clicked');

        showSelctionedView(SIGN_OUT_VIEW);

    });
    
    let WriteMenuBtn = document.querySelector('div.menu_wrap a.write');
    WriteMenuBtn.addEventListener('click', function(){
        console.log('WriteMenuBtn Clicked');

        showSelctionedView(DIARY_WRITE_VIEW);
    });
    
    
    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function(){
        console.log('ListMenuBtn Clicked');

        showSelctionedView(DIARY_LIST_VIEW);
    });

    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function() {
        console.log('signUpBtn CALLED');

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;

        addMember(u_id, u_pw, u_mail);

        alert('SIGN UP SUCCESS');

        document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_mail"]').value = '';

    });
}

