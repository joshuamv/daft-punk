
// create array to hold all particles
var dayArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var monthArray = ["jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
var direction = 1;
var velocity = 15;

function setup() {
	let posterHeight = windowHeight / 1.03;
	createCanvas(posterHeight / 1.42, posterHeight, SVG);

	background(0);
	//changing parameters
	var radius = random(30,300);
	var ellipseX = random(100,500);
	var ellipseY = random(150,250);
	var datesY = random(150,500);
	var daftY = random(600,750);

	fill(0,255,200);
	noStroke();
	//selected date marking circles
	ellipse(211, datesY-4, 22);
	ellipse(404, datesY+16, 22);
	ellipse(407, datesY+16, 22);

	for (var i = 0; i < dayArray.length; i++) {
		//dates
		fill(255,255,255);

		text(dayArray[i], (-2)+(i*30), datesY);
		text(monthArray[i], (250)+(i*30), datesY+20);

		//circles with stroke only
		noFill();
		stroke(0, 255, 200,100-(i*15));
		strokeWeight(1);
		ellipse(211, datesY-(i*42)-4, 22);
		ellipse(405.5, datesY+(i*42)+16, 22);
		noStroke();

		//background ellipses
		noFill();
		stroke(0, 255, 200,20);
		strokeWeight((dayArray.length/3)-(i/3));
		ellipse(ellipseX, ellipseY, (radius+30*i)/1.5);
	}

	//black text on selected dates
	fill(0);
	text(8, 208, datesY);
	text("jul", 400, datesY+20);

	//texts
	fill(255);
	textSize(16);
	stroke(0, 255, 200,20);
	strokeWeight(9);
	text("Daft Punk, the comeback", 400, daftY);
	fill(255,200);
	text("New York City", 400, 800);	
	//save as svg
	save();
}

function draw() {

}
