// Frontend and DOM Manipulation
//
// 	16.	Change Text Content
// Write a script that changes the text content of a <p> element with the ID demo to "Hello, World!".

document.getElementById("demo").innerText = "Hello, World!";

// 	17.	Create and Append Elements
// Write a script to create a new <li> element with the text "New Item" and append it to a <ul> with the ID list.
const li = document.createElement("li");
li.innerText = "New Item";
document.getElementById("list").appendChild(li);
// 	18.	Toggle Class
// Write a script to toggle the class highlight on a <div> with the ID box whenever it is clicked.
document.getElementById("box").addEventListener("click", function () {
  this.classList.toggle("highlight");
});
// 	19.	Event Listener
// Write a script that adds a click event listener to a button with the ID btn and logs "Button clicked!" to the console.
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!");
});
// 	20.	Form Input Value
// Write a script to capture the value entered in an input field with the ID username when a button with the ID submit is clicked, and log it to the console.
document.getElementById("submit").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  console.log(username);
});
