// this func needs an array
function displayUser(usersArray){
    let row;
    // travel array 
    for(let i = 0; i< usersArray.length; i++){
        let user = usersArray[i];
        console.log(user);
    
    //create the table row > data
    row = `
          <tr> 
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
          </tr>
    `;
         // append the row to the table
        $('#users').append(row); /// append row to table
    }

}

function init(){
    console.log("Listing Userd")
    let users = readUsers();//getting of users the array

    displayUser(users);
}

// slow
window.onload=init;