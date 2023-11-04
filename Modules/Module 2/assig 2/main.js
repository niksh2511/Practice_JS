document.addEventListener('DOMContentLoaded', function () {

    let jsonData = {


        "SellerDetails": {

            "SellerName": "Ravi Gupta",

            "SellerAddress": "Surdhara Complex, Naranpura",

            "City": "Ahmedabad",

            "State": "Gujarat",

            "Zip": 382481,

            "Phone": 8989898989,

            "Email": "seller@gmail.com"

        },


        "BuyerDetails": {

            "CompanyName": "Radixweb",

            "Name": "Nitish Patel",

            "Address": "B/H Nirma University, Ekyarth, Near Vandemataram Fabula, Malabar County Rd",

            "City": "Ahmedabad",

            "State": "Gujarat",

            "Zip": 382481,

            "Phone": 98989898,

            "Email": "buyer@gmail.com"

        },

        "ItemDetails": [

            {

                "ItemName": " Item1",

                "Description": "Description",

                "Quntity": 1,

                "Price": "$100",

                "Tax": "10%",

                "Amount": "$110"

            },

            {

                "ItemName": " Item2",

                "Description": "Description",

                "Quntity": 1,

                "Price": "$200",

                "Tax": " 20%",

                "Amount": "$240"

            },

            {

                "ItemName": "Item3",

                "Description": "Description",

                "Quntity": 3,

                "Price": "$300",

                "Tax": "10%",

                "Amount": "$990"

            },

            {

                "ItemName": " Item4",

                "Description": "Description",

                "Quntity": 1,

                "Price": "$400",

                "Tax": "10%",

                "Amount": "$440"

            },

            {

                "ItemName": " Item5",

                "Description": "Description",

                "Quntity": 1,

                "Price": "$500",

                "Tax": "10%",

                "Amount": "$550"

            },

            {

                "ItemName": " Item6",

                "Description": "Description",

                "Quntity": 2,

                "Price": "$600",

                "Tax": "10%",

                "Amount": "$1320"

            },

            {

                "ItemName": " Item7",

                "Description": "Description",

                "Quntity": 1,

                "Price": "$700",

                "Tax": "10%",

                "Amount": "$770"

            },

            {

                "ItemName": " Item8",

                "Description": "Description",

                "Quntity": 1,

                "Price": "$800",

                "Tax": "10%",

                "Amount": "$880"

            },

            {

                "ItemName": " Item9",

                "Description": "Description",

                "Quntity": 1,

                "Price": "$900",

                "Tax": "15%",

                "Amount": "$1035"

            },

            {

                "ItemName": " Item10",

                "Description": "Description",

                "Quntity": 1,

                "Price": "$450",

                "Tax": "10%",

                "Amount": "$495"

            }
        ]
    }

    // Calculate total amount
    let totalAmount = jsonData.ItemDetails.reduce(function (total, item) {
        return total + parseFloat(item.Amount.slice(1));
    }, 0);

    // Update the table
    let table = document.getElementById('table');
    let tbody = table.getElementsByTagName('tbody')[0];

    // Loop through item details and add rows to the table
    jsonData.ItemDetails.forEach(function (item) {
        let row = tbody.insertRow();
        row.insertCell(0).textContent = item.ItemName;
        row.insertCell(1).textContent = item.Description;
        row.insertCell(2).textContent = item.Quntity;
        row.insertCell(3).textContent = item.Price;
        row.insertCell(4).textContent = item.Tax;
        row.insertCell(5).textContent = item.Amount;
    });

    // Add total row to the table
    let totalRow = tbody.insertRow();   
    const ceil = totalRow.insertCell(0);
    const cell2 = totalRow.insertCell(1);

    ceil.innerHTML = 'Total'; ;lk
    ceil.colSpan = 2;  
    ceil.style.textAlign = "center";
    ceil.style.fontSize = "x-large"

    cell2.innerHTML = "$" + totalAmount.toFixed(2);
    cell2.colSpan = 4;
    cell2.style.textAlign = "center";
    cell2.style.fontSize = "x-large"       
      

      
});