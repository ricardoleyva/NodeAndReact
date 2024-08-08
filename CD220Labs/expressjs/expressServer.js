// Import the Express.js library
const express = require("express");

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];

// Define the root route to send a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
app.get("/loginDetails", (req, res) => {
  res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
  loginDetails.push({ name: req.params.name, login_time: new Date() });
  res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name
app.get("/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

app.get("/fetchMonth/:num", (req, res) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const num = req.params.num;
  if (num > 0 && num <= 12) {
    res.send("Month with number " + num + " is " + months[num-1]);
  } else {
    res.send(
      "Please request a number between 1 and 12. Your request was: " + num
    );
  }
});

// Start the server and listen on port 3333
app.listen(3333, () => {
  console.log(`Listening at http://localhost:3333`);
});
