
function fullScreen(element) {
  var newElement = document.createElement(element);
  newElement.style.height = '100vh';
  document.body.appendChild(newElement);
  return newElement
}

function input(inputType, DOMelement, callback) {
  DOMelement.addEventListener(inputType, function(event) {
    var x = event.clientX;
    var y = event.clientY;
    callback(DOMelement, x, y);
  });
}

function output(element, x, y) {
  element.textContent = x + ', ' + y;
  element.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
}

input('mousemove', fullScreen('DIV'), output);


/*var div = document.createElement('DIV');
div.style.height = '100vh';
document.body.appendChild(div);
div.addEventListener('mousemove', function(event) {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  div.textContent = x + ' ' + y;
  div.style.backgroundColor = 'rgb(' + x +', ' + y +', 100)';
});
*/
