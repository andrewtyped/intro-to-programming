describe('parsePoints', function() {

    function expectEmpty(input) {
        var points = parsePoints(input);
        expect(points.length).toBe(0);
    }

    it('should return empty array if input is undefined', function() {
        expectEmpty();
    });

    it('should return empty array if input is empty', function() {
        expectEmpty('');
    });

    it('should return a point if a single, properly formatted point is passed', function() {
        var points = parsePoints('1.0,2.0');
        expect(points[0].X).toBe(1.0);
        expect(points[0].Y).toBe(2.0);
    });

    it('should return a point if a multiple properly formatted points are passed', function() {
        var points = parsePoints('1.0,2.0 4.0,5.0 7.0,9.0');

        var expectedPoints = [
            { X: 1.0, Y: 2.0 },
            { X: 4.0, Y: 5.0 },
            { X: 7.0, Y: 9.0 },
        ];

        for (var i = 0; i < expectedPoints.length; i++) {
            expect(points[i].X).toBe(expectedPoints[i].X);
            expect(points[i].Y).toBe(expectedPoints[i].Y);
        }

        expect(points.length).toBe(expectedPoints.length);
    });
});

describe('parsePoint', function() {
    function expectEmpty(input) {
        var point = parsePoint(input);
        expect(point).toBeNull();
    }

    it('should return null if input is undefined', function() {
        expectEmpty();
    });

    it('should return null if input is empty', function() {
        expectEmpty('');
    });

    it('should return null if input is not comma-separated', function() {
        var point = parsePoint('foo');
        expect(point).toBeNull();
    });

    it('should return null if either coordinate is not a number', function() {
        var point1 = parsePoint('foo,1.0');
        expect(point1).toBeNull();

        var point2 = parsePoint('1.0,');
        expect(point2).toBeNull();
    });

    it('should return a point for 0,0', function() {
        var point = parsePoint('0,0');
        expect(point.X).toBe(0.0);
        expect(point.Y).toBe(0.0);
    });

    it('should return a point if a properly formatted string is passed', function() {
        var point = parsePoint('1.0,2.0');
        expect(point.X).toBe(1.0);
        expect(point.Y).toBe(2.0);
    });
});