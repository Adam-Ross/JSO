// Looks better than having many conditional 'ifs' and whatnot.  Read faster

var dayOfWeek = 1;
switch(dayOfWeek)
{
  case 1:
    alert("God, monday sucks.")
  case 2:
  case 3:
  case 4:
  case 5:
    alert("Work day")
    break;
  case 6:
  case 7:
    alert("It's the weekend.")
  default:
    alert("Not a day of the week.")
}
