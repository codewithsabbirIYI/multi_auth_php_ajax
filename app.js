$(document).ready(function () {

    $('.name').blur(function(){
        if(!$(this).val()){
            $(this).addClass('is-invalid');
        } else{
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
        }
    });
});

