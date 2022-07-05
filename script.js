let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const x = 100;

console.log(typeof x);
const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = x - numOfEnteredChars;
  characterCounter.textContent = counter + "/100";

  if (counter < 0) {
    characterCounter.style.color = "red";
  } else if (counter < 20) {
    characterCounter.style.color = "orange";
  } else {
    characterCounter.style.color = "black";
  }
};

textArea.addEventListener("input", countCharacters);
