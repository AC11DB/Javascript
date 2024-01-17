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

console.log(user[0].firstName, user[0].lastName + " Likes to play some classical piano songs");
console.log("AND")
console.log(user[1].firstName, user[1].lastName + " and" + " " + user[2].firstName, user[2].lastName + " made good piano scores")

//functions comparing two numbers
function compareNumbers(num1, num2) {}
  // Check if num1 is greater than num2
  if (num1 > num2) {
      return num1; // Return num1 if it's greater
  } else {
      return num2;
  }
function getFullName(user) {
  // Concatenate the firstName and lastName properties of the user object
  return user.firstName + " " + user.lastName;
};