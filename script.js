function submitform(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phno=document.getElementById("phno").value;
    var gender=document.getElementById("gender").value;
    var dept=document.getElementById("dept").Value;
    if(name==""||email==""||phno==""||gender==""||dept==""){
        alert("please fill all the details");
    }
    else if(!email.includes("@")||!email.includes(".")){
        alert("please enter valid email");
    }
    else if(phno.length!=10||isNaN(phno)) alert("invalid");
    else{
        alert("registered successfully"+name+" "+email+" "+phno);
    }
}