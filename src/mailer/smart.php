<?php 

$name = $_POST['name'];
$email = $_POST['email'];

$token = "";
$chat_id = "";

$arr = array(
    'Имя пользователя: ' => $name,
    'Email: ' => $email
);

foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot%7B$token%7D/sendMessage?chat_id=%7B$chat_id%7D&parse_mode=html&text=%7B$txt%7D", "r");

if ($sendToTelegram){
    return false;
}else {
    return true;
}

/*

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '';                             // Наш логин
$mail->Password = 'yxvwzpkhocxowiud';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, ssl also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('', 'От лучших девочек');   // От кого письмо 
$mail->addAddress('fasivo4476@klblogs.com'); 
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
        Пользователь оставил данные <br> 
    Имя: ' . $name . ' <br>
    E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}*/

?>