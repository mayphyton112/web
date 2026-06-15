const memberDB = new Map();

const addMember = (id, pw, mail) => {
    console.log('addMember() Called');

    memberDB.set(id, {
        'u_id': id,
        'u_pw': pw,
        'u_mail': mail
    });

    
}