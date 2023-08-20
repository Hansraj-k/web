document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get values from form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  
  // EmailJS configuration
  emailjs.init('fLI6ux95aNzX0ndO7');
  
  // Send email
  emailjs.send("service_0vcsjux", "template_vei2tvm",{
    name: name,
    email: email,
    number: number,
    subject: subject,
    message: message
  })
  .then(function(response) {
    alert("Email sent successfully!");
    // Clear form inputs
    document.getElementById("contact-form").reset();
  }, function(error) {
    console.error("Email sending failed:", error);
  });
});
