const data = [
    {
        "UserName": "Viral Patel",
        "Department": "Computer Science",
        "MarksObtained": {
            "ComputerNetworks": 67,
            "DBMS": 90,
            "AI": 12,
            "pythonProgramming": 45
        }
    },

    {
        "UserName": "Krunal Chauhan",
        "Department": "Information Technology",
        "MarksObtained": {
            "ComputerNetworks": 9,
            "DBMS": 0,
            "AI": 9,
            "pythonProgramming": 8
        }
    },

    {
        "UserName": "Saumya Shah",
        "Department": "Computer Science",
        "MarksObtained": {
            "ComputerNetworks": 69,
            "DBMS": 65,
            "AI": 67,
            "pythonProgramming": 72
        }
    },

    {
        "UserName": "Nisarg Patel",
        "Department": "Information Technology",
        "MarksObtained": {
            "ComputerNetworks": 50,
            "DBMS": 45,
            "AI": 35,
            "pythonProgramming": 40
        }
    }
];



const table = document.querySelector('table');

        data.forEach(student => {
            const marks = student.MarksObtained;
            const totalMarks = marks.ComputerNetworks + marks.DBMS + marks.AI + marks.pythonProgramming;
            const percentage = (totalMarks / 4);

 

            let grade;
            if (percentage >= 85) grade = 'A';
            else if (percentage >= 70 && percentage < 85) grade = 'B';
            else if (percentage >= 50 && percentage < 70) grade = 'C';
            else if (percentage >= 35 && percentage < 45) grade = 'D';
            else grade = 'Fail';
 
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${student.UserName}</td>
                <td>${student.Department}</td>
                <td>${marks.ComputerNetworks}</td>
                <td>${marks.DBMS}</td>
                <td>${marks.AI}</td>
                <td>${marks.pythonProgramming}</td>
                <td>${percentage}%</td>
                <td>${grade}</td>
            `;
            
            table.appendChild(row);

        });