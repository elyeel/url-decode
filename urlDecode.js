const urlDecode = function(text) {
  // Put your solution here
  const result = separatePercent(separateEqual(separateAnd(text)));
  return result;
}

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
  };
  resultKeys.push(keyTemp);
  return resultKeys;
};

const separateEqual = function(arr) { //split array into object
  let keyTemp = '';
  let keyValue = '';
  let result = {};
  let flag = false;
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
    console.log(keyTemp + " = " + keyValue);
    result[keyTemp] = keyValue;
    keyValue = '';
    keyTemp = '';
    flag = false;
  }
  return result;
};

const separatePercent = function(string) {
  let result = '';
  const key = string[Object.keys(string)];
  for (let i = 0; i < key.length; i++) {
    if (key[i] === "%") {
      i += 2;
      result += ' ';
    } else {
      result += key[i];
    }
  }
  return result;
};
  
  

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
// console.log(separateEqual(separateAnd("city=Vancouver&weather=lots%20of%20rain")));

// if (string[i] === '&' || string[i] === (string.length - 1)) { //fetch data to result
//   result['keyTemp'] = keyValue;
//   keyTemp = ''; //reset temp to ''
//   keyValue = '';
// } else {
  
// }
// for (let i = 0; i <= string.length; i++) {
//   if (i === (string.length) || flag ) { //fetching data
//     resultKeys.push(keyTemp);
//     keyTemp = '';
//     flag = false
//   } else if (string[i] === '&') {
//     flag = true;
//     resultKeys.push(keyTemp);
//     keyTemp = '';
//   } else {
//     keyTemp += string[i];
//   }
// }