var form=document.querySelector('form')
function submitForm()
{
 console.log("formSubmission");
  var fname=document.getElementById("firstName").value;
  var lname=document.getElementById("lastName").value;
  var email=document.getElementById("email").value;
  var subject=document.getElementById("subject").value; 
  var message=document.getElementById("message").value;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "gunasekarang34539@gmail.com",
    Password : "7A9DB4EE83B90B27D7C4ABD931A014DB0CF3",
    To : 'gunasekarang34539@gmail.com',
    From : "gunasekarang34539@gmail.com",
    Subject : subject,
    Body : message
}).then(
  message => {
    if(message=="OK")
  {
    Swal.fire({
        title: "Success!",
        text: "Email Sent Successfully!",
        icon: "success"
      });
  }
  }
);

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    submitForm();
})

}