//Processing 
function nameCheck(){
    //User inputs data and data is assigned to variables
    let firstnm = document.getElementById("input_firstnm").value;
    let lastnm = document.getElementById("input_lastnm").value;
   
    //Combining first name and last name 
    let concName =  firstnm + " " + lastnm;
    document.getElementById("conc_names").innerHTML = "Aloha! E komo Mai: " + concName.trim();
   
    //Alert to display the length of full name
    let name_length = concName.length -1;
    alert("Your name has a length of: " + name_length + " characters");
    
    //Evaluates if full name is greater or less than 20 characters and displays output
    if(name_length > 20){
        alert("Your name is more than 20 characters! Please re-enter first and last name.");
    }
    else{
         alert("Your name is less than 20 characters!");
    }
    //Evaluates if zipcode is equal to 5 characters and displays output
    let zipCode = document.getElementById("input_zipc").value;
    if(zipCode.length == 5){
        alert("Your zipcode " + zipCode + " is valid!")
    }
    else{
        alert("Your zipcode is NOT valid! Please re-enter a valid Zip code of 5 characters.")
    }
    //Displays output of state
    let city = document.getElementById("input_city").value;
    alert("Your city is: " + city + "! Awesome!");
    
    //Evaluates if state is equal to 2 characters and displays output
    let state = document.getElementById("input_state").value;
    if(state.length == 2){
        alert("Your state " + state + " is valid!")
    }
    else{
        alert("Your state is NOT valid! Please re-enter a valid state abbreviation of 2 characters.")
    }
}