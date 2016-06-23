// constructor function (class in other languages)
// a form for creating multiple objects1
// a form is used to collect many objects into one class
// can create many objects that have the same properties and methods.



function person(name, lastName, age)
{
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.toString = function()
  {
    return this.name + " , " + this.age
  };
  this.isAdult = function()
  {
    if (this.age <= 18)
      return this.name + " " + "is not an adult."
    else
      return this.name + " " + "is an adult."
  };
};

var x = new person("Garrett", "Ross", "32");
var y = new person("Sarah", "Ross", "28");
var a = new person("Jake", "Ross", "45");
var b = new person("Donna", "Ross", "56");
var c = new person("John", "Ross", "14");


var div = document.getElementById('test');
div.innerHTML = x + "<br>" + y + "<br>" + a + "<br>" + b;
