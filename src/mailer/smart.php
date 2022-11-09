<?php 

$name = $_POST['name'];
$email = $_POST['email'];

$token = "5540113565:AAGfYXnLU-igyw5VqikocwT2sQgLrsOhPco";
$chat_id = "-896319528";

$arr = array(
    'Имя пользователя: ' => $name,
    'Email: ' => $email
);

foreach($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram){
    return false;
}else {
    return true;
}

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'alifa.san@yandex.ru';                 			// Наш логин
$mail->Password = 'yxvwzpkhocxowiud';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('alifa.san@yandex.ru', 'От лучших девочек');   // От кого письмо 
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
}

?>