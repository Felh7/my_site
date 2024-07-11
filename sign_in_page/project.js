// client's validation
function validateForm() {
    let usrnameField = document.getElementById("usrname");
    let passField = document.getElementById("pass");
    if (usrnameField.value === "" || passField.value === "" || usrnameField.value.length < 2 || passField.value.length < 6) {
        console.log('false');

        return false;
    }
    //if (!validateEmail(email)) {
   //     return false
  //  }
    // дополнительная проверка на стороне клиента
    console.log('true');

    return true; 
  }


// registration succes

isDOMLoaded = false;
document.addEventListener("DOMContentLoaded", ()  =>{
    isDOMLoaded = true;
});
if (isDOMLoaded){
    document.getElementById('register_redirect').addEventListener('click', function () {
       window.location.href = 'http://127.0.0.1:5500/feed/index.html';
    });
}