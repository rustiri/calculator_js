function simpleCalc(){

  var num1 = parseInt(document.getElementById('number1')).value;
  var num2 = parseInt(document.getElementById('number2')).value;
  var operator = document.getElementById('operator').value;


  var calculate;

  if(operator == "add"){
    calculate = num1 + num2;
  } else if(operator == "sub"){
    calculate = num1 - num2;
  } else if (operator == "mul"){
    calculate = num1 * num2;
  } else if(operator == "divide"){
    calculate = num1 / num2;
  }

  document.getElementById('results').innerHTML = calculate;

}

function calcAdd(){

  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  //var operator = document.getElementById('operator').value;
  var calculate;

  calculate = num1 + num2;

  document.getElementById('results').innerHTML = "Answer: " +calculate;
}

function calcSub(){

  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  //var operator = document.getElementById('operator').value;
  var calculate;

  calculate = num1 - num2;

  document.getElementById('results').innerHTML = "Answer: " +calculate;
}

function calcMul(){

  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  //var operator = document.getElementById('operator').value;
  var calculate;

  calculate = num1 * num2;

  document.getElementById('results').innerHTML = "Answer: " +calculate;
}

function calcDivide(){

  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  //var operator = document.getElementById('operator').value;
  var calculate;

  calculate = num1 / num2;

  document.getElementById('results').innerHTML = "Answer: " +calculate;
}
