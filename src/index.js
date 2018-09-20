function add(a, b) {
  return a + b;
}


function longestString(strings) {
  let stringLength = ["", 0]
  strings.forEach(word => {
    if (word.length > stringLength[1]) {
      stringLength[0] = word;
      stringLength[1] = word.length;
    }
  })

  return stringLength[0];
}

function l337(string) {
  let stringArr = string.split("")
  let newArr = stringArr.map(letter => {

    switch (letter) {
      case "i":
      case "l":
        letter = "1";
        break;

      case "z":
        letter = 2;
        break;

      case "e":
        letter = 3;
        break;

      case "a":
        letter = 4;
        break;

      case "s":
        letter = 5;
        break;

      case "g":
        letter = 6;
        break;

      case "t":
      case "y":
        letter = 7;
        break;

      case "b":
        letter = 8;
        break;

      case "q":
        letter = 9;
        break;

      case "o":
        letter = 0;
        break;

      default:
        break;

    }
    return letter;
  })
  return newArr.join("");
}

function uniqueStrings(string) {
  const stringObject = {};

  string.forEach(word => {
    if (stringObject[word]) {
      stringObject[word] += 1;
    } else {
      stringObject[word] = 1;
    }
  })
  let keys = Object.keys(stringObject);
  const stringArr = [];
  keys.forEach(key => {
    if (stringObject[key] === 1) {
      stringArr.push(key);
    }
  })
  return stringArr;
}

function Developer(name, languages) {
  this.name = name;
  this.languages = languages;
}



Developer.prototype.learnLanguage = function (language) {
  this.languages.push(language);
  return this.languages
}

function stringsConcat(arr) {
  const strArr = arr.map(el => {
    if (typeof el != "number") {
       return el;
      } else {
        delete el;
      };
  console.log(strArr);
  return strArr;
})


module.exports = { add, longestString, l337, uniqueStrings, Developer, stringsConcat }

