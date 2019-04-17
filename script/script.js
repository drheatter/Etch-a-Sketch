//Global variable storing current color option.
var currentColor = 'Black';

// Add event listener for reset button
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
	var sideLength = prompt("How many squares per side?", '4');
	while (!Number.isInteger(Number(sideLength))) {
		sideLength = prompt("How many squares per side?", '4');
	}
	updatePad(Number(sideLength));
});

// Add event listener for black color button.
const blackButton = document.querySelector('#blackButton');
blackButton.addEventListener('click', () => {
	currentColor = 'Black';
});

// Add event listener for rainbow color button.
const rainbowButton = document.querySelector('#rainbowButton');
rainbowButton.addEventListener('click', () => {
	currentColor = 'Rainbow';
});

// Function to initialize grid given length of one side.
function updatePad(sideLength) {
	clearArea();
	const drawingArea = document.querySelector('#drawingArea');
	drawingArea.style.gridTemplateColumns = 'repeat(' + sideLength + ', 1fr)';
	drawingArea.style.gridTemplateRows = 'repeat(' + sideLength + ', 1fr)';
	for (i = 0; i < sideLength**2; i++) {
		var newDiv = document.createElement('div');
		newDiv.style.backgroundColor = '#FFFFFF';
		newDiv.id = 'colorDiv' + i;
		newDiv.classList.add('colorDiv');
		drawingArea.appendChild(newDiv);
	}
	const colorDivs = document.querySelectorAll('.colorDiv');
	colorDivs.forEach( (colorDiv) => {
		colorDiv.addEventListener('mouseover', function() {
			changeColor(colorDiv.id);
		});
	});
	return
}

// Function to change a square's color
function changeColor(divId) {
	const square = document.querySelector('#' + divId);
	if (currentColor == 'Black') {
		square.style.backgroundColor = 'black';
	}
	else {
		square.style.backgroundColor = getRandomColor();
	}
	return;
}

// Function to generate random colors. Returns string in rgb format.
function getRandomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return 'rgb(' + red + ',' + green + ',' + blue +')';
}

// Function to remove all divs from the drawing area.
function clearArea() {
	const drawingArea = document.querySelector('#drawingArea');
	while (drawingArea.firstElementChild) {
		var oldSquare = drawingArea.firstElementChild;
		drawingArea.removeChild(oldSquare);
	}
}

updatePad(4);