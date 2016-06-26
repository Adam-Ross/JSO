// loops can execute a block of code as many times as yo want.

var arr = [
  "the first thing",
  "php ",
  " ruby ",
  " js ",
  " something ",
  " new last thing "
];
//
var x = document.getElementById('test');



i = 0;
while(i < arr.length)
{ if (arr[i] === " ruby ")
    x.innerHTML += " I tell ya what, I love this ruby." + "<br>";
  else if (arr[i] === " js ")
    x.innerHTML += " I fucking hate Javascript." + '<br>';
  else
  x.innerHTML += arr[i] + "<br>"

  i++;
};

// function getTeams(idOfList) {
//
//   var teams = document.getElementById(idOfList).getElementsByTagName("li");
//
//
//   var i = 0;
//
//     while(i < teams.length)
//       {
//         test.innerHTML += teams[i].innerHTML + '<br>';
//         i++;
//       };
//
// };
//
// getTeams('football');

// function getTeams(listOfTeams)
// {
//   var teams = document.getElementById(listOfTeams).getElementsByTagName("li");
//   var i = 0;
//
//   while(i < teams.length)
//   {
//     test.innerHTML += teams[i].innerHTML + "<br>";
//     i++;
//   }
// };
//
// getTeams('football');

// function getTeams(idOfTeams) {
//   var teams = document.getElementById(idOfTeams).getElementsByTagName('li');
//   var i = 0;
//
//   while(i < teams.length)
//   {
//     test.innerHTML += teams[i].innerHTML + "<br>";
//     i++;
//   }
// };
//
// getTeams('basketball');

function getTeams(idOfTeams) {
  var teams = document.getElementById(idOfTeams).getElementsByTagName('li');
  var i = 0;

  while(i < teams.length) {
    test.innerHTML += teams[i].innerHTML + "<br>";
    i++;
  }
};

getTeams('football');
