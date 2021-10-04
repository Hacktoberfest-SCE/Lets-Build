<?php
	$servername = 'vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
	$user = 'wdfa08zvh6lz2hoj';
	$pass = 'zudcu35z3zeb5puz';
	$dbname = 'r0yol1itzflzm42x';

	$conn = mysqli_connect($servername,$user,$pass,$dbname);

	if(!$conn){
		die("Could Not Connect to the database".mysqli_connect_error());
	}

?>
