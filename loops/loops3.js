// loop in for processing objects.

person = {
  name: "Adam",
  surname: "Ross",
  age: 32
};

football = [
  "Saints",
  "Lions",
  "Eagles"
];

var teams = document.getElementById('basketball').getElementsByTagName('li');



for (var something in football)
{
  alert(football[something]);
};

// for (var something in person)
// {
//   alert(person[something]);
// };



for (var property in teams)
{
  if (typeof(teams[property]) !== "object")
    break;
  alert(teams[property].innerHTML);
};
