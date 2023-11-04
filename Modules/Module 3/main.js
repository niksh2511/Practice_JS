document.getElementById('employeeForm').addEventListener('submit', function(event) {
    // Employee ID validation
    const employeeID = document.getElementById('employeeID').value;
    if (employeeID.length < 5) {
        alert('Employee ID must be at least 5 characters long.');
        event.preventDefault();
        return;
    }
 
    // Age validation
    const age = document.getElementById('age').value;
    if (isNaN(age)) {
        alert('Age must be a number.');
        event.preventDefault();
        return;
    }
 
    // Date of Joining validation
    const joinDate = document.getElementById('joinDate').value;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(joinDate)) {
        alert('Date of Joining must be in YYYY-MM-DD format.');
        event.preventDefault();
        return;
    }
 
    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email ID must be in proper format.');
        event.preventDefault(); 
        return;
    }
});