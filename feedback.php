<meta charset="UTF-8">
<meta http-equiv='refresh' content='0; url=http://designunited.zzz.com.ua/'> <!-- Редирект -->
<?php
	if (isset($_POST['name'])) {
		$name = $_POST['name'];
	}
	if (isset($_POST['email'])) {
		$email = $_POST['email'];
	}
	if (isset($_POST['message'])) {
		$message = $_POST['message'];
	}
	if (isset($_POST['spam'])) {
		$spam = $_POST['spam'];
	}
	if (empty($spam)) {
		if (isset($name) && isset($email) && isset($message)) {
			$address = "design.united.studio@gmail.com"; // <-- Почта сайта
			$subject = "Сообщение с сайта Design United Studio"; // <-- Заголовок в сообщении на почте
			$mes = "Имя: $name \nE-mail: $email \nТекст: $message";
			$send = mail ($address,$subject,$mes,"Content-type: text/plain; charset = UTF-8\r\nFrom: $email");
			if ($send == 'true') {
				$ms = 'Спасибо!'; // <-- Уведомление после отправки сообщения
			}
		}
		echo "<script type=\"text/javascript\">alert( \"$ms\");</script> \n";
		exit;
	}
	exit;
?>