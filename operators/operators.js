// How to create a conditional

// if (5 > 3) // ---> retunrs 1 for true, 0 returns if false. Any other number / string returns true.
//   alert('test');




var a = 6;
var b = 6;

if (a < b)
  alert(a + " is bigger than " + b);
else if (b > a)
  alert(a + " is smaller than " + b);
else
  alert(a + " is equal to " + b);

// -------- You can use if, with else, or else if, but it important to remember the brackets.

var a = 6;
var b = 6;

if (a < b)
{
  alert(a + " is bigger than " + b);
}
else if (b > a)
{
  alert(a + " is smaller than " + b);
  alert("Test to see if it works.")
}

else
{
  alert(a + " is equal to " + b);
}
