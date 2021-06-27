const fs = require("fs");
// 1 - what floor does santa end up on
// ( --> should go Up 1 floor
// ) --> should go DOWN 1 floor 

function question1() {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return acc += 1;
      } else if (currentValue === ")") {
        return acc -= 1;
      }
    }, 0)
    console.timeEnd("santa-time");
    console.log("floor:", answer);
  })
}






// 2 - when does Santa first enter the basement 