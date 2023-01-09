<?php
header("Content-type: application/json");
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/humans.php";
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/offer.php";
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/bill.php";
$who=$_GET['who'];
session_start();
 if ($who == "users") {
   if(empty($_SESSION["token_user"])){
    header("location:http://mtn.infinityfreeapp.com/register.html?");
}
    else{
        $user = $_POST;
        $new_user = new humans($user);
        try {
       if(isset($_COOKIE['user'])){
       $user=$_COOKIE['user'];
            if (isset($pdo)) {
                
                $get_id=$pdo->prepare("SELECT id FROM epiz_33239802_mtn.new_user WHERE user_name='$user'");
                $get_id->execute();
                $get_user = $get_id->fetchAll(PDO::FETCH_ASSOC);
                print_r($get_user);
                $con = $pdo->prepare("UPDATE epiz_33239802_mtn.new_user SET title='$new_user->title', f_name='$new_user->first_name', l_name='$new_user->last_name', phone_number='$new_user->phone_number', email='$new_user->email', user_name='$new_user->user_name', city='$new_user->city', address='$new_user->address', gender='$new_user->gender', birthday='$new_user->birthday', occupation='$new_user->occupation', password='$new_user->password' WHERE id='$get_user'");
                $con->execute();
               header("location:http://mtn.infinityfreeapp.com/register.html?");
            }}
        } catch
        (PDOException $e) {
            header("");
            echo "Connection failed: " . $e->getMessage();
        }
    }}
    else{
if(empty($_SESSION["token"])){
    header("location:http://mtn.infinityfreeapp.com/admin%20login.html?");
}
else{
    if ($who == "admins") {
        $user = $_POST;
        $new_user = new humans($user);
        try {
            if (isset($pdo)) {
                $con = $pdo->prepare("UPDATE epiz_33239802_mtn.admin SET user_name='$new_user->user_name', password= '$new_user->password',email='$new_user->email' WHERE id='$new_user->id'");
                $con->execute();
                header("location:http://mtn.infinityfreeapp.com/admin.html?");
            }
        } catch
        (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    } elseif ($who == "offers") {
        $offer = $_POST;
        $new_offer = new offer($offer);
        try {

            if (isset($pdo)) {
                $con = $pdo->prepare("UPDATE epiz_33239802_mtn.offers SET offers_name='$new_offer->offer_name',message='$new_offer->message', minutes='$new_offer->minutes', internet='$new_offer->internet', money_value='$new_offer->money_value',offer_code='$new_offer->offer_code' WHERE offers_id='$new_offer->id'");
                $con->execute();
                header("location:http://mtn.infinityfreeapp.com/admin.html?");
            }
        } catch
        (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }}}
