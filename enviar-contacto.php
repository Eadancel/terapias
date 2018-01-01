<?php
session_start();
// echo "lalal" . $_POST['name'];
if(isset($_POST['name'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "muriellama@muriel.cl";
// $email_to = "murielflowers@murielflowers.com";
$email_subject = "Mensaje del Cliente: " . $_POST['name'];
$email_de .= $_POST['email'];

// Aquí se deberían validar los datos ingresados por el usuario
//borrado

// $_POST['nombre'];
// $_POST['email'];
// $_POST['telefono'];
// $_POST['texto'];;


$email_message = "
Mensaje del Cliente " . $_POST['name'] . "\n\n
Email: " . $_POST['email'] . "\n
Mensaje: " . $_POST['message'] . ";
";

$email_redirect .= "Su mensaje fue enviado con éxito, Pronto te contactaremos para responderte";

// Ahora se envía el e-mail usando la función mail() de PHP
$header = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$header .= 'From: Muriel Lama <muriellama@muriel.cl>';
// $header .= 'From: Polo <murielflowers@murielflowers.com>';

@mail($email_to, $email_subject, $email_message, $headers);

@mail($email_de, "Gracias por Contactarnos" , $email_redirect, $headers);

echo "¡El formulario se ha enviado con éxito!";
header("Location:./index.html#contacto");
}
?>
