// objects -- containters for varibles (properties) and funcitons (methods) thematically
// related to each other for easier re-use.

// Mozilla developer network -- document object model -- document.
// document is describing the document of the html


var person = {
  name: "Garrett",
  lastName: "Ross",
  age: 15,
  isAdult: function() {
    if (this.age < 18)
      return false;
    else
      return true;
  },
  toString: function() {
    return this.name + " " + this.lastName;
  }
};



var div = document.getElementById('test');
div.innerHTML = person.isAdult();
