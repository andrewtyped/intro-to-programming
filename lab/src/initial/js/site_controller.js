//Select the canvas from the page
const canvas = document.querySelector('#canvas');

//Get a brush we can use to draw on the canvas.
const brush = canvas.getContext('2d');

function drawPoint(normalizedPoint,
    brush) {
    const pointSize = 5;

    //Offset the point by half its width and height. When we draw the point, this will put the center of
    //the square at the point the caller provided.
    const x = normalizedPoint.X - pointSize / 2;
    const y = normalizedPoint.Y - pointSize / 2;

    brush.fillRect(x,
        y,
        pointSize,
        pointSize);
}

function setLineStyle(brush) {
    brush.strokeStyle = 'rgb(188, 218, 74)'; //Bright green
    brush.fillStyle = brush.strokeStyle;
    brush.lineWidth = 1;
}

function onDrawButtonClick() {
    //Select the coordinates from the page
    const rawPoints = document.querySelector('#points').value;

    //Select the bounds from the page
    const rawBoundingCoordinates = document.querySelector('#bounding-coordinates').value;

    //Parse the coordinates
    const points = parsePoints(rawPoints);

    //Parse the bounds
    const boundingCoordinates = parsePoints(rawBoundingCoordinates);

    //Check to make sure all our points were parsed correctly. If not, abort.
    if (!points ||
        points.length === 0 ||
        !boundingCoordinates ||
        boundingCoordinates.length !== 2) {
        return;
    }

    //clear the canvas
    brush.clearRect(0, 0, canvas.width, canvas.height);

    //Get a rectangle representing the pixel space of the screen.
    const canvasRect = new Rectangle(new Point(0, 0),
        new Point(canvas.width, canvas.height));

    //Get a rectangle representing the 'world space' defined by the user.
    const worldRect = new Rectangle(boundingCoordinates[0],
        boundingCoordinates[1]);

    //Set the properties of the line we'll be drawing. Width and color.
    setLineStyle(brush);

    //Tell the browser we're ready to start drawing
    brush.beginPath();

    //Loop over the points defined by the user
    for (var i = 0; i < points.length; i++) {

        //Given the 'world space' point defined by the user, get a point 
        //defined in terms of the pixel space on the screen.
        const normalizedPoint = points[i].normalize(worldRect, canvasRect);

        //Draw the line cap.
        drawPoint(normalizedPoint,
            brush);

        if (i === 0) {
            //The first time through the loop, set the line's starting point.
            brush.moveTo(normalizedPoint.X, normalizedPoint.Y);
        } else {
            //Draw a line from the last point to the current point.
            brush.lineTo(normalizedPoint.X, normalizedPoint.Y);
        }
    }

    brush.closePath();
    brush.stroke();
}

function onWindowResize() {
    resizeCanvas();
}

function resizeCanvas() {
    //Select the canvas' containing element
    const canvasContainer = document.querySelector('#canvas-container');

    //Get the coordinates and size of the element
    const canvasRectangle = canvasContainer.getBoundingClientRect();

    //Specify a margin so the canvas doesn't run up against the edge of the screen.
    const canvasMargin = 8;

    //The canvas' potential width is the width of the containing element minus any whitespace we want to add
    let canvasWidth = canvasRectangle.width - canvasMargin;

    //The canvas' potential height is the height of the browser window, minus the top coordinate of the containing element, minus any margin we want to add.
    let canvasHeight = window.innerHeight - canvasRectangle.top - canvasMargin;

    //We want the canvas to be square. Use the smaller of the two values for both width and height.
    if (canvasWidth < canvasHeight) {
        canvasHeight = canvasWidth;
    } else if (canvasHeight < canvasWidth) {
        canvasWidth = canvasHeight;
    }

    //Set the canvas' width and height in the browser.
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

//size the canvas according to the browser's current size when the page first loads.
resizeCanvas();

//Select the draw button from the page so we can tell it how to respond to clicks.
const drawButton = document.querySelector('#draw-button');

//When the user clicks the 'Draw' button, call the onDrawButtonClick method.
drawButton.addEventListener('click',
    onDrawButtonClick);

//When the user resizes their browser, call the onWindowResize method.
window.addEventListener('resize',
    onWindowResize);