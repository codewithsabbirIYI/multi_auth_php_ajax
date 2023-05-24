<?php
    $call = $_POST['call'];
    $call();


    // checking is Username exist 
    function findusername(){
        $username = $_POST['username'];
        $db_connect = new mysqli('localhost', 'root', '', 'multi_auth_php_ajax');
        $findusernameQuery = $db_connect->query("SELECT username FROM users WHERE username = '$username';");

        if($findusernameQuery->num_rows > 0){
            $findusernameQuery = 1;
            echo $findusernameQuery;
        }else{
            $findusernameQuery = 0;
            echo $findusernameQuery;
        }
    }

    // checking is phone number exist 
    function findphone(){
        $phone = $_POST['phone'];
        $db_connect = new mysqli('localhost', 'root', '', 'multi_auth_php_ajax');
        $findphoneQuery = $db_connect->query("SELECT phone FROM users WHERE phone = '$phone';");

        if($findphoneQuery->num_rows > 0){
            $findphoneQuery = 1;
            echo $findphoneQuery;
        }else{
            $findphoneQuery = 0;
            echo $findphoneQuery;
        }
    }

    // checking is email exist 
    function findemail(){
        $email = $_POST['email'];
        $db_connect = new mysqli('localhost', 'root', '', 'multi_auth_php_ajax');
        $findemailQuery = $db_connect->query("SELECT email FROM users WHERE email = '$email';");

        if($findemailQuery->num_rows > 0){
            $findemailQuery = 1;
            echo $findemailQuery;
        }else{
            $findemailQuery = 0;
            echo $findemailQuery;
        }
    }
?>