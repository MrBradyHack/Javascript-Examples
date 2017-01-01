// This is how you comment in Javascript. 
// Form validation from the client side.
// Null is an absence of a value. An empty string is a value, but is just empty.

function validateForm()
{
  var firstName = document.forms["frmMain"]["txtFirstName"].value;
  var lastName = document.forms["frmMain"]["txtLastName"].value;
  var email = document.forms["frmMain"]["txtEmail"].value;
  var textarea = document.forms["frmMain"]["textarea"].value;

  if (firstName == null || firstName == "")
  {
    alert("First name must be filled out");
    return false;
  }

  if (lastName == null || lastName == "")
  {
    alert("Last name must be filled out");
    return false;
  }
  
  if (email == null || email == "")
  {
    alert("Email must be filled out");
    return false;
  }
  
  if (textarea == null || textarea == "")
  {
    alert("Message must be filled out");
    return false;
  }

    alert("Please submit the form!");
    return true;
}