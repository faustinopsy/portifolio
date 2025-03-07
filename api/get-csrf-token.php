<?php
session_start();

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:4004/");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-CSRF-Token");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    
    echo json_encode(["csrf_token" => $_SESSION['csrf_token']]);
}else{
    echo "não permitido";
}
