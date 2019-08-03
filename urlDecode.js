const urlDecode = function(text) {
  // Put your solution here
  const result = separateEqual(separateAnd(separatePercent(text)));
  return result;
};

// separate '&' into array
const separateAnd = function(string) {
  let resultKeys = [];
  let keyTemp = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '&') {
      resultKeys.push(keyTemp);
      keyTemp = '';
    } else {
      keyTemp += string[i];
    }
  }
  resultKeys.push(keyTemp);
  return resultKeys;
};

const separateEqual = function(arr) { //split array into object
  let keyTemp = '';
  let keyValue = '';
  let result = {};
  let flag = false;
  let keys = [];
  for (let char of arr) {
    for (let i = 0; i < char.length; i++) {
      if (char[i] === '=') {
        flag = true;
      } else {
        if (flag) {
          keyValue += char[i];
        } else {
          keyTemp += char[i];
        }
      }
    }
    // console.log(keyTemp + " = " + keyValue);
    result[keyTemp] = keyValue;
    keys.push(keyTemp);
    keyValue = '';
    keyTemp = '';
    flag = false;
  }
  // return result; // result already an object
  for (let char of keys) {
    result[char] = separatePercent(result[char]);
  }
  // console.log(result);
  return result;
};

const separatePercent = function(string) {
  let result = '';
  // const key = string[Object.keys(string)];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "%") {
      i += 2;
      result += ' ';
    } else {
      result += string[i];
    }
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
