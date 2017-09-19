const drawButton = document.querySelector('#draw-button');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const canvasMargin = 8;
const pointSize = 5;
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

function onDrawButtonClick() {
    const rawPoints = document.querySelector('#points').value;
    const rawBoundingCoordinates = document.querySelector('#bounding-coordinates').value;
    const points = parsePoints(rawPoints);
    const boundingCoordinates = parsePoints(rawBoundingCoordinates);

    if (!points ||
        points.length === 0 ||
        !boundingCoordinates ||
        boundingCoordinates.length !== 2) {
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    const canvasContainer = document.querySelector('#canvas-container');
    const canvasRect = new Rectangle(new Point(0, 0), new Point(canvas.width, canvas.height));
    const worldRect = new Rectangle(boundingCoordinates[0], boundingCoordinates[1]);
    const normalizedPoints = [];

    context.strokeStyle = window.getComputedStyle(document.body).getPropertyValue('--accent-1');
    context.fillStyle = context.strokeStyle;
    context.lineWidth = 1;
    context.beginPath();

    for (var i = 0; i < points.length; i++) {
        const normalizedPoint = points[i].normalize(worldRect, canvasRect);
        normalizedPoints.push(normalizedPoint);
        context.fillRect(normalizedPoint.X - pointSize / 2, normalizedPoint.Y - pointSize / 2, pointSize, pointSize);

        if (i == 0) {
            context.moveTo(normalizedPoint.X, normalizedPoint.Y);
        } else {
            context.lineTo(normalizedPoint.X, normalizedPoint.Y);
        }
    }

    context.closePath();
    context.stroke();

    console.dir(normalizedPoints);
    console.dir(points);
}

function onWindowResize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    resizeCanvas();
}

function resizeCanvas() {
    const canvasContainer = document.querySelector('#canvas-container');
    const canvasContainerRect = canvasContainer.getBoundingClientRect();

    let canvasWidth = canvasContainerRect.width - canvasMargin;
    let canvasHeight = windowHeight - canvasContainerRect.top - canvasMargin;

    if (canvasWidth < canvasHeight) {
        canvasHeight = canvasWidth;
    } else if (canvasHeight < canvasWidth) {
        canvasWidth = canvasHeight;
    }

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

}

resizeCanvas();

drawButton.addEventListener('click',
    onDrawButtonClick);

window.addEventListener('resize',
    onWindowResize);