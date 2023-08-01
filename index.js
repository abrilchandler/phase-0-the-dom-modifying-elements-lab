// Write your code here!
const main = document.querySelector("main")

document.body.removeChild(main)

const newHeader = document.createElement("h1");

newHeader.id = "victory"

newHeader.textContent = "Chandler is the champion"

document.body.append(newHeader);

