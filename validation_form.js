function validationForm(e) {
    e.preventDefault();
    console.log(e)

    //get name
    let firstName = document.getElementById("FirstName");
    let lastName = document.getElementById("LastName");
    let dob = document.getElementById("DOB");

    //Gender
    let male = document.getElementById("Male");
    let female = document.getElementById("Female");



    //hobbies
    let reading = document.getElementById("Reading");
    let chess = document.getElementById("Chess");
    let badminton = document.getElementById("Badminton");
    let hockey = document.getElementById("Hockey");


    // get error
    let firstnameError = document.getElementById("FirstNameError");
    let lastnameError = document.getElementById("LastNameError");
    let dobError = document.getElementById("DOBError");
    let genderError = document.getElementById('GenderError');
    let hobbiesError = document.getElementById("HobbiesError")

    let valid = true;          

    // first name
    if (firstName.value == "") {
        firstnameError.innerHTML = "First Name cannot be Blank";
        valid = false;
    }

    // last name
    if (lastName.value == "") {
        lastnameError.innerHTML = "Last Name cannot be Blank";
        valid = false;
    }

    // DOB
    if (dob.value == "") {
        dobError.innerHTML = "Please Select Date of Birth";
        valid = false;
    }  

    // Gender
    if (!male.checked && !female.checked) {
        genderError.innerHTML = "Please select Gender";
        valid = false;

    }

    // hobbies error
    if (!reading.checked && !chess.checked && !badminton.checked && !hockey.checked) {
        hobbiesError.innerHTML = "Please select Hobby";
        valid = false;

    }

    // inserting data in table
    if (valid) {
        var formData = document.getElementById("tblOutput");


        var fname = document.getElementById("FirstName").value;
        var lname = document.getElementById("LastName").value;
        var date = document.getElementById("DOB").value;
        var gender = document.querySelector('input[name="gender"]:checked').value;

        // storing hobbies in array and iterating it, and then display in tables
        var hobbies = document.querySelectorAll('input[name="hobbies"]')

        let checkedHobbiesArr = [];  // created an empty array


        hobbies.forEach(element => {  
            if (element.checked) checkedHobbiesArr.push(element.value)
        });

        console.log(checkedHobbiesArr)

        document.getElementById('tbody').innerHTML += 
            `<tr>
                <th>${fname}</th>
                <th>${lname}</th>
                <th>${date}</th>
                <th>${gender}</th>
                <th>${checkedHobbiesArr}</th>
            </tr>`
        

    }

    return valid;
}


