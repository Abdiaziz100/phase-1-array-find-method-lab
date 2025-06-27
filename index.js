// code your solution here
// Sample data
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

// Function to find the year the team won the Superbowl
function superbowlWin(record) {
  const win = record.find(game => game.result === "W");
  return win ? win.year : undefined;
}

// Log the result (for manual testing)
console.log(superbowlWin(record)); // Output: "2015"

// Export the function for testing purposes
module.exports = superbowlWin;

