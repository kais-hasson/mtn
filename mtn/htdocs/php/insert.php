<?php
header("Content-type: application/json");
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/humans.php";
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/offer.php";
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/bill.php";
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/job.php";
session_start();
$who=$_GET['who'];
    if ($who=="users") {
        $user=$_POST;
        print_r($_POST);
                        print_r($user);
                        print_r($new_user->phone_number);
        $new_user=new humans($user);
        print_r($new_user->phone_number);
        try {

            if (isset($pdo)) {
                $select_if_user_exist=$pdo->prepare("SELECT user_name,email,phone_number FROM epiz_33239802_mtn.new_user WHERE user_name='$new_user->user_name' OR phone_number='$new_user->phone_number' OR email='$new_user->email'");
                $select_if_user_exist->execute();
                $users_exist=$select_if_user_exist->fetchAll();
                print_r($users_exist);
                     if ($user_exist['phone_number'] == $new_user->phone_number || $user_exist['email'] == $new_user->email || $user_exist['user_name'] == $new_user->user_name) {
                        $exception_exist = "this user already exist please go to login page";
                        print_r(json_encode($exception_exist));
                        
                         header("location:http://mtn.infinityfreeapp.com");
                    
                    }else{
                        $con = $pdo->prepare("INSERT INTO epiz_33239802_mtn.new_user(title, f_name, l_name, phone_number, email, user_name, city, address, gender, birthday, occupation, password)
                         VALUE('$new_user->title','$new_user->first_name','$new_user->last_name','$new_user->phone_number','$new_user->email','$new_user->user_name','$new_user->city','$new_user->address',                            '$new_user->gender','$new_user->birthday','$new_user->occupation','$new_user->password')");
                        $con->execute();
                        $conn = $pdo->prepare("insert into epiz_33239802_mtn.bills(phone_number, user_name) values ('$new_user->phone_number','$new_user->user_name')");
                        $conn->execute();
                        print_r(json_encode("new user added"));
                        $_SESSION["token_user"]=hash("sha256",uniqid());
                        setcookie("user",$new_user->user_name, time() + (86400 * 30), "/");
                         header("location:http://mtn.infinityfreeapp.com");
                    }
                }
        } catch
        (PDOException $e) {
            echo "Connection failed: ". $e->getMessage();
        }
    }else{

if(empty($_SESSION["token"])){
    header("location:http://mtn.infinityfreeapp.com/admin%20login.html?");
}else{
    if ($who=="admins"){
        $user=$_POST;
        $new_user=new humans($user);
        try {
            if (isset($pdo)) {

                $con = $pdo->prepare("INSERT INTO epiz_33239802_mtn.admin(user_name,password,email) VALUE('$new_user->user_name','$new_user->password','$new_user->email')");
                $con->execute();
                header("location:http://mtn.infinityfreeapp.com/admin.html?");
            }
        } catch
        (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
if ($who=="offers") {
    $offer=$_POST;
    $new_offer=new offer($offer);
    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("INSERT INTO epiz_33239802_mtn.offers(offers_name,offer_code,message,minutes,money_value,internet)
    VALUE('$new_offer->offer_name','$new_offer->offer_code','$new_offer->message','$new_offer->minutes','$new_offer->money_value','$new_offer->internet')");
            $con->execute();
            header("location:http://mtn.infinityfreeapp.com/admin.html?");
        }
    } catch
    (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}
if ($who=="bills") {
    $bill= $_POST;
    $new_bill=new bill($bill);
    try {
        if (isset($pdo)) {
            $con = $pdo->prepare("UPDATE epiz_33239802_mtn.bills SET money_amount='$new_bill->money_amount'
WHERE phone_number='$new_bill->phone_number'");
            $con->execute();
            header("location:http://mtn.infinityfreeapp.com/admin.html?");
        }
    } catch
    (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }}
    if ($who=="job"){
        $jobs=$_POST;
        $new_job=new job($jobs);
if (isset($_POST['upload'])){
    $filename=$_FILES["job_photo"]["name"];
    $file=$_FILES["job_photo"]["tmp_name"];
    move_uploaded_file($file,"/home/vol17_1/epizy.com/epiz_33239802/htdocs/assets/img/".$filename);
    $path="assets/img/".$filename;
}
        
        try {
            if (isset($pdo)) {


                $con = $pdo->prepare("INSERT INTO epiz_33239802_mtn.jobs(job_name, job_title, salary,job_brunch,job_degree,Experience,photo_path) VALUE('$new_job->job_name','$new_job->job_title','$new_job->salary','$new_job->job_brunch','$new_job->job_degree','$new_job->Experience','$path')");
                $con->execute();
                header("location:http://mtn.infinityfreeapp.com/admin.html?");
            }
        } catch
        (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
}}