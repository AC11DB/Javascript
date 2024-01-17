//grouped user for array
const user = [
  {
  userId: 1234,
  firstName: "Angel",
  lastName: "Cadiz",
  isActive: true,
  },
  {
    userId: 1235,
    firstName: "Fryderyk",
    lastName: "Chopin",
    isActive: false,
  },
  {
  userId: 1236,
  firstName: "Ludwig",
  lastName: "Beethoven",
  isActive: true,
  }
];

//display output
console.log(user[0].firstName, user[0].lastName + " Likes to play some classical piano songs");
console.log("AND")
console.log(user[1].firstName, user[1].lastName + " and" + " " + user[2].firstName, user[2].lastName + " made good piano scores")

//comparing numbers
function compareNumbers(num1, num2) {
  if (num1 > num2) {
      return num1;
  } else if (num2 > num1) {
      return num2;
  } else {
      return "Numbers are equal"; // If both numbers are equal
  }
}

// Example usage of the function
var result = compareNumbers(10, 5);

// Log the result to the console for testing
console.log("The larger number is: " + result);