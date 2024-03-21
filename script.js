var calculationDisplay = document.querySelector("#display");
var operatorDisplay = document.querySelector("#operator_display");
var before_calculation;
var after_calculation;
var final_result;
function showToDisplay(value) {
  document.querySelector("#display").value += value;
}

function removeOneFromDisplay(){
    calculationDisplay.value=`${calculationDisplay.value.slice(0,-1)}`;
}

function removeFromDisplay() {
  document.querySelector("#display").value = "";
  document.querySelector("#operator_display").value = "";
}

function showOnOperatorDisplay(value) {
  if (calculationDisplay.value == "") {
    alert("Please enter some value again");
  } else {
    before_calculation = Number(calculationDisplay.value);
    calculationDisplay.value = "";
    operatorDisplay.value = value;
  }
}

function final_calculation() {
  if (operatorDisplay.value == "") {
    alert("Please choose the operator");
  } else {
    after_calculation=Number(calculationDisplay.value);
    calculationDisplay.value="";

    switch (operatorDisplay.value) {
      case "X":
        final_result = after_calculation * before_calculation;
        break;
      case "%":
        final_result = after_calculation % before_calculation;
        break;
      case "/":
        final_result = after_calculation / before_calculation;
        break;
      case "-":
        final_result = after_calculation - before_calculation;
        break;
      case "+":
        final_result = after_calculation + before_calculation;
        break;
    }
    console.log(final_result);
    calculationDisplay.value = final_result;
    operatorDisplay.value="";
  }
}
