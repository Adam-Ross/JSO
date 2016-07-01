// loops can execute a block of code as many times as you want.

arr = [
  "Saints",
  "Mavericks",
  "Cowboys",
  "Longhorns",
  "Heat"
]

// var teams = document.getElementById('test');


// the WHILE loop
// var i = 0;
// while(i < arr.length){
//   teams.innerHTML += arr[i] + '<br>';
//   i++;
// };




function printTeams(nameOfId) {
  var teams = document.getElementById(nameOfId).getElementsByTagName('li');
  var i = 0;
    while(i < teams.length){
      if (teams[i].innerHTML === 'chiefs')
        test.innerHTML += "This team is the worst: The "
      test.innerHTML += teams[i].innerHTML + "<br>";
      i++;
  }
};

printTeams('football');
