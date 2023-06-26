function showpass(){
    var x = document.querySelector("#loginpass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function showsignuppass(){
    var y = document.querySelector("#signuppass");
  if (y.type == "password") {
    y.type = "text";}
     else {
    y.type = "password";}


    var z = document.querySelector("#signupcpass");
  if (z.type == "password") {
    z.type = "text";}
     else {
    z.type = "password";}
}
