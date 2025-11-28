// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

//Parameters: length and width
//Returns: if l and w are the same, the polygon is a square, return area. if l and w are different, the polygon is a rectangle, return perimeter
//Examples:
    // 6, 10 --> 32
    // 3, 3 --> 9
//Pseudocode:
// area = l*w, perimeter = l+l+w+w
// if l = w, return l*w
// else, return l^2 + w^2

const areaOrPerimeter = function(l , w) {

    let area = l*w
    let perimeter = l+l + w+w

    if (l == w) {
        return area
    } else {
        return perimeter
    }

};

console.log(areaOrPerimeter(6, 10))