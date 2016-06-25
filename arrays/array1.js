// arrays - series of values that are next to each other.

// [0] | [1] | [2] | [3] |


var products = [];

var products = [
  "milk",
  "eggs",
  "bacon"
];

products[products.length] = "new value";
products[products.length] = "another new value";
alert(products);
alert(products[products.length-1]);

var teams = document.getElementById('football').getElementsByTagName('li');
alert(teams[teams.length-1].innerHTML);
