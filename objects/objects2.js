// how to add properties outside of constructor functions.
// prototype -- prelimanary model

function person(firstName, lastName, age)
{
  this.firstName = firstName;
  this.lastName  = lastName;
  this.age       = age;
  this.toString  = function()
  {
    return this.firstName + " " + this.lastName + " is " + this.age + " years old."
  };
  this.isAdult   = function()
  {
    if (this.age <= 18)
      return this.firstName + " is not an adult."
    else
      return this.firstName + " is an adult for sure."
  };
}


var x = new person("Garrett", "Ross", 32);
var y = new person("Jacob", "Ross", 35);
var z = new person("John", "Ross", 63);

person.prototype.newProp = 5;



var div = document.getElementById("test");
div.innerHTML = x.newProp + "<br>" + y.newProp + "<br>" + z.newProp;
