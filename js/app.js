
//Create div with the class of a random color and shape.
var randomColor = function() {
	color = ['red', 'blue', 'yellow', 'black', 'white', 'grey'];
	return color[Math.floor(Math.random()*color.length)];
}

var randomShape = function() {
	shape = ['small-square', 'med-square', 'large-square', 'xlarge-square'];
	return shape[Math.floor(Math.random()*shape.length)];
}

function createDiv() {
	var div = '<div class="item '+ randomColor() + ' ' + randomShape() + '"></div>';
	return div;
}

//Number of shapes to be created.



//Add divs to document when button clicked.
$("#randomize").click(function() {
	$("#art").empty();
	$("#grid").css("visibility", "visible");
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	$("#art").append(createDiv());
	//Packery
	var $container = $('#canvas');
	$container.packery('destroy');
	$container.packery({
		itemSelector: '.item',
		gutter: 0
	});
});

