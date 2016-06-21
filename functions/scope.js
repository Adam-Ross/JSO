// variable scope in JS.

var a = 5;

function test(a) // --> local variable
{
  a = 3;
  alert("This is for the function call" + ' ' + a);
}

test();
alert("I wonder what the variable a will be now..." + ' ' + a);
