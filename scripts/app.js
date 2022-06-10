// obj constructor
function User(email, pWord, fName, lName){
   this.email = email;
   this.passWord = pWord;
   this.firstName = fName;
   this.lastName = lName;
}

function isValid(user){
    // return false when user is not valid
    // return true when user is valid
     let valid = true;
     if(user.email.length == 0){
         valid = false;
         console.log("add an email");
         $('#txtEmail').addClass('input-error')
     } if(user.passWord.length == 0){
        valid = false;
        console.log("add a password");
        $('#txtEmail').addClass('input-error')
     } if(user.firstName.length == 0){
        valid = false;
        console.log("add first name");
        $('#txtEmail').addClass('input-error')
     }if(user.lastName.length == 0){
        valid = false;
        console.log("add a last name");
        $('#txtEmail').addClass('input-error')
     }
     return valid;

}

// register func
function register(){
    let userEmail = $('#txtEmail').val();
    let userPass = $('#txtPw').val();
    let userFname = $('#txtFname').val();
    let userLname = $('#txtLname').val();

    let newUser = new User(userEmail, userPass,userFname, userLname)
        if(isValid(newUser)== true){
        saveUser(newUser);      
        $('input').val(""); 
        }


}

function init(){
    console.log("register")
    //hook events
    $("#btnRegister").click(register);
    $("#txtLname").keypress(function(e){
        console.log(e)
    });
}

window.onload=init;