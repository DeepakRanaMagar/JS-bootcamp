function showPassword(){
    var a = document.getElementById("password");
  if (a.type === "password") {
    a.type = "text";
  } else {
    a.type = "password";
  }
}