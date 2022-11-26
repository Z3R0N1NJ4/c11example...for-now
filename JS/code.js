
let evaluateSum = document.getElementById("input");

let addToSum = (number) => {
  evaluateSum.value = evaluateSum.value + number;
}

let EvaluateSum = () => {
  try {
    evaluateSum.value = eval(evaluateSum.value);
  }
  catch (err) {
    alert("Enter a valid Input");
  }
}

let AddToSum = false;
  
function clearSum () {
  evaluateSum.value = " ";
}

function deleteNumber () {
  evaluateSum.value = evaluateSum.value.slice(0, -1);
}




