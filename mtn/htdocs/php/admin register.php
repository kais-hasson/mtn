
<?php
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
session_start();
$user=$_GET['user_name'];
$pass=$_GET['password'];
//get admin name and email from log in page
try{
    if (isset($pdo)) {
        $con = $pdo->prepare("SELECT password,user_name FROM epiz_33239802_mtn.admin WHERE user_name='$user'");
        //search if admin is exist or not 
        $con->execute();
        $rows = $con->fetchAll();
        if ($rows==Array())
        {//if admin not exict or the user name is rong
            $exceptio_user = "your user name is rong please try again";
            echo (json_encode($exceptio_user));
        }
        foreach ($rows as $row) {

            if ($pass == ($row['password'])) {
                print true;
                //if admin exist set uniq token
                $_SESSION["token"]=hash("sha256",uniqid());
            } else {
                //if password rong print your password is rong please try again
                $exceptio_password="your password is rong please try again";
                echo (json_encode($exceptio_password));
            }
        }
    }
}catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    }

?>

