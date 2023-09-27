/* script de login mostar oculltar contraseña y cambio de icono*/
function mo(){
    var cambio = document.getElementById("password");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }
}