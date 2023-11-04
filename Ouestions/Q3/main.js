const doctorsData = [
  {

    "id": 1,

    "name": "Dr.Bhargav",

    "controlId": "1",

    "parentId": null

  },

  {

    "id": 2,

    "name": "Dr.Karan",

    "controlId": "2",

    "parentId": null

  },

  {

    "id": 3,

    "name": "Dr.Sanket",

    "controlId": "3",

    "parentId": null

  }
];
const patientsData = [
  {

    "id": 101,

    "name": "Mihir",

    "controlId": "101",

    "parentId": null

  },

  {

    "id": 102,

    "name": "Henil",

    "controlId": "102",

    "parentId": null

  },

  {

    "id": 103,

    "name": "Darshil",

    "controlId": "103",

    "parentId": null

  },

  {

    "id": 104,

    "name": "Nikunj",

    "controlId": "104",

    "parentId": null

  },

  {

    "id": 105,

    "name": "Meet",

    "controlId": "105",

    "parentId": null

  }
];
const treatmentsData = [
  {

    "Id": 1105,

    "patientId": 105,

    "doctorId": 1

  },

  {

    "Id": 1106,

    "patientId": 104,

    "doctorId": 1

  },

  {

    "Id": 1107,

    "patientId": 101,

    "doctorId": 3

  },

  {

    "Id": 1108,

    "patientId": 105,

    "doctorId": 2

  },

  {

    "Id": 1109,

    "patientId": 102,

    "doctorId": 3

  },

  {

    "Id": 1110,

    "patientId": 103,

    "doctorId": 3

  }
];

// Doctors dropdown
function bindDoctorsToDropdown() {
  const doctorsDropdown = document.getElementById('doctor-details');
  doctorsData.forEach(doctor => {
    const option = document.createElement('option');
    option.value = doctor.id;
    option.text = doctor.name;
    doctorsDropdown.appendChild(option);
  });           
} 

// patients dropdown  
function bindPatientsToDropdown() {
  const patientsDropdown = document.getElementById('patient-details');
  patientsData.forEach(patient => {
    const option = document.createElement('option');
    option.value = patient.id;
    option.text = patient.name;
    patientsDropdown.appendChild(option); 
  });
}

// Function to sub
function handleSubmit(e) {
  e.preventDefault();
  const selectedDoctorId = document.getElementById('doctor-details').value;
  const selectedPatientId = document.getElementById('patient-details').value;
  const selectedDate = document.getElementById('date-of-appointment').value;

  if (selectedDoctorId && selectedPatientId && selectedDate) {
    const treatmentId = Math.random();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    treatmentsData.push({
      Id: treatmentId,
      patientId: parseInt(selectedPatientId),
      doctorId: parseInt(selectedDoctorId),
      dateOfAppointment: formattedDate
    });

    updateAppointmentTable();
    document.getElementById('doctor-details').value = '';
    document.getElementById('patient-details').value = '';
    document.getElementById('date-of-appointment').value = '';
    document.getElementById('DateRequired').innerText = '';
  } else {
    const errorDiv = document.getElementById('NameRequired');
    errorDiv.innerText = 'Select both Doctor and Patient for add treatment';

    const dateError = document.getElementById('DateRequired');
    dateError.innerText = 'Date required';
  }
}

function updateAppointmentTable() {
  const appointmentTable = document.getElementById('appointment-list');
  const selectedDoctorId = document.getElementById('doctor-details').value;
  const selectedPatientId = document.getElementById('patient-details').value;

  // Filter treatmentsData based on selected doctor and patient
  const filteredTreatments = treatmentsData.filter(treatment => treatment.doctorId == selectedDoctorId && treatment.patientId == selectedPatientId);

  // Add rows to the table
  filteredTreatments.forEach(treatment => {
    const row = appointmentTable.insertRow();
    row.insertCell(0).innerHTML = treatment.Id;
    row.insertCell(1).innerHTML = treatment.doctorId;
    row.insertCell(2).innerHTML = doctorsData.find(doctor => doctor.id == treatment.doctorId).name;
    row.insertCell(3).innerHTML = treatment.patientId;
    row.insertCell(4).innerHTML = patientsData.find(patient => patient.id == treatment.patientId).name;
    row.insertCell(5).innerHTML = formatAppointmentDate(treatment.dateOfAppointment);
  });
}

function formatAppointmentDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  console.log(dateString)
  return date;
}

// Calling function
bindDoctorsToDropdown();
bindPatientsToDropdown(); 