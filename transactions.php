<!-- transactionDetails -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transaction Summary</title>
    <!-- <link rel="stylesheet" href="./style.css"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <style>
    
    body{
        background-image:url("1.png");
    }
    .logo-text, .nav-link1{
      color: white;
      padding-top: 15px;
    }
    .list-customer{
      padding-left: 1100px;
    }

    .nav-link1:hover{
      color: blue;
    }
    h2{
      text-align: center;
      margin-top: 20px;
    }

    </style>
</head>
<!--  background="./images/thistory.jpg" style="background-repeat: no-repeat; background-size: 100%;" -->
<body>

  <nav class="navbar navbar-expand-sm">
<!-- Bank logo -->
<a class="navbar-brand" >
  <img src="logo.png" alt="logo" style="width:100px;height:100px">
</a>
<ul class="navbar-nav">
<li class="list-customer">
<a class="nav-link1" href="index.php">Home</a>
<style>
.nav-link1{color:black;}
</style>
</li>
</ul>
</nav>
        <div class="container divStyle">
        <h2>Transaction Summary</h2>

       <br>
       <div class="table-responsive-sm">
    <table class="table roundedCorners  tabletext table-hover table-condensed table-dark" >
        <thead>
            <tr>
                <th>Id</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Amount Transferred</th>
            </tr>
        </thead>
        <tbody>
        <?php

            include 'config.php';

            $sql ="select * from transfers";

            $query =mysqli_query($conn, $sql);

            while($rows = mysqli_fetch_array($query))
            {
        ?>
            <tr>
            <td><?php echo $rows['id']; ?></td>
            <td><?php echo $rows['fromuser']; ?></td>
            <td><?php echo $rows['touser']; ?></td>
            <td><?php echo $rows['transamount']; ?> </td>

        <?php
            }

        ?>
        </tbody>
    </table>

    </div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

</body>
</html>
