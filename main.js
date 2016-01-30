
var numberOfImages= 12
var currentImage= null

for (var i=200; i<=numberOfImages; i++){
var element= $('<div id = '+i+' style= "background-image: url(assets/img/eleenPress/ ' + i +'.jpg)"></div')
$("#press-pic-container").append(element);

}