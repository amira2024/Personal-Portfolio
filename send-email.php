<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$name || !$email || !$message) {
        echo "Please fill in all fields correctly.";
        exit;
    }

    $to = "amiragarba13@gmail.com";
    $subject = "Contact Form Submission";
    $messageContent = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $messageContent, $headers)) {
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        echo "There was an issue with sending your message. Please try again later.";
    }
}
?>