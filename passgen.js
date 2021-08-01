var length=0;
var joinedchar="";
var password="";
var number = "1234567890";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialchar = "!@#$%^&*()_+?><:{}[]";
var compoundchars="";
function genpass() {
length = document.getElementById("length").value;
if(length>15) {
    document.getElementById("resbox").value="Max Length:15";
    document.getElementById("resbox").style.color="red";
} else if(length==="") {
    document.getElementById("resbox").value="Length is Empty";
    document.getElementById("resbox").style.color="red";
}else if(document.getElementById("lower").checked===false && document.getElementById("upper").checked===false && document.getElementById("number").checked===false && document.getElementById("specchar").checked===false) {
    document.getElementById("resbox").value="Select Any One Box";
    document.getElementById("resbox").style.color="red";
}
 else if(document.getElementById("lower").checked || document.getElementById("upper").checked || document.getElementById("number").checked || document.getElementById("specchar").checked) {
    document.getElementById("resbox").value="Generate Password";
    document.getElementById("resbox").style.color="rgb(236, 236, 236)";

    if(document.getElementById("lower").checked) {
        adder(lowercase);
      
    } else {
        compoundchars = compoundchars.replace(/[a-z]/g, "");
        
    }
    if(document.getElementById("upper").checked)
    {
        adder(uppercase);
        
    } else {
        compoundchars = compoundchars.replace(/[A-Z]/g, "");
        
    }
    if(document.getElementById("number").checked) {
        adder(number);
      
    } else {
        compoundchars = compoundchars.replace(/[0-9]/g, "");
        
    }
    if(document.getElementById("specchar").checked) {
        adder(specialchar);
      
    } else {
        compoundchars = compoundchars.replace(/[!|@|#|$|%|^|&|*|(|)|_|+|?|>|<|:|{|}|[|]|]/g, "");
        
    }

    passwordGenerator(length);
}

}

function adder(values) {
    compoundchars = compoundchars+values;    
}

function passwordGenerator(length) {
    password="";
   for(var i=0; i<length;i++) {
      password += compoundchars[Math.floor(Math.random()*compoundchars.length)];
   }
   document.getElementById("resbox").value=password;
}

function copytext() {

document.getElementById("resbox").select();
document.execCommand("copy");

    document.getElementById("changingtext").innerText="Copied!";
    document.getElementById("changingtext").style.color="rgb(12, 197, 12)";

    setTimeout(function() {
        document.getElementById("changingtext").innerText="Copy";
        document.getElementById("changingtext").style.color="rgb(236, 236, 236)";
    }, 1000);
}