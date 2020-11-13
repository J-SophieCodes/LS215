function totalArea(rectangles) {
  // step 1: map 2d array into 1d array of areas
  let area = ([height, width]) => height * width;
  let areas = rectangles.map(area);

  // step 2: sum all areas
  let sumAreas = (sum, area) => sum + area;
  return areas.reduce(sumAreas, 0);
}

function totalSquareArea(rectangles) {
  let isSquare = ([height, width]) => height === width;
  let squares = rectangles.filter(isSquare);

  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 121