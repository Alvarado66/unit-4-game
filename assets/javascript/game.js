$(document).ready(() {
    
}
let targetNum = " "

function genRandomNum(min, max) {
    let randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    if (randomNum < min) {
      randomNum = randomNum + min; 
    }
    return randomNum;
  }
  let targetNum = genRandomNum(19, 120); 
  let button1 = genRandomNum(1,12);
  let button2 = genRandomNum(1,12);
  let button3 = genRandomNum(1,12);
  let button4 = genRandomNum(1,12);