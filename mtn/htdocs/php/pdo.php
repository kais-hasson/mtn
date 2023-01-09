<?php
try{$pdo =new PDO('mysql:host=sql200.epizy.com;epiz_33239802_mtn','epiz_33239802','S6MVAlBvWz');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);}
    catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

?>

