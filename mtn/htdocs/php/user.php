
<?php
header("Content-type: application/json");
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
session_start();
$who=$_GET['who'];
if($who=="user"){
    if(empty($_SESSION["token_user"])){
        header("location:http://mtn.infinityfreeapp.com/login.html?");
    }else{
if(isset($_COOKIE['user'])){
    $user=$_COOKIE['user'];
    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("SELECT title, f_name, l_name, phone_number, email, user_name, city, address, gender, birthday, occupation, password FROM epiz_33239802_mtn.new_user WHERE user_name='$user' ");
            $con->execute();
            $users = $con->fetchAll(PDO::FETCH_ASSOC);
            print_r(json_encode($users));
        }
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

}}}
elseif ($who=="destroy"){
       session_destroy();
       setcookie("user","", time() - (86400 * 30),"/");
       echo (json_encode("please log in and try again"));
    header("location:http://mtn.infinityfreeapp.com");
}