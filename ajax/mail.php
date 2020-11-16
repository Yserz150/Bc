<?php
function getIp() {
  $keys = [
    'HTTP_CLIENT_IP',
    'HTTP_X_FORWARDED_FOR',
    'REMOTE_ADDR'
  ];
  foreach ($keys as $key) {
    if (!empty($_SERVER[$key])) {
      $ipp = (explode(',', $_SERVER[$key]));
	  $ip= trim(end($ipp));
      if (filter_var($ip, FILTER_VALIDATE_IP)) {
        return $ip;
      }
    }
  }
}
	$email = $_POST['email'];
	$name = $_POST['name'];
	$subj = $_POST['subj'];
	$message = $_POST['message'];
	$ip = getIp();
	$msg =
"<table>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Почта</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$email</td>
	</tr>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
	</tr>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$subj</td>
	</tr>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сообщение</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$message</td>
	</tr>
	<tr style='background-color: #f8f8f8;'>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>IP</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$ip</td>
	</tr>
</table>";

	$subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
	$success = mail("dssadfsa1@gmail.com",$subject,$msg,$headers);
	echo $success;
	
?>