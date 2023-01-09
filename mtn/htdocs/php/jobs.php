<?php

header("Content-type: application/json");
require_once "/home/vol17_1/epizy.com/epiz_33239802/htdocs/php/pdo.php";
     try {
            if (isset($pdo)) {
                $con = $pdo->prepare("SELECT id, job_name, job_title, salary,job_brunch,job_degree,Experience,photo_path FROM epiz_33239802_mtn.jobs");
                $con->execute();
                $jobs = $con->fetchAll(PDO::FETCH_ASSOC);
                print_r(json_encode($jobs));
            }
        } catch (PDOException $e) {
            print_r(json_encode("Connection failed: " . $e->getMessage()));
        }

