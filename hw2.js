'use strict'

//String methods:

//Task #1:
console.log(`Task 1 Output:`);

let nameEx1 = 'Mary ';
let activityEx1 = 'drink tea';
let bioEx1 = 'Our guest ' + nameEx1 + activityEx1 + '.';

console.log(bioEx1.length);



//Task #2:
console.log(`\nTask 2 Output:`);
const strEx2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

let numEx2 = parseInt(prompt("Enter a number:"));

console.log(`char #4 is "${strEx2[numEx2]}"`);



//Task #3:
console.log(`\nTask 3 Output:`);

let strEx3 = prompt("Enter string:");

console.log(`Last char = ${strEx3[strEx3.length - 1]} \nBefore last char = ${strEx3[strEx3.length - 2]}`);

//Task #4:
console.log(`\nTask 4 Output:`);

const strEx4 = "abcde";
let updateStrEx4 = "";

for (let i = strEx4.length - 1; i >= 0; i--) {
  updateStrEx4 += strEx4[i];
}

console.log(updateStrEx4);

//Task #5:
console.log(`\nTask 5 Output:`);

let strEx5 = "js"
console.log(strEx5.toUpperCase());

//Task #6:
console.log(`\nTask 6 Output:`);

const strEx6 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

let userInputEx6 = prompt(`Please enter substirng to search`)

console.log(strEx6.includes(userInputEx6));


//Task #7:
console.log(`\nTask 7 Output:`);

let strEx7 = '1-2-3-4-5';

while (strEx7.includes('-')) {
  strEx7 = strEx7.replace('-', '.');
}

console.log(strEx7);



//Task #8:
console.log(`\nTask 8 Output:`);

let strEx8 = '1-2-3-4-5';

let newStrEx8 = strEx8.replaceAll('-', '.');

console.log(newStrEx8);



//Task #9:
console.log(`\nTask 9 Output:`);

const strEx9 = 'sdfwe';

console.log(strEx9.substring(4, 2)); // output: fw


//Task #10:
console.log(`\nTask 10 Output:`);

const strEx10 = "I'm learning javascript!";

// 'learning':
console.log("substr: " + strEx10.substr(4, 8));
console.log("substring: " + strEx10.substring(4, 12));
console.log("slice: " + strEx10.slice(4, 12));

// 'javascript':
console.log("substr: " + strEx10.substr(-11, 10));
console.log("substring: " + strEx10.substring(13, 23));
console.log("slice: " + strEx10.slice(13, 23));



//Task #11:
console.log(`\nTask 11 Output:`);

const strEx11 = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'

console.log(strEx11.indexOf('http://'));


//Task #12:
console.log(`\nTask 12 Output:`);

const strEx12 = 'https://www.notion.html'

console.log(strEx12.indexOf('.html') !== -1);


//Task #13:
console.log(`\nTask 13 Output:`);

const strEx13 = 'ab cd cd cd ef';

console.log(strEx13.lastIndexOf('cd')); // output: 9
console.log(strEx13.lastIndexOf('cd', 8)); // output: 6

//Task #14:
console.log(`\nTask 14 Output:`);

const strEx14 = 'abcde';

console.log(strEx14.startsWith('abc')); //true
console.log(strEx14.startsWith('xxx')); // false
console.log(strEx14.startsWith('bc', 1)); //true


//Task #15:
console.log(`\nTask 15 Output:`);

const strEx15 = 'abcde';

console.log(strEx15.endsWith('cde')); //true
console.log(strEx15.endsWith('xxx')); //false
console.log(strEx15.endsWith('bc', 3)); //true


//Task #16:
console.log(`\nTask 16 Output:`);

let strEx16 = 'ab-cd-ef';

console.log(strEx16.split('-')); // ["ab", "cd", "ef"]
console.log(strEx16.split('-', 2)); // ["ab", "cd"]
console.log(strEx16.split('')); // ["a", "b", "-", "c", "d", "-", "e", "f"]
console.log(strEx16.split('', 3)); // ["a", "b", "-"]

let str2Ex16 = '12345';

console.log(str2Ex16.split('')); // ["1", "2", "3", "4", "5"]