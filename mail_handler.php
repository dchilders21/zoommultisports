<?php 
if(isset($_POST['submit'])){
    $to = "trikeith@gmail.com"; // this is your Email address
    $from = "info@zoommultisports.com"; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Form submission";
    $message = $first_name . " " . $last_name . " (" . $_POST['email'] . ") wrote the following:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.<br />";
    echo "Return to <a href=\"http://www.zoommultisports.com\">Homepage</a>";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>