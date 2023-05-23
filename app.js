$(document).ready(function () {


    $('.name').blur(function(){
        if(!$(this).val()){
            $(this).addClass('is-invalid');
            $('.registration').addClass('disabled');
            $('.NameErrorBox').text(' Name Field Is Required');
        } else{
            let name = $.isNumeric($(this).val());
            if(name){
                $(this).addClass('is-invalid');
                $('.registration').addClass('disabled');
                $('.NameErrorBox').text('Name Will Be In String Or Text');
            }else{
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('.registration').removeClass('disabled');
            }
            // $(this).removeClass('is-invalid');
            // $(this).addClass('is-valid');
            // $('.registration').removeClass('disabled');    
        }
    });

    $('.username').blur(function(){
        if(!$(this).val()){
            $(this).addClass('is-invalid');
            $('.registration').addClass('disabled');
            $('.NameErrorBox').text(' Name Field Is Required');
        } else{
            let username = $.isNumeric($(this).val());
            if(username){
                $(this).addClass('is-invalid');
                $('.registration').addClass('disabled');
                $('.usernameErrorBox').text('Username Will Be In String Or Text');
            }else{
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('.registration').removeClass('disabled');
            }
            // $(this).removeClass('is-invalid');
            // $(this).addClass('is-valid');
            // $('.registration').removeClass('disabled');    
        }
    });

    $('.phone').blur(function(){
        if(!$(this).val()){
            $(this).addClass('is-invalid');
            $('.registration').addClass('disabled');
            $('.phoneErrorBox').text(' Name Field Is Required');
        } else{
            let phone = $.isNumeric($(this).val());
            if(!phone){
                $(this).addClass('is-invalid');
                $('.registration').addClass('disabled');
                $('.phoneErrorBox').text('Phone Will Be In Number Or Text');
            }else{
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('.registration').removeClass('disabled');
            }
            // $(this).removeClass('is-invalid');
            // $(this).addClass('is-valid');
            // $('.registration').removeClass('disabled');    
        }
    });

    $('.email').blur(function(){
        if(!$(this).val()){
            $(this).addClass('is-invalid');
            $('.registration').addClass('disabled');
            $('.emailErrorBox').text(' Email Field Is Required');
        } else{
           let email = ($(this).val());
            let pos = email.indexOf('@');
            console.log(pos);
            if(pos == -1){
                $(this).addClass('is-invalid');
                $('.registration').addClass('disabled');
                $('.emailErrorBox').text('You Must Give a Valid Email');
            }else{
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('.registration').removeClass('disabled');
            }
        }
    });

    $('.password').blur(function(){
        if(!$(this).val()){
            $(this).addClass('is-invalid');
            $('.registration').addClass('disabled');
            $('.passwordErrorBox').text(' Password Field Is Required');
        } else{
            let password = ($(this).val());
            let passwordLength = password.length;
    
            if(passwordLength < 8){
                $(this).addClass('is-invalid');
                $('.registration').addClass('disabled');
                $('.passwordErrorBox').text('Password Must Be Minimum In 8 Character');
            }else{
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('.registration').removeClass('disabled');
            }

            // $(this).removeClass('is-invalid');
            // $(this).addClass('is-valid');
            // $('.registration').removeClass('disabled');
        }
    });

    $('.confirmPassword').blur(function(){
        if(!$(this).val()){
            $(this).addClass('is-invalid');
            $('.registration').addClass('disabled');
            $('.confirmPasswordErrorBox').text(' Confirm Password Field Is Required');
        } else{
            let password = $('.password').val();
            let confirmPassword = $(this).val();
            
            console.log(password);
            console.log(confirmPassword);

            if(password === confirmPassword){
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
                $('.registration').removeClass('disabled');
            }else{
                $(this).addClass('is-invalid');
                $('.registration').addClass('disabled');
                $('.confirmPasswordErrorBox').text('Password and Confirm Password Do Not Match');
            }
           

            // $(this).removeClass('is-invalid');
            // $(this).addClass('is-valid');
            // $('.registration').removeClass('disabled');
        }
    });
    $(".role").on("blur", function() {
        if($(".role").val() == 0) {
            $(this).addClass('is-invalid');
            $('.registration').addClass('disabled');
            $('.roleErrorBox').text(' Role Field Is Required');
        }else{
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('.registration').removeClass('disabled');
        }
        
    });
    $(".status").on("blur", function() {
        if($(".status").val() == 0) {
            $(this).addClass('is-invalid');
            $('.registration').addClass('disabled');
            $('.statusErrorBox').text(' Status Field Is Required');
        }else{
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            $('.registration').removeClass('disabled');
        }
        
    });
    
});

