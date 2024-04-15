
function myFunction(){
    let num1 = parseFloat(document.getElementById("inputNum1").value);
    let num2 = parseFloat(document.getElementById("inputNum2").value);
    let calculate = document.getElementById("inputState").value;

    // if(isNaN(num1) || isNaN(num2) || calculate === NaN ){
    //     document.getElementById("inputResult").innerText = 'Error! Please enter valid number';
    // }

    if(calculate === "+"){
        let num1 = document.getElementById("inputNum1").value;
        let num2 = document.getElementById("inputNum2").value;
        document.getElementById("inputResult").value = parseFloat(num1) + parseFloat(num2);
    }
    if(calculate === "-"){
        let num1 = document.getElementById("inputNum1").value;
        let num2 = document.getElementById("inputNum2").value;
        document.getElementById("inputResult").value = num1 - num2;
    }
    if(calculate === "*"){
        let num1 = document.getElementById("inputNum1").value;
        let num2 = document.getElementById("inputNum2").value;
        document.getElementById("inputResult").value = num1 * num2;
    }
    if(calculate === "/"){
        let num1 = document.getElementById("inputNum1").value;
        let num2 = document.getElementById("inputNum2").value;
        document.getElementById("inputResult").value = num1 / num2;
    }

}

