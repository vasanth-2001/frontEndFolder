function checkData() {
    // window.alert("hi");
    // let uname=document.getElementById("fname").value
    let uname=document.myform.fname.value;
    let uedu=document.myform.edu;
    let regName="^[a-zA-Z ]{3,20}$";

    if (uname.trim() === "") {
        window.alert("fullname Required ");
        document.getElementById("fname").focus();
        return false;
    }
    if(!uname.trim().match(regName)){
        window.alert("fullname must contain only character min-3 and max-20");
        document.getElementById("fname").focus();
        return false;
    }
    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false){
        window.alert("please select your qualification");
        return false;
    }
}