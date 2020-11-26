/*
Description:
This robot roams around a 2D grid. It starts at (0, 0) facing North. 
After each time it moves, the robot rotates 90 degrees clockwise. 
Given the amount the robot has moved each time, you have to calculate 
the robot's final position.

Problem Definition:
  - input: a series of integers
  - output: array [x, y] 
  - rules/model:
    - starts at [0, 0] facing North
    - Each movement is an integer (whole number).
    - Each time it moves, it rotates 90 deg
    - x: East or West
    - y: North or South

Examples / Test Cases:
To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)

trackRobot(20, 30, 10, 40) ➞ [-10, 10]

trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative.

Data Structure:
  - input: series of integers
  - rules: array and object
    -

Algorithm:
  - initialize position object { x: 0, y: 0}
  - x-dir: flip between +1 and -1; start with +1
  - y-dir: flip between +1 and -1; start with +1
  - for each movement
    - if movement idx is even
      - position.y += movement * y-dir
      - y-dir *= -1;
    - if movement idx is odd
      - position.x += movement * x-dir
      - x-dir *= -1;
*/

function trackRobot(...movements) {
  let position = { x: 0, y: 0};
  let xDir = 1;
  let yDir = 1;

  for (let idx = 0; idx < movements.length; idx++) {
    if (idx % 2 === 0) {
      position.y += movements[idx] * yDir;
      yDir *= -1;
    } else {
      position.x += movements[idx] * xDir;
      xDir *= -1;
    }
  }

  return Object.values(position);
}

console.log(trackRobot(20, 30, 10, 40)); // [-10, 10]

console.log(trackRobot()); // [0, 0]
// No movement means the robot stays at (0, 0).

console.log(trackRobot(-10, 20, 10)); // [20, -20]
// The amount to move can be negative. 