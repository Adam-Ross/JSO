// for (i = 1; i < 5; i++)
// {
//   if(i === 3)
//     alert("This a the number 3.");
//
//   alert(i);
// };

//  Break and continue.



// Break

for (var i = 0; i < 5; i++)
{
  if (i === 2)
    break; // ==> is going to break out of the loop.
  alert(i);
}


//  Continue

for (var i = 0; i < 5; i++)
{
  if (i === 2)
    continue; // ==> is going to skip over two and continue the loop.
  alert(i);
}


function getTeams(nameOflist) {
var teams = document.getElementById(nameOflist).getElementsByTagName('li');
  for (var i = 0; i < teams.length; i++)
  {
    if (teams[i].innerHTML === 'suns')
      continue;
    test.innerHTML += teams[i].innerHTML + "<br>"
  }
};

getTeams('basketball');

function getTeams(nameOflist) {
var teams = document.getElementById(nameOflist).getElementsByTagName('li');
  for (var i = 0; i < teams.length; i++)
  {
    if (teams[i].innerHTML === 'suns')
      break;
    test.innerHTML += teams[i].innerHTML + "<br>"
  }
};

getTeams('basketball');
