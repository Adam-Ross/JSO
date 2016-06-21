// shorthand conditional statement operator ? :

// (expression) ? return_if_the_expression_is_true : return_if_the_expression_is_false; -> basic syntax

// var a = 5;
// var b = 6;
//
// (a > b) ? alert(a + " is bigger than " + b) : alert(b + " is bigger than " + a);

var x = 2;
// var isEven;
//
// if (x % 2 === 0)
//   isEven = true;
// else
//   isEven = false;
//
// alert(isEven);

// To do all that code, we can just use the turinary statement
alert((x % 2 === 0) ? "The value " + x + " is even" : "The value " + x + " is not even." );
