const form=document.getElementById('regForm');
const username=document.getElementById('userName');
const email =document.getElementById('emailAddress');
const password = document.getElementById('passw0rd');
const password2=document.getElementById('rPassw0rd');

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();

});

const setError =(element , message) => {
    const inputControl =element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');


}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (usernameValue === '')
    {
        setError(username,'يجب إدخال اسم المستخدم ')
    }
    else
    {
        setSuccess(username);
    }

    if (emailValue === '')
    {
        setError(email,'يجب إدخال عنوان البريد الالكتروني ')
    }
    else
    {
        setSuccess(email);
    }

    if (passwordValue === '')
    {
        setError(password ,'يجب إدخال كلمة المرور');
    }
    else if (passwordValue.length < 8)
    {
        setError (password, 'يجب ان تكون كلمة المرور على الاقل 8 محارف');
    }
    else{
        setSuccess(password);
    }

    if (password2Value === '')
    {
        setError(password2,'يجب إدخال تأكيد كلمة المرور');
    }
    else if (password2Value !== passwordValue)
    {
        setError (password2, 'كلمتا السر غير متظابقتان');
    }
    else{
        setSuccess(password2);
    }


};