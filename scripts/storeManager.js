const STORE_KEY = "users";

function saveUser(user){
    let oldData = readUsers(); // access function of users obj
    oldData.push(user);// push data to old array

    let val = JSON.stringify(oldData)
    // console user and val
    localStorage.setItem(STORE_KEY, val);
}

function readUsers(){
    // get vals from LS
    let data = localStorage.getItem(STORE_KEY);
    console.log(data);

    if(!data){
        return []; // if no data return empty array
    } else {
        let list = JSON.parse(data); // parsing JSON to obj
        console.log(list);
        return list;  // else return list array with obj
    }
    
}