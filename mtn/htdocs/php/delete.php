<?php
header("Content-type: application/json");
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
$who=$_GET['who'];
$deleted_id=$_POST['id'];
session_start();
if(empty($_SESSION["token"])){
    header("location:http://mtn.infinityfreeapp.com/admin%20login.html?");}
else{
if($who=="admins")
{
    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("DELETE FROM epiz_33239802_mtn.admin WHERE id='$deleted_id'");
            $con->execute();

            header("location:http://mtn.infinityfreeapp.com/admin.html?");
        }
    } catch
    (PDOException $e) {
        print_r(json_encode( "Connection failed: " . $e->getMessage()));
}}
elseif ($who=="users"){
     try {
         if (isset($pdo)) {
             $con = $pdo->prepare("DELETE FROM epiz_33239802_mtn.new_user WHERE id='$deleted_id'");
             $con->execute();
             header("location:http://mtn.infinityfreeapp.com/admin.html?");
         }
     } catch
     (PDOException $e) {
         print_r(json_encode( "Connection failed: " . $e->getMessage()));}
}
elseif ($who=="offers"){
    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("DELETE FROM epiz_33239802_mtn.offers WHERE offers_id='$deleted_id'");
            $con->execute();
            header("location:http://mtn.infinityfreeapp.com/admin.html?");
        }
    } catch
    (PDOException $e) {
        print_r(json_encode( "Connection failed: " . $e->getMessage()));
}}
elseif ($who=="bills"){
    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("DELETE FROM epiz_33239802_mtn.bills WHERE id='$deleted_id'");
            $con->execute();
            header("location:http://mtn.infinityfreeapp.com/admin.html?");
        }
    } catch
    (PDOException $e) {
        print_r(json_encode( "Connection failed: " . $e->getMessage()));
    }}
elseif ($who=="job"){
    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("DELETE FROM epiz_33239802_mtn.jobs WHERE id='$deleted_id'");
            $con->execute();
            header("location:http://mtn.infinityfreeapp.com/admin.html?");
        }
    } catch
    (PDOException $e) {
        print_r(json_encode( "Connection failed: " . $e->getMessage()));
    }}}