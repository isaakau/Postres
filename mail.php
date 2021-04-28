<?php
    if(!empty($_GET)){
        $email_to ="deli8bits@gmail.com";
        $email_subject = "Nueva consulta en el formulario.";
        $email_message = "Detalles del Formulario de contacto: \n\n";
        $email_message .= "Nombre: " .$_GET['nombre'] . "\n";
        $email_message .= "Apellido: " .$_GET['apellido'] . "\n";
        $email_message .= "Correo: " .$_GET['correo'] . "\n";
        $email_message .= "Telefono: " .$_GET['telefono'] . "\n";
        $email_message .= "Mensaje: " .$_GET['mensaje'] . "\n\n";

        //Se envía email con la funcion mail() de PHP
        $mail = 'deli8bits@gmail.com';
        $header = 'From: '. $mail . " \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";

        if(mail($email_to, $email_subject, $email_message, $header)){
            echo 'Correo enviado correctamente';
        }else{
            echo 'Hubo un problema al enviar el mensaje';
        }
    }
?>