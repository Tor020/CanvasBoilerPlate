/*	STAND ALONE WORKING EXAMPLE WITH NOTES. COPYING AND PASTING THIS CODE WITH A CANVAS WILL MAKE A CIRCLE THAT RANDOMLY MOVES AROUND SCREEN	*/
//Canvas Setup 
window.onload = function () {
	const canvas = document.getElementById('c');

	let c = canvas.getContext('2d');
	let w = canvas.width = window.innerWidth - 20;
	let h = canvas.height = window.innerHeight - 20;

	let radius = 30
	let x = xdeci = Math.random() * (w - 92) + 60;
	x = Math.floor(xdeci);
	let y = ydeci = Math.random() * (h - 92) + 60;
	y = Math.floor(ydeci);


// conditional terniary statements syntax:													
// (condition ? true : false); 		//~~~~~~~~~~~ 	( CONDITION ? DO-THIS-IF-CONDITION-IS-TRUE : DO-THIS-IF-CONDITION-IS-FALSE )

//	Checks if Positive or Negative Velocity
	let vx = Math.ceil((Math.random() - 0.5) * 10);
	(vx >= 0 ? vx + 1 : vx - 1);
	let vy = Math.ceil((Math.random() - 0.5) * 10);
	(vy >= 0 ? vy + 1 : vy - 1);

	// requestAnimationFrame
	function animate() { //This creates a loop where request animation frame continously calls the animate function. 
		requestAnimationFrame(animate); //requestAnimationFrame takes one callbackfunction parameter
		c.clearRect(0, 0, w, h); // cleans the canvas before every draw frame functions like fill rect (x, y, sizeX, sizeY)
		drawcircle();
	}

	function drawcircle() {
		c.beginPath();
		c.arc(x + vx, y + vy, radius, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
		// Velocity added to x and y
		x += vx;
		y += vy;

		// Walls
		y > h - radius || y < radius ? vy = -vy : vy; //If the circle goes to Top or Bottom of canvas flip to opposite 
		x > w - radius || x < radius ? vx = -vx : vx; //If the circle goes to Right or Left of canvas flip to opposite 
	}
	animate();
}