// obj constructor
function User(email, pWord, fName, lName,age, color){
   this.email = email;
   this.passWord = pWord;
   this.firstName = fName;
   this.lastName = lName;
   this.age = age;
   this.color = color;
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
        $('#txtPw').addClass('input-error')
     } if(user.firstName.length == 0){
        valid = false;
        console.log("add first name");
        $('#txtFname').addClass('input-error')
     } if(user.lastName.length == 0){
        valid = false;
        console.log("add a last name");
        $('#txtLname').addClass('input-error')
     }
    //    if(user.age.length == 0){
    //     valid = false;
    //     console.log("add age");
    //     $('#age').addClass('input-error')
    //  } 
    
     return valid;

}

function validatePass(){
    console.log('validating pass');
    // get value imput
    let txtPass = $('#txtPw');
    let password = txtPass.val();
    // is password < 6 chars
    if(password.length < 6){ // is password < 6
        txtPass.css('background', '#ff9898') // jQuery cjanges css
        displayError('The password is too short')
    } else{
        txtPass.css('background', '#6Acc66') // jQuery cjanges css
        hideError();
    }
}

function displayError(msg){
    $("#alertError").removeClass('hide').text()
}
function hideError(){
    $('#alertError').addClass("hide");
}

// register func
function register(){
    let userEmail = $('#txtEmail').val();
    let userPass = $('#txtPw').val();
    let userFname = $('#txtFname').val();
    let userLname = $('#txtLname').val();
    let userColor = $('#selColor').val();

    let newUser = new User(userEmail, userPass,userFname, userLname, userColor)
        if(isValid(newUser)== true){
        saveUser(newUser);      
        hideError();
        $('input').val(""); 
        }else{
            displayError("Please, compete all fields")
        }


}

function init(){
    console.log("register")
    //hook events
    $("#btnRegister").click(register);
    $("#txtLname").keypress(function(e){
        if(e.key == 'Enter'){ /// registers with enter 
            register();
        }
    });
    $("#txtPw").keyup(validatePass) // executes when the key is up
}

window.onload=init;