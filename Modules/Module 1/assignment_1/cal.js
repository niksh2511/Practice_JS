let Operator;

function dis(val) {
  if (val.match(/[\+\-\*\/]/)) {
    if (!Operator) {
      document.getElementById("result").value += val;
      Operator = true;
    }
  } else {
    document.getElementById("result").value += val;
    Operator = false;
  }
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value = event.key;
}

function clr() {
    document.getElementById("result").value = ""
}


function solve() {
    let express = document.getElementById("result").value;
    let operator = express.match(/[\+\-\*\/]/);

    if (operator) {
        let operands = express.split(operator[0]);
        console.log(operands)
        let a = parseFloat(operands[0]);
        let b = parseFloat(operands[1]);

        switch (operator[0]) {  
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }

        document.getElementById("result").value = result;
    } else {
        document.getElementById("result").value = "Invalid input";
    }

}

 

 