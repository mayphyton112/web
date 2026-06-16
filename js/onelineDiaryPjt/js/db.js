const memberDB = new Map();
const diaryDB = new Map();

function addMember(id, pw, mail){
    console.log('addMember() called');

    memberDB.set(id, {
            'u_id': id,
            'u_pw': pw,
            'u_mail': mail
        });

    diaryDB.set(id, []);
        
}

function searchMember(id, pw){
    console.log('searchMember() called')

    memberDB.get(id);  // -> 데이터타입 = object => 넣을 떄 object

    let memObj = memberDB.get(id);

    if(memObj !== undefined && memObj.u_pw === pw){
        return true;
    }
    
    return false;
    
    
}

function removeMember(){
    console.log('removeMember() Called')

    // memberDB 에서 signInedMemberId를 지운다
    memberDB.delete(signInedMemberId);

    console.log('memberDB: ', memberDB);
}

function addDiary(txt) {
    console.log('addDiary() called');

    let diaryArray = diaryDB.get(signInedMemberId);
    diaryArray.push(txt);  //push = add

    console.log('diaryDB:', diaryDB);
}

function searchDiaries() {
    console.log('searchDiaries() called');

    let diaryArr = diaryDB.get(signInedMemberId); //Array
    return diaryArr;
}