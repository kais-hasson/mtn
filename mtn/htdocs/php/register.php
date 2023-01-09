<?php
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
$user=$_GET['user_name'];
$pass=$_GET['password'];

try{
    if (isset($pdo)) {
        $con = $pdo->prepare("SELECT password,user_name FROM epiz_33239802_mtn.new_user WHERE user_name='$user'");
        $con->execute();
        $rows = $con->fetchAll();
        if ($rows==Array())
        {
            $exception_user = "your user name is rong please try again";
            echo (json_encode($exception_user));
        }
        foreach ($rows as $row) {

            if ($pass == ($row['password'])) {
                $_SESSION["token_user"]=hash("sha256",uniqid());
                setcookie("user",$user,time() + (86400 * 30), "/");
                 print true;
            } else {
                $exceptio_password="your password is rong please try again";
                echo (json_encode($exceptio_password));
            }
        }
    }
}catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>