function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bisenchetna3@gmail.com",
        Password : "6D56066F4A4B960234AB185605EE01AB681F",
        To : 'bisenchetna3@gmail.com',
        From : document.getElementById("email1").value,
        Subject : "New contact form Enquiry",
        Body : "Name:"+ document.getElementById("name1").value
               +"<br> Email: " +document.getElementById("email1").value
               +"<br> Phone No.: " +document.getElementById("phone").value
               +"<br> Message: " +document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}