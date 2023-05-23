<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>

    <!-- bootstrap link here  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>
<body>
    
    <div class="container-md">
        <div class="row justify-content-center align-items-center g-2 mt-5 mb-5">
            <div class="col-md-6">
                <div class="card">
                    <div class="card">
                        <div class="card-header text-center">                          
                            <h4 class="card-title">Registration</h4>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                              <label for="name" class="form-label ">Name: </label>
                              <input type="text" name="name" id="name" class="form-control name" placeholder="Enter Full Name " aria-describedby="helpId">
                              <!-- <small id="helpId" class="text-muted">Help text</small> -->
                            </div>
                            <div class="mb-3">
                              <label for="username" class="form-label">Username: </label>
                              <input type="text" name="username" id="username" class="form-control username" placeholder="Enter Username" aria-describedby="helpId">
                              <!-- <small id="helpId" class="text-muted">Help text</small> -->
                            </div>
                            <div class="mb-3">
                              <label for="phone" class="form-label">Phone Number: </label>
                              <input type="text" name="phone" id="phone" class="form-control phone" placeholder="Enter Active Phone Number" aria-describedby="helpId">
                              <!-- <small id="helpId" class="text-muted">Help text</small> -->
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">Email: </label>
                              <input type="text" name="email" id="email" class="form-control email" placeholder="Enter Active Email Address" aria-describedby="helpId">
                              <!-- <small id="helpId" class="text-muted">Help text</small> -->
                            </div>
                            <div class="mb-3">
                              <label for="password" class="form-label">Password: </label>
                              <input type="password" name="password" id="password" class="form-control password" placeholder="Enter Password" aria-describedby="helpId">
                              <!-- <small id="helpId" class="text-muted">Help text</small> -->
                            </div>
                            <div class="mb-3">
                              <label for="confirmPassword" class="form-label ">Confirm Password: </label>
                              <input type="password" name="confirmPassword" id="confirmPassword" class="form-control confirmPassword" placeholder="Confirm Password" aria-describedby="helpId">
                              <!-- <small id="helpId" class="text-muted">Help text</small> -->
                            </div>
                            <div class="mb-3">
                              <label for="role" class="form-label">Role</label>
                              <select class="form-select form-select-md role" name="role" id="role">
                                  <option selected>---Select Role---</option>
                                  <option value="admin">Admin</option>
                                  <option value="user">User</option>
                              </select>
                            </div>

                            <div class="mb-3">
                              <label for="status" class="form-label">Status</label>
                              <select class="form-select form-select-md status" name="status" id="status">
                                  <option selected>---Select Status---</option>
                                  <option value="1">Active</option>
                                  <option value="2">Inactive</option>
                              </select>
                            </div>
                        
                            <div class="mb-3 text-center">
                              <input type="submit" class="btn btn-info btn-md my-3 registration" name= "registration" id= "registration" value="Submit">

                            </div>
                            <badge class="text-center m-auto ">Already Have An Account ? <a href= "login.php" class= "text-lg">Log In</a> </badge>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <!-- jquery cdn here  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>

    <!-- bootstrap cdn here  -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <script src="app.js"></script>
</body>
</html>

