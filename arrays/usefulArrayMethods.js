// join is used to join elements by sent argument
// length returns the total amount of elements in an array
// concat -- from concatination, connnects two arrays.
// pop -- takes the last element from an array, destructive
// push -- adding element to the end of an array. destructive
// shift -- removes the first element.
// unshift -- adds new element at the beginning.
// sort -- sorts it by alphabelt
// reverse -- sorts in decending

// to sort numbers in an arry, use sort, but pass in this
// list.sort(function(a, b) {a - b;});  -- to change how it is being sorted, just change b to a.
// slice, slices the elements out of an array by index numbers
// splice, has two args, the first on is where to start, the second is how many, is destructive.
//list.splice(0,4) -- it will take 4 elements starting at pos 0. => thing0,thing1,thing2,thing3

var list = [
  "thing0",
  "thing1",
  "thing2",
  "thing3",
  "thing4",
  "thing5",
  "thing6",
];

var list2 = [
  "things",
  "things",
  "things",
  "things",
  "things"
];
list.push("This a thing");

document.getElementById('arr').innerHTML = list;
document.getElementById('arr').innerHTML += "<br> --------------------- <br>"
document.getElementById('arr').innerHTML += list.join("<br>");
alert(list);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
fruits.push("This is a thing.");
alert(fruits);
