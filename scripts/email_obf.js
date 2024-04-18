// script w/ function to obfuscate email address

var username = "macellariv"; 
var domain = "gmail.com"; 
      

function generateEmail() {
    var emailAddress = username + "@" + domain;
    document.getElementById("contact-email").innerHTML = "<a href='mailto:" + emailAddress + "'>" + emailAddress + "</a>";
}
      
// Call the function to generate the obfuscated email address
generateEmail();