function SubmitForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phno=document.getElementById("phno").value;
    if(name && email && phno){
        document.getElementById("confirmation").innerText="registered successfully";
        console.log("details",{
            Name:name,
            Email:email,
            phNo:phno
        });
    }
    else{
        alert("motham nimpu ra puma");
    }
}