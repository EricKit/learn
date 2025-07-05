// This is a function. Don't worry about the format for now. It's a block of code that is executed when
//  you tell it to execute. You will notice that the function, which starts with () => {, is stored in a
//  variable named addFunction. We can use this variable later.
const addFunction = () => {
  const firstNumber = document.getElementById("first").value; // Get the first number
  const secondNumber = document.getElementById("second").value; // Get the second number
  const result = parseInt(firstNumber) + parseInt(secondNumber); // Convert the strings to numbers and add them
  document.getElementById("result").innerText = result; // Set the result!
};

// Whenever the button with an ID of "add" is clicked, it runs the named function.
document.getElementById("add").onclick = addFunction;

// You could also do this to get automatic results anytime they change the value.
document.getElementById("first").onchange = addFunction;
