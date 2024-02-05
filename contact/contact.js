var form=document.querySelector('#contactForm');
function submitForm()
{
  var fname=document.getElementById("firstName").value;
  var lname=document.getElementById("lastName").value;
  var email=document.getElementById("email").value;
  var subject=document.getElementById("subject").value; 
  var message=document.getElementById("message").value;
  const messageContent=`FirstName:${fname}<br>
                   lastName:${lname}<br>
                   Email:${email}<br>
                   Message:${message}`;
  Email.send({
    SecureToken:"c72ed293-eec3-4c78-898d-3fddc086452c",
    To : 'gunasekarang34539@gmail.com',
    From :'gunasekarang34539@gmail.com',
    Subject : subject,
    Body : messageContent
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
}
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    submitForm();
    form.reset();
})
form.reset();

