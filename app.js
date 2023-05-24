$(document).ready(function () {

    $('.registration').addClass('disabled');
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
                let username = $('.username').val();
            
                $.ajax({
                    type: "post",
                    url: "auth.php",
                    data: {
                        'call' : 'findusername',
                        'username': username,
                    },
                    success: function (response) {      
                        if(response == 0){
                            $('.username').removeClass('is-invalid');
                            $('.username').addClass('is-valid');
                            $('.registration').removeClass('disabled');
                            $('.usernameErrorBox').text('Username is Taken');
                        }else{
                            $('.username').addClass('is-invalid');
                            $('.username').removeClass('is-valid');
                            $('.registration').addClass('disabled');
                            $('.usernameErrorBox').text('This Username is already exist');
                        }
                       
                    }
                });

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
            $('.phoneErrorBox').text('Phone Number Field Is Required');
        } else{
            let phone = $.isNumeric($(this).val());
            if(!phone){
                $(this).addClass('is-invalid');
                $('.registration').addClass('disabled');
                $('.phoneErrorBox').text('Phone Will Be In Number Or Text');
            }else{
                let phone = $('.phone').val();
            
                $.ajax({
                    type: "post",
                    url: "auth.php",
                    data: {
                        'call' : 'findphone',
                        'phone': phone,
                    },
                    success: function (response) {      
                        if(response == 0){
                            $('.phone').removeClass('is-invalid');
                            $('.phone').addClass('is-valid');
                            $('.registration').removeClass('disabled');
                            $('.phoneErrorBox').text('Phone is Taken');
                        }else{
                            $('.phone').addClass('is-invalid');
                            $('.phone').removeClass('is-valid');
                            $('.registration').addClass('disabled');
                            $('.phoneErrorBox').text('This Phone is already exist');
                        }
                       
                    }
                });
            
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
            if(pos == -1){
                $(this).addClass('is-invalid');
                $('.registration').addClass('disabled');
                $('.emailErrorBox').text('You Must Give a Valid Email');
            }else{
                let email = $('.email').val();
            
                $.ajax({
                    type: "post",
                    url: "auth.php",
                    data: {
                        'call' : 'findemail',
                        'email': email,
                    },
                    success: function (response) {      
                        if(response == 0){
                            $('.email').removeClass('is-invalid');
                            $('.email').addClass('is-valid');
                            $('.registration').removeClass('disabled');
                            $('.emailErrorBox').text('Email is Taken');
                        }else{
                            $('.email').addClass('is-invalid');
                            $('.email').removeClass('is-valid');
                            $('.registration').addClass('disabled');
                            $('.emailErrorBox').text('This Email is already exist');
                        }
                       
                    }
                });
            }
            // $(this).removeClass('is-invalid');
            // $(this).addClass('is-valid');
            // $('.registration').removeClass('disabled');
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

