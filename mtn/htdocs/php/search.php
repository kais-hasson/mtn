<?php
header("Content-type: application/json");
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
session_start();

    if(empty($_SESSION["token"])){
        header("location:http://mtn.infinityfreeapp.com/admin%20login.html?");
    }else{
$phone_number=_GET['phone_number'];
     try {
        if (isset($pdo)) {
            $con = $pdo->prepare("SELECT id, title, f_name, l_name, phone_number, email, user_name, city, address, gender, birthday, occupation, password FROM epiz_33239802_mtn.new_user WHERE phone_number=$phone_number");
            $con->execute();
            $users = $con->fetchAll(PDO::FETCH_ASSOC);
            print_r(json_encode($users));
        }
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}