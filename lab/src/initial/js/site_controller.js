//Select the canvas from the page


//Get a brush we can use to draw on the canvas.


function drawPoint(normalizedPoint,
    brush) {
    //Offset the point by half its width and height. When we draw the point, this will put the center of
    //the square at the point the caller provided.


}

function setLineStyle(brush) {

}

function onDrawButtonClick() {
    //Select the coordinates from the page


    //Select the bounds from the page


    //Parse the coordinates


    //Parse the bounds


    //Check to make sure all our points were parsed correctly. If not, abort.


    //clear the canvas


    //Get a rectangle representing the pixel space of the screen.


    //Get a rectangle representing the 'world space' defined by the user.


    //Set the properties of the line we'll be drawing. Width and color.


    //Tell the browser we're ready to start drawing


    //Loop over the points defined by the user
    //START LOOP

    //Given the 'world space' point defined by the user, get a point 
    //defined in terms of the pixel space on the screen.

    //Draw the line cap.


    //The first time through the loop, set the line's starting point.


    //Otherwise, draw a line from the last point to the current point.

    //END LOOP

    //Close the shape and show the drawing on screen

}

function resizeCanvas() {
    //Select the canvas' containing element


    //Get the coordinates and size of the element


    //Specify a margin so the canvas doesn't run up against the edge of the screen.


    //The canvas' potential width is the width of the containing element minus any whitespace we want to add


    //The canvas' potential height is the height of the browser window, minus the top coordinate of the containing element, minus any margin we want to add.


    //We want the canvas to be square. Use the smaller of the two values for both width and height.


    //Set the canvas' width and height in the browser.    
}

//size the canvas according to the browser's current size when the page first loads.


//Select the draw button from the page so we can tell it how to respond to clicks.


//When the user clicks the 'Draw' button, call the onDrawButtonClick method.


//When the user resizes their browser, call the onWindowResize method.