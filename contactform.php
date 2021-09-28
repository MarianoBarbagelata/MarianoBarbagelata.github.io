<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$letter = "Este mensaje fue enviado por: $name \r\n";
$letter .= "Su e-mail es: $email \r\n";
$letter .= "Asunto: $subject \r\n";
$letter .= "Mensaje: $message \r\n";
$letter .= "Enviado el: " . date('d/m/Y', time());

$receiver = "marianoabarba@gmail.com";
$case = "Mensaje enviado desde Portfolio";

mail($receiver, $case, $letter);

header("Location:contactform.html");
?>