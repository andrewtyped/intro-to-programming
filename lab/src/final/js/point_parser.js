function parsePoint(rawCoordinate) {
    //Validate the input - don't do anything if we weren't passed a value.
    if (!rawCoordinate) {
        return null;
    }

    //Split the raw coordinate at the comma
    const splitRawCoordinate = rawCoordinate.split(',');

    //If there wasn't exactly one comma, give up. The coordinate is malformed.
    if (splitRawCoordinate.length !== 2) {
        return null;
    }

    //Parse each half of the coordinate into a real number
    const x = parseFloat(splitRawCoordinate[0]);
    const y = parseFloat(splitRawCoordinate[1]);

    //If either coordinate is not a number, give up. The coordinate is malformed.
    if ((!x || !y) && !(x === 0 || y === 0)) {
        return null;
    }

    //Return the parsed point to the caller.
    return new Point(x, y);
}

function parsePoints(rawCoordinates) {

    //Validate the input - Don't do anything if we weren't passed a value
    if (!rawCoordinates) {
        return [];
    }

    //Split the user's input at each space to get an array of raw coordinates.
    const splitRawCoordinates = rawCoordinates.split(' ');

    //Initialize an array to store the parsed coordinates.
    const points = [];

    //Loop over the split raw coordinates
    for (var i = 0; i < splitRawCoordinates.length; i++) {

        //Parse the raw coordinate
        const point = parsePoint(splitRawCoordinates[i]);

        //Add the parsed coordinate to the array
        points.push(point);
    }

    //Send the array of parsed coordinates back to the caller.
    return points;
}