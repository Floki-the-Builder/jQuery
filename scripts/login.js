function login(){
    // get vals from form
    let inputEmail = $('#txtEmail').val();
    let inputPass =  $('#txtPw').val();
    // use a flag
    let flag = false;

    // get users from list
    let userList = readUsers(); // this is from storeManager
    // travel user list
    for( let i= 0; i < userList.length; i++){
        let user = userList[i];
        //compare email and password
        if(user.email == inputEmail && user.passWord == inputPass){
            flag = true;
            window.location = 'users.html';

        } 
        if (!flag){
            $('#alertError').addClass('hide');
            setTimeout(function(){
                $('#alertError').addClass('hide');
            } ,3000);
        }
    }

}

function init(){
    $('#btnLogin').click(login)
}
window.onload = init;