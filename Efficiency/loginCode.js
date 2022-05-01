function checkCreds(){
    //getting the data needed 
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    console.log("First Name:" + firstName);
    var lastName = document.getElementById("lName").value;
    console.log("Last Name:" + lastName);
    var fullName = firstName + " " + lastName;
    console.log("Full Name:" + fullName);
    var badgeNumber = document.getElementById("badgeID").value;
    console.log("The badge number is " + badgeNumber);

    //input validation for name
    var nameLength = fullName.length;
    console.log("The length of the fullName variable is " + nameLength);

    if(nameLength > 20 || nameLength < 3){
        document.getElementById("loginStatues").innerHTML = "Inalid full name! Please try again.";
    } else if(badgeNumber > 999 || badgeNumber < 1){
        document.getElementById("loginStatues").innerHTML = "Invalid Badge Number! Please try again";
    } else  {
        document.getElementById("loginStatues").innerHTML = "Access granted, Welcome " + fullName;
        alert("Access granted, Welcome " + fullName);
        location.replace("./UATSpacePageV2.html");
    }
}