alert("Welcome to the NFL quiz!");
alert("There are 3 multiple choice questions. Choose 1 or 2. Goodluck!");

let score = 0;
let totalquestions = 3;

const answer1 = prompt(`What city are the Jaguars located in?
  [1] Houston
  [2] Jacksonville,
`);

const selection1 = Number(answer1);

if (Number.isNaN(selection1)) {
  alert("You must enter a number.");
  exit(answer1);
} else if (selection1 < 1 || selection1 > 2) {
  alert("Your answer must be either number 1 or 2.");
  exit(answer1);
} else if (selection1 === 2) {
  score += 1;
} else {
  alert("Incorrect");
}

///////
const answer2 = prompt(`What is the mascot of the NFL team located in Dallas?
  [1] Steelers
  [2] Cowboys
`);

const selection2 = Number(answer2);

if (Number.isNaN(selection2)) {
  alert("You must enter a number.");
  exit(answer2);
} else if (selection2 < 1 || selection2 > 2) {
  alert("Your answer must be either number 1 or 2.");
  exit(answer2);
} else if (selection2 === 2) {
  score += 1;
} else {
  alert("Incorrect");
}

/////
const answer3 = prompt(`Who is the quarterback of the Philadelphia Eagles?
  [1] Jalen Hurts
  [2] Tom Brady
`);
const selection3 = Number(answer3);

if (Number.isNaN(selection3)) {
  alert("You must enter a number.");
  exit(answer3);
} else if (selection3 < 1 || selection3 > 2) {
  alert("Your answer must be either number 1 or 2.");
  exit(answer3);
} else if (selection3 === 1) {
  score += 1;
} else {
  alert("Incorrect");
}

alert(
  `You have completed the NFL quiz. Your total score is ${score} / ${totalquestions}!`,
);

if (score === 0) {
  alert("Poor effort, watch more sports.");
} else if (score === 1) {
  alert("Good try. You will do better next time1");
} else if (score === 2) {
  alert("Great effort! You only missed 1 question");
} else {
  alert("Perfection! You got them all right!");
}
