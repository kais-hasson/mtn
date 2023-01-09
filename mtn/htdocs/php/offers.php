<?php
header("Content-type: application/json");
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
$who=$_GET['who'];
session_start();
if($who=="admin"){
    if(empty($_SESSION["token"])){
        header("location:http://mtn.infinityfreeapp.com/admin%20login.html");
    }
    else{
    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("SELECT offers_id, offers_name, message, minutes, internet, money_value,offer_code FROM epiz_33239802_mtn.offers ");
            $con->execute();
            $offers = $con->fetchAll(PDO::FETCH_ASSOC);
            print_r(json_encode($offers));
        }
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
        }
}
else{
        try {
            if (isset($pdo)) {
                $con = $pdo->prepare("SELECT offers_name, message, minutes, internet, money_value,offer_code FROM epiz_33239802_mtn.offers ");
                $con->execute();
                $offers = $con->fetchAll(PDO::FETCH_ASSOC);
                print_r(json_encode($offers));
            }
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
    }
}