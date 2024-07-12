function validateForm(Form){
    if (Form.id == 'passwd'){
        let regexp_condition = /^[a-z0-9!@#$%^&*]{6,20}$/;
        if (!regexp_condition.test(Form.value)){
            return false;
        }
    }
    if (Form.id == 'usrname'){
        let regexp_condition = /^[a-z0-9_-]{2,10}$/;
        if (!regexp_condition.test(Form.value)){
            return false;
        }
    }
    return true;
}

function enableSubmit(Fields){
    let btn = document.getElementById('register_redirect');
    let isValid = true;
    for (var i = 0; i < Fields.length; i++){
        if (validateForm(Fields[i]) == false){
            isValid = false;
            break;
        }
    }
    btn.disabled = !isValid;
}

document.addEventListener("DOMContentLoaded", ()  =>{
    const input = document.querySelector('.input-box input');
    const UsrNameField = document.getElementById('usrname');
    const PasswdField = document.getElementById('passwd');
    let Fields = [UsrNameField,PasswdField];

    for(var i = 0; i < Fields.length; i++){
        Fields[i].addEventListener("input", function () {
            enableSubmit(Fields);
        })   
    }

    document.getElementById('register_redirect').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'http://127.0.0.1:5500/feed/index.html';
        localeStorage.clear();
    })
});