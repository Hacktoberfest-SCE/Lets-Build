<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sai's Basic banking System</title>
    <!-- <link rel="stylesheet" href="./style.css"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <style type="text/css">

    body{
        background-image:url("1.png");
    }
    .logo-text, .nav-link1{
      color: white;
      padding-top: 15px;
    }
    .list-home{
      padding-left: 850px;
    }
    .nav-link1:hover{
      color: blue;
    }
    .container{
      padding-top: 30px;
      text-align: center;
      /* background-color: #8bb5f5; */
      background-size: cover;
      /* background-image:url("money.jpg"); */

    }
    .button {
      background-color: #d35a55;
      border: none;
      color: white;
      padding: 5px 10px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      border-radius: 5px;
    }

    .button:hover{
      color: #8bb5f5;
    }
    </style>


</head>
<body>
<?php
    require 'config.php';
    $query = "SELECT * FROM customers";
    $result = mysqli_query($conn,$query);
?>

<nav class="navbar navbar-expand-sm ">
<!-- Bank logo -->
<a class="navbar-brand" >
<img src="logo.png" alt="logo" style="width:120px; height:120px;">
</a>
<ul class="navbar-nav">
<li class="list-home">
  <a class="nav-link1" href="index.php">Home</a>
  <style>
.nav-link1{color:black;}
</style>
</li>
</ul>
</nav>
    <div class="container divStyle">
        <h2>Select a customer you wish to transfer funds from.</h2>
        <br>

            <div class="row">
                <div class="col">
                    <div class="table-responsive-sm">
                    <table class="table roundedCorners tabletext table-sm table-condensed table-bordered table-dark">
                        <thead>
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Current Balance</th>
                            <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                <?php
                    while($rows=mysqli_fetch_array($result)){
                ?>
                    <tr>
                        <td><?php echo $rows['id'] ?></td>
                        <td><?php echo $rows['name']?></td>
                        <td><?php echo $rows['email']?></td>
                        <td><?php echo $rows['amount']?></td>
                        <td><a href="users.php?id= <?php echo $rows['id'] ;?>"> <button type="button" class="button">Transfer</button></a></td>
                    </tr>
                <?php
                    }
                ?>

                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            </div>

</div>


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>