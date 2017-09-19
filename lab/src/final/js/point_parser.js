function parsePoint(rawCoordinate) {
    if (!rawCoordinate) {
        return null;
    }

    const splitRawCoordinate = rawCoordinate.split(',');

    if (splitRawCoordinate.length !== 2) {
        return null;
    }

    const x = parseFloat(splitRawCoordinate[0]);
    const y = parseFloat(splitRawCoordinate[1]);

    if ((!x || !y) && !(x === 0 || y === 0)) {
        return null;
    }

    return new Point(x, y);
}

function parsePoints(rawCoordinates) {
    if (!rawCoordinates) {
        return [];
    }

    const splitRawCoordinates = rawCoordinates.split(' ');
    const points = [];

    for (var i = 0; i < splitRawCoordinates.length; i++) {
        const point = parsePoint(splitRawCoordinates[i]);
        points.push(point);
    }

    return points;
}