// Import the HTTP module
const http = require("http");

// Import the 'today' module
const today = require("./today");

// Define the request listener function
const requestListener = function (req, res) {
  res.writeHead(200); // Set the status code to 200 (OK)
  const name = "Ricardo";
  let date = today.getDate();
  let hour = today.getHour();
  let greeting = "Hello";
  // Send the response with the current date from the 'today' module
  if (hour >= 0 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 20) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good night";
  }

  res.end(`${greeting}, ${name}! The date today is ${date}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log("Server listening on port: " + port);
