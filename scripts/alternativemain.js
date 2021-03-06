// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Variables
var mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
};

var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// Event Listeners
addEventListener('mousemove', function (event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener('resize', function () {
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	init();
});

// Utility Functions
function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

// Objects
function Object(x, y, radius, color) {
	var _this = this;

	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;

	this.update = function () {
		_this.draw();
	};

	this.draw = function () {
		c.beginPath();
		c.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2, false);
		c.fillStyle = _this.color;
		c.fill();
		c.closePath();
	};
}

// Implementation
var objects = void 0;
function init() {
	objects = [];

	for (var i = 0; i < 400; i++) {
		// objects.push();
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
	// objects.forEach(object => {
	// 	object.update();
	// });
}

init();
animate();
