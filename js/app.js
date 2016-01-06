
//Create div with the class of a random color and shape.
var randomColor = function() {
	color = ['red', 'blue', 'yellow', 'black', 'grey'];
	return color[Math.floor(Math.random()*color.length)];
};

var randomShape = function() {
	shape = ['small-square', 'med-square', 'large-square', 'xlarge-square'];
	return shape[Math.floor(Math.random()*shape.length)];
};

var createDiv = function() {
	var div = '<div class="item '+ randomColor() + ' ' + randomShape() + '"></div>';
	return div;
};


//Create x number of divs.
var divBlock = function(){
	var i = 0;
	while (i < Math.round(settings.numberOfDivs)){
		$("#art").append(createDiv());
		i = i+1;
	}
};


//dat.gui toolbar
var Settings = function(){
	this.numberOfDivs = 15
};

var settings = new Settings();

window.onload=function(){
	var gui = new dat.GUI({autoPlace: false});
	gui.add(settings, 'numberOfDivs', 12, 36);
	$("#gui-container").append(gui.domElement);
};


//Add divs to document when button clicked.
$("#randomize").click(function() {
	$("#art").empty();
	$("#grid").css("visibility", "visible");
	divBlock();
	//Packery
	var $container = $('#canvas');
	$container.packery('destroy');
	$container.packery({
		itemSelector: '.item',
		gutter: 0
	});
});




