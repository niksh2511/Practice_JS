Create table Treatment;

create table Doctor (
	DoctorID Int Primary key,
	DoctorName varchar(50),
	Foreign key (DoctorID) REFERENCES Treatment(DoctorID)
);

insert into Doctor(DoctorID, DoctorName)
values
(1, 'Bhargav'),
(2, 'Dr.karan');

Create table Patient (
	PatientID INT PRIMARY KEY,
	Name varchar(50),
	City varchar (200),
	DOB varchar(50),
	DateofAppointment varchar(50),
	Foreign key (PatientID) REFERENCES Treatment(PatientID)
);

insert into Patient (PatientID, Name, City, DOB, DateofAppointment)
values 
(1, 'nikhil', 'Ahmedabad','25/11/2000', '22/10/2023'),
(2, 'mihir', 'hyderabad','25/11/2000', '31/10/2023'),
(3, 'swasti', 'Ahmedabad','25/11/2000', '22/10/2023'),
(4, 'anuj', 'Kolkatta','25/11/2000', '22/10/2023');

Create table Treatment(
	DoctorID int,
	PatientID int, 
	Date varchar(50), 
	Prescription varchar (50)
	Foreign key (PatientID) REFERENCES Patient(PatientID),
	Foreign key (DoctorID) REFERENCES Doctor(DoctorID)
);

insert into Treatment (DoctorID, PatientID, Date, Prescription)
VALUES 
(1, 1, '31/10/2023', 'Fever'),
(2, 2, '30/09/2023', 'Cold'),
(3, 3, '12/10/2023', 'Headcahe'),
(4, 4, '31/10/2023', 'Pain');


