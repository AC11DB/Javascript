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
var textbox = document.getElementById('textbox');
var entertedAmount = Number(parseFloat(textbox.value).toFixed(2));
var maxPrice = Number(parseFloat(5000).toFixed(2));


if (entertedAmount <= maxPrice) {
  console.log(entertedAmount + " less than "+ maxPrice );
    } else {
    alert('Please enter a price less than R');
        textbox.value = 0;
  }
<input id="textbox" type="number" value="522.5886"/>