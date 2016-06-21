// anonymous functions

// function test(f, arg1)
// {
//   f("This is the argument to the anonymous function. " + arg1);
// };
//
// test(
//   function(x){
//     alert("This function is sent as an argument. " + x);
//   },
//   "This is the second argument to the test function."
// );


var hi = function(type)
{
  if (type === "friend")
    return function(name) {
      alert("Heyo, " + name + " you are a true friend.")
    };
  else
    return function(name) {
      alert("Hey, " + name + " you are totes not my friend.")
    };
};

var returnedFunction = hi("non friend");
returnedFunction("Garrett");
