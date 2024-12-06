<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "amiragarba13@gmail.com";
    $subject = "Contact Form Submission";
    $messageContent = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if(mail($to, $subject, $messageContent, $headers)) {
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        echo "There was an issue with sending your message.";
    }
}
?>
