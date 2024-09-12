const inputField = document.querySelector("input");
const upperCaseOutput = document.querySelector("#upperCase span");
const lowerCaseOutput = document.querySelector("#lowerCase span");
const camelCaseOutput = document.querySelector("#camelCase span");
const pascalCaseOutput = document.querySelector("#pascalCase span");
const snakeCaseOutput = document.querySelector("#snakeCase span");
const kebabCaseOutput = document.querySelector("#kebabCase span");
const trimedOutput = document.querySelector("#trim span");

function updateScreen() {
  lowerCaseOutput.innerText = inputField.value.toLowerCase();
  upperCaseOutput.innerText = inputField.value.toUpperCase();
  camelCaseOutput.innerText = toCamelCase(inputField.value);
  pascalCaseOutput.innerText = toPascalCase(inputField.value);
  snakeCaseOutput.innerText = toSnakeCase(inputField.value);
  kebabCaseOutput.innerText = toKebabCase(inputField.value.trim());
  trimedOutput.innerText = toTrimmed(inputField.value);
}

updateScreen();

inputField.addEventListener("input", updateScreen);

function captalizedString(string) {
  if(!string) return string
  const firstLetter = string[0].toUpperCase();
  return firstLetter + string.slice(1, string.length).toLowerCase();
}

function toCamelCase(string) {
  // console.log(string);
  const lowercase = string.toLowerCase();
  const wordsArray = lowercase.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return captalizedString(word);
  });

  return finalArray.join("");
}

function toPascalCase(string) {
  // debugger;
  const lowercase = string.toLowerCase();
  const wordsArray = lowercase.split(" ");
  const finalArray = wordsArray.map((word) => {
    // if (i === 0) return word;
    return captalizedString(word);
  });

  return finalArray.join("");
}

function toSnakeCase(string) {
  // const wordsArray = string.split(" ");
  return string.replaceAll(" ", "_");
}

function toKebabCase(string) {
  return string.replaceAll(" ", "-");
}

function toTrimmed(string) {
  const wordsArray = string.split(" ");
  return wordsArray.join("");
}
