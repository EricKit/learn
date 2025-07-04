// This is a function. Don't worry about the format for now. It doesn't run right away.
let addFunction = () => {
  const firstNumber = document.getElementById("first").value;
  const secondNumber = document.getElementById("second").value;
  const result = parseInt(firstNumber) + parseInt(secondNumber);
  document.getElementById("result").innerText = result;
};

// Whenever the button with an ID of "add" is clicked, it runs the above function.
document.getElementById("add").onclick = addFunction;
