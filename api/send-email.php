<?php
session_start();

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:4004/");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-CSRF-Token");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido."]);
    exit;
}

require __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable('../');
$dotenv->load();

$json = file_get_contents("php://input");
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Dados inválidos."]);
    exit;
}

$receivedCsrfToken = $data['csrf_token'] ?? '';
if (empty($receivedCsrfToken) || !isset($_SESSION['csrf_token']) || $receivedCsrfToken !== $_SESSION['csrf_token']) {
    http_response_code(403);
    echo json_encode(["error" => "Token CSRF inválido."]);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["error" => "Todos os campos são obrigatórios."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Email inválido."]);
    exit;
}

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->Host       = getenv('SMTP_HOST');
    $mail->SMTPAuth   = true;
    $mail->Username   = getenv('SMTP_USERNAME');
    $mail->Password   = getenv('SMTP_PASSWORD');
    $mail->SMTPSecure = getenv('SMTP_SECURE');
    $mail->Port       = getenv('SMTP_PORT');

    $mail->setFrom(getenv('MAIL_FROM'), getenv('MAIL_FROM_NAME'));
    $mail->addAddress(getenv('MAIL_TO'));

    $mail->isHTML(true);
    $mail->Subject = 'Nova mensagem de contato';
    $mail->Body    = "
        <p><strong>Nome:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Mensagem:</strong> " . nl2br(htmlspecialchars($message)) . "</p>
    ";
    $mail->AltBody = "Nome: $name\nEmail: $email\nMensagem: $message";

    if (!$mail->send()) {
        http_response_code(500);
        echo json_encode(["error" => "Erro ao enviar email: " . $mail->ErrorInfo]);
        exit;
    }

    echo json_encode(["success" => "Email enviado com sucesso!"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Exceção ao enviar email: " . $mail->ErrorInfo]);
}
