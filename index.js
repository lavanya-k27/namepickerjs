const addButtonRef = document.getElementById("add");
const inputRef = document.getElementById("name");
const randomButtonRef = document.getElementById("random");
const divRef = document.getElementById("name-list");
const selectedRef = document.getElementById("selected");
let givenNames = [
  "Bala",
  "Lavanya",
  "Mythili",
  "Naveen",
  "Parthiban",
  "Rohtash",
  "Surabhi",
  "Yashaswini",
];

inputRef.addEventListener("change", (e) => {
  if (!givenNames.includes(e.target.value)) {
    givenNames.push(e.target.value);
  }
  inputRef.value = "";
});

addButtonRef.addEventListener("click", (e) => {
  divRef.innerHTML = ` <ul>
      ${givenNames.map((item) => `<li>${item}</li>`).join("")}
    </ul>`;
});

let selectedIndex = [];

randomButtonRef.addEventListener("click", (e) => {
  let arrayLength = givenNames.length;
  if (selectedIndex.length === arrayLength) {
    selectedIndex = [];
  }
  let randomIndices = [];
  do {
    let randomIndex = Math.floor(Math.random() * arrayLength);
    if (!selectedIndex.includes(randomIndex)) {
      randomIndices.push(randomIndex);
      selectedIndex.push(randomIndex);
    }
  } while (randomIndices.length < 2);

  let selectedNames = randomIndices.map((index) => givenNames[index]);
  selectedRef.innerHTML = `<ul><li>${selectedNames[0]}</li><li>${selectedNames[1]}</li></ul>`;
});
