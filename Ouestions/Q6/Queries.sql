-- 1--
select Patient.Patient.name, Patient.PatientID as Deatils from Patient
where DateofAppointment = '31/10/2023'

-- 2--
select Patient.Patient.name, Patient.PatientID from Deatils Patient
where DateofAppointment between '1/06/2022' to '1/06/2022'

--3 --
select Patient.Patient.name, Patient.PatientID from Patient
where DOB > 10;
 
