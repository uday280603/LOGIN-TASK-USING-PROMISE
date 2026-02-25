const cl = console.log;
const loginForm = document.getElementById('loginForm');
const emailControl = document.getElementById('email');
const passwordControl = document.getElementById('password');


function onFormSubmit( eve){
    eve.preventDefault();
    let obj = {
        email : emailControl.value,
        password : passwordControl.value
    }
    // cl(obj);
    login(obj.email,obj.password)
       .then((res) =>{
        Swal.fire({
            title:res,
            icon:'success',
            timer:2000
        })
       })
       .catch((err)=>{
        Swal.fire({
            title:err,
            icon:'error',
            timer:2000
        })
       })
       
}


function login(email,password){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(email == 'ronak123@gmail.com' && password =='zaq1ZAQ1'){
                let data = 'Login Successfull...!';
                resolve(data);
            }
            else{
                let err = `Invalid email or password`;
                reject(err)
            }
        }, 500);
    })
}
loginForm.addEventListener('submit',onFormSubmit);