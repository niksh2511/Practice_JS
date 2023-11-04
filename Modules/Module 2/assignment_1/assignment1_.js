function validateDate() {
    let dateInput = document.getElementById("date").value;
    let datePattern = /^\d{2}-\d{2}-\d{4}$/;

    if (!datePattern.test(dateInput)) {
      alert("Please enter the date in MM-DD-YYYY format.");
      return false;
    }

    let parts = dateInput.split("-");
    let month = parseInt(parts[0]);
    let day = parseInt(parts[1]);


    if (month < 1 || month > 12) {
      alert("Month should be within the range 1 to 12.");
      return false;
    }

    if (day < 1 || day > 31) {
      alert("Day should be within the range 1 to 31.");
      return false;
    }


    return true;
  }

// 