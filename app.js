// obj constructor
function user(email, pWord, fName, lName,age){
   this.email = email;
   this.password = password;
   this.fName = firstName;
   this.lName = lName;
   this.age = age;
}

// register func

function register(){
    let userEmail = $('#txtEmail').val();
    let userPass = $('#txtPw').val();
    let userFname = $('#txtFname').val();
    let userLname = $('#txtLname').val();
    let userAge = $('#age').val();

    let newUser = new user(userEmail, userPass,userFname, userLname, userAge)
// xlear th inputs
$('input').val("");
console.log(newUser);
}



function init(){
    console.log("register")
}

window.onload=init;