function validate(){
 var username=document.getElementById("uname");
 var password =document.getElementById("pswrd");

 if(username.value==""||password.value=="")
 {
     alert("Enter all the values");
     return false;
 }
 else{
     true;
 }
}