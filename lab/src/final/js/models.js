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
    const x = (this.X - worldSpaceRectangle.left) * (screenSpaceRectangle.width / worldSpaceRectangle.width);
    const y = screenSpaceRectangle.height - (this.Y - worldSpaceRectangle.bottom) * screenSpaceRectangle.height / (worldSpaceRectangle.height);

    return new Point(x, y);
}