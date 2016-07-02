/* nodeName - name of node (most time tag name)
nodeValue   - value of node
parentNode  - node up from this node in hiearchy
childNodes  - an array of nodes that are one level down in hiearchy.
firstChild  - first node child
lastChild   - last node child
previouSibling - returns previous node on the same level (It's sibling)
nextSibling    - returns next node on the same level (It's sibling)
attributes     - an array of attributes
                  attributes[index].nodeValue returns value of attribute
                  it's better to use getAttribute(nameOfValueToGetAttributeFrom)
textContent - text content of element in ie9
innerHTML   - text content with tags

setAttribute("nameOfAttribueToAdd", "valueOfAttribute");
removeAttribute("nameOfAttributeToRemove");
*/

// var x = document.getElementById('languages').childNodes[5].firstChild.nodeValue;
// console.log(x);

var paragraph = document.createElement('p');
paragraph.textContent = "The dom is the bomb!"
document.body.appendChild(paragraph);
