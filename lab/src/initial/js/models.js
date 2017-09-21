function Rectangle(bottomLeftPoint, topRightPoint) {
    this.top = topRightPoint.Y;
    this.right = topRightPoint.X;
    this.bottom = bottomLeftPoint.Y;
    this.left = bottomLeftPoint.X;
    this.width = this.right - this.left;
    this.height = this.top - this.bottom;
}

function Point(x, y) {
    this.X = x;
    this.Y = y;
}

Point.prototype.normalize = function(worldSpaceRectangle, screenSpaceRectangle) {

    //Measure the world-space distance from the left-most edge to this point's x-coordinate.


    //Get the ratio of how wide the screen is vs. how wide the 'world' is.


    //normalized x is world space width offset times the width ratio


    //Measure the world-space distance from the bottom edge to this point's y-coordinate


    //Get the ratio of how tall the screen is vs. how tall the 'world is';


    //normalized y is the screen height minus (world space height offset times height ratio).
    //We have to subtract from screen height b/c browsers consider (0,0) to be the UPPER left of the canvas.


    //Return the new point to the caller
}