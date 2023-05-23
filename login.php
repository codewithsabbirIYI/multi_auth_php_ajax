<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log IN</title>

    <!-- bootstrap link here  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    
    <div class="container-md">
        <div class="row justify-content-center align-items-center g-2 mt-5">
            <div class="col-md-6">
                <div class="card">
                    <div class="card">
                        <div class="card-header">                          
                            <h4 class="card-title">Log In</h4>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                              <label for="username" class="form-label">Email OR Phone Number</label>
                              <input type="text" name="username" id="username" class="form-control" placeholder="Username / Phone / Email" aria-describedby="helpId">
                              <!-- <small id="helpId" class="text-muted">Help text</small> -->
                            </div>
                            <div class="mb-3">
                              <label for="password" class="form-label">Password</label>
                              <input type="text" name="password" id="password" class="form-control" placeholder="Password" aria-describedby="helpId">
                              <!-- <small id="helpId" class="text-muted">Help text</small> -->
                            </div>
                            <div class="mb-3 text-center">
                              <input type="submit" class="btn btn-info btn-md my-3" name= "login" id= "login" value="Log In">

                            </div>
                            <badge class="text-center m-auto ">Don't Have Any Account ? <a href= "registration.php" class= "text-lg">Registration</a> </badge>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>


    <!-- bootstrap cdn here  -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>

