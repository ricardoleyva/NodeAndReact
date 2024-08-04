// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
  // Get the current date and time in the timezone "Australia/Brisbane"
  let time = new Date().toLocaleString("en-US", {
    timeZone: "America/Detroit",
  }); //, {timeZone: "Australia/Brisbane"}
  return time; // Return the formatted date and time
};

module.exports.getHour = function getHour() {
  let hour = new Date().getHours();
  return hour;
};
