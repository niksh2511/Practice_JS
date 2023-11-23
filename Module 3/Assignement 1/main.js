$(document).ready(function () {
    $(":button").click(function (e) {
        e.preventDefault();

        function validate() {
            function validateEmpID() {
                let empID = $("#empid").val();
                let numbers = /[0-9]+/;

                if (empID === "") {
                    $("#spanempid").text("Employee ID should not be blank");
                } else if (!empID.match(numbers)) {
                    $("#spanempid").text("EmployeeID cannot be a character");
                } else if (empID.length < 5) {
                    $("#spanempid").text("EmployeeID should be of at least 5 character long.");
                } else {
                    $("#spanempid").text("");
                }
            }

            function validateUserName() {
                let username = $("#empname").val();
                let char = /^[a-zA-Z, ' ']+$/;

                if (username === "") {
                    $("#spanempname").text("Name should not be blank");
                } else if (!username.match(char)) {
                    $("#spanempname").text("Please enter only characters");
                } else if (username.length < 6 || username.length > 20) {
                    $("#spanempname").text("Name should be between 6 and 20 characters long");
                } else {
                    $("#spanempname").text("");
                }
            }

            function dateValidate() {
                let age = $("#age").val();
            
                if (age === "") {
                    $("#spanage").text("Age cannot be blank");
                } else if (isNaN(age)) {
                    $("#spanage").text("Age should be a number");
                } else if (age <= 0) {
                    $("#spanage").text("Age should not be less than zero");
                } else {
                    $("#spanage").text("");
                }
            }

            // Designation validation
            let designation = $("#designation").val();
            let char = /^[a-zA-Z, ' ']+$/;

            if (designation === "") {
                $("#spandesignation").text("Designation cannot be blank");
            } else if (!designation.match(char)) {
                $("#spandesignation").text("Designation should be in characters");
            } else {
                $("#spandesignation").text("");
            }

            // Salary validation
            let salary = $("#salary").val();
            let num = /[0-9]+/;

            if (salary === "") {
                $("#spansalary").text("Salary cannot be blank");
            } else if (!salary.match(num)) {
                $("#spansalary").text("Salary should be in number");
            } else {
                $("#spansalary").text("");
            }

            // drop down validation
            let cities = $("#location").val();
            if (!cities) {
                $("#spanlocation").text("Please select city");
            } else {
                $("#spanlocation").text("");
            }

            // email validation
            let email = $("#email").val();
            let test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (email === "") {
                $("#spanemail").text("Email cannot be blank");
            } else if (!email.match(test)) {
                $("#spanemail").text("EmailID should be in the proper format.");
            } else {
                $("#spanemail").text("");
            }


            // Joinign date validation
            let joining = $("#joinDate").val();
            if (joining === "") {
                $("#spanjoinDate").text("Joining Date cannot be blank");
            } else {
                $("#spanjoinDate").text("");
            }


            // Conatct number validation
            let phone = $("#contactNumber").val();
            let check = /^\d{10}$/;

            if (phone === "") {
                $("#spancontactNumber").text("Please fill up contact details");
            } else if (!phone.match(check)) {
                $("#spancontactNumber").text("Contact number should be number and 10 digits long");
            } else {
                $("#spancontactNumber").text("");
            }

            // gender validation
            let selectedGender = $("input[name='gender']:checked").val();

            if (!selectedGender) {
                $("#spangender").text("Please select gender");
            } else {
                $("#spangender").text("");
            }


            validateUserName();
            validateEmpID();
            dateValidate();
        }


        validate();
    });
});
