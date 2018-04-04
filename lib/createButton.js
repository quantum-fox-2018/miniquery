var showButton = document.createElement("BUTTON");
var idshowBtn = document.createAttribute("id");
var showText = document.createTextNode("SHOW");

idshowBtn.value = "showBtn";
showButton.appendChild(showText);
showButton.setAttributeNode(idshowBtn);

showButton.addEventListener('click', function() {
    DOM.show(showElement)
});

document.getElementById("test").appendChild(showButton);

var hideButton = document.createElement("BUTTON");
var idHideBtn = document.createAttribute("id");
var hideText = document.createTextNode("HIDE");

idHideBtn.value = "hideBtn";
hideButton.appendChild(hideText);
hideButton.setAttributeNode(idHideBtn);

hideButton.addEventListener('click', function() {
    DOM.hide(hideElement)
});

document.getElementById("test").appendChild(hideButton);

var addClassButton = document.createElement("BUTTON");
var idaddClassBtn = document.createAttribute("id");
var addClassText = document.createTextNode("addClass");

idaddClassBtn.value = "addClassBtn";
addClassButton.appendChild(addClassText);
addClassButton.setAttributeNode(idaddClassBtn);

addClassButton.addEventListener('click', function() {
    DOM.addClass(source, target)
});

document.getElementById("test").appendChild(addClassButton);

var removeClassButton = document.createElement("BUTTON");
var idremoveClassBtn = document.createAttribute("id");
var removeClassText = document.createTextNode("removeClass");

idremoveClassBtn.value = "removeClassBtn";
removeClassButton.appendChild(removeClassText);
removeClassButton.setAttributeNode(idremoveClassBtn);

removeClassButton.addEventListener('click', function() {
    DOM.removeClass(source, target)
});

document.getElementById("test").appendChild(removeClassButton);
