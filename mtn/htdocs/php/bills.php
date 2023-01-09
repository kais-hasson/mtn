<?php

header("Content-type: application/json");
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
session_start();
$who=$_GET["who"];
if($who=="admin"){
    if(empty($_SESSION["token"])){
    header("location:http://mtn.infinityfreeapp.com/admin%20login.html");
}
else{

    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("SELECT id, phone_number, money_amount, user_name FROM epiz_33239802_mtn.bills ");
            $con->execute();
            $bills = $con->fetchAll(PDO::FETCH_ASSOC);
            print_r(json_encode($bills));
        }
    } catch (PDOException $e) {
        print_r(json_encode("Connection failed: " . $e->getMessage()));
    }}}
if($who=="user"){
     if(empty($_COOKIE['user'])){
         header("location:http://mtn.infinityfreeapp.com");
     }else{
if(isset($_COOKIE['user'])) {
    $user=$_COOKIE['user'];
        try {
            if (isset($pdo)) {
                $con = $pdo->prepare("SELECT phone_number,money_amount FROM epiz_33239802_mtn.bills WHERE user_name='$user'");
                $con->execute();
                $bills = $con->fetchAll(PDO::FETCH_ASSOC);
                print_r(json_encode($bills));
            }
        } catch (PDOException $e) {
            print_r(json_encode("Connection failed: " . $e->getMessage()));
        }}}}
     
