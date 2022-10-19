const wordArr = ["javascript", "html", "css", "react", "mongo"];
let targetWord = wordArr[Math.floor(Math.random() * wordArr.length)].split("");

let gameOver = false;
let inputLetter;
let counter = 0;

let dashArr = new Array(targetWord.length).fill("_", 0);
// console.log(targetWord, dashArr);

while (!gameOver) {
  inputLetter = prompt(`${dashArr.join(" ")}
  Du hast ${counter}von 10 Leben verbraucht.
  Gib einen Buchstaben ein

  (Um abzubrechen gib exit ein)`);

  if (inputLetter == `exit`) {
    gameOver = true;
  }

  targetWord.forEach((char, i) => {
    if (char === inputLetter) {
      dashArr[i] = inputLetter;
    }
  });

  if (targetWord.join() === dashArr.join()) {
    alert(`Du hast gewonnen`);
    gameOver = true;
  }

  if (!targetWord.includes(inputLetter)) {
    counter++;
  }

  if (counter > 10) {
    alert(
      `Du hast verloren 
        
      ╔══════
      ║        |
      ║       ☻
      ║      /  \\
      ║       ║
 ╔══╩═══╗
 `
    );
    gameOver = true;
  }
}
