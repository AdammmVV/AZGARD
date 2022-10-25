function distinct(a) {
   a = a.filter((element, index) => {
      return a.indexOf(element) === index;
   });
   return a;
}

console.log(distinct([1, 1, 2, 3]));

function helloWorld() {
   let str = "Hello World!";
   console.log(str)
};

helloWorld();

function grabDoll(dolls) {
   var bag = [];
   //coding here
   for (let i = 0; i < dolls.length; i++) {
      if (bag.length == 3) break;
      else if (dolls[i] != "Hello Kitty" && dolls[i] != "Barbie doll") continue;
      bag.push(dolls[i])
   }
   return bag;
}
grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]);

function giveMeFive(obj) {
   //coding here
   let five = [];
   for (let key in obj) {
      if (key.length === 5) five.push(key);
      if (obj[key].length === 5) five.push(obj[key]);
   }
}

giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })


function whatNumberIsIt(n) {
   //coding here
   //if
   if (Number(n) == Infinity) console.log("Input number is Number.POSITIVE_INFINITY")
   if (Number(n) == Number()) console.log("Input number is " + n)
   if (Number(n) == 1.7976931348623157e+308) console.log("Input number is Number.MAX_VALUE");
   if (Number(n) == -Infinity) console.log("Input number is Number.NEGATIVE_INFINITY");
   if (Number(n) == Number.MIN_VALUE) console.log("Input number is Number.MIN_VALUEY");
   if (Number(n) == Infinity) console.log("Input number is Number.POSITIVE_INFINITY");
   if (Number.isNaN(n)) console.log("Input number is Number.NaN");

}
//whatNumberIsIt(1/0)
//whatNumberIsIt(100);
//whatNumberIsIt(1.7976931348623157e+308);
//whatNumberIsIt(-Number.MAX_VALUE*2);
//whatNumberIsIt(5e-324);
//whatNumberIsIt(NaN)
//whatNumberIsIt(Infinity+1)

function colorOf(r, g, b) {
   //coding here

   var red = r.toString(16),
      green = g.toString(16),
      blue = b.toString(16);
   if (red.length == 1) red = "0" + red;
   if (green.length == 1) green = "0" + green;
   if (blue.length == 1) blue = "0" + blue;
   console.log("#" + red + green + blue)
   return "#" + red + green + blue;
}
colorOf(102, 61, 8)

function amIWilson(p) {
   // check if prime is Wilson
   var res = 1;
   while (p--)
      res *= p + 1
   if (Number.isInteger((res + 1) / (p * p))) {
      return true
   } else {
      return false
   }

}
const resaltWilson = amIWilson(9);
console.log(resaltWilson)

function countSheeps(arrayOfSheep) {
   // TODO May the force be with you
   let sheep = 0;
   for (var i = 0; i < arrayOfSheep.length; i++)
      if (arrayOfSheep[i] == true)
         sheep++;

   return sheep;
}

var array1 = [true, true, true, false,
   true, true, true, true,
   true, false, true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true];

let seep = countSheeps(array1)
console.log(seep)

function boolToWord(bool) {
   return bool ? 'Yes' : 'No';
}


function fixTheMeerkat(arr) {
   //your code here 
   [arr[0], arr[2]] = [arr[2], arr[0]]
   return arr;
}
fixTheMeerkat(["tail", "body", "head"])

function DNAtoRNA(dna) {
   // create a function which returns an RNA sequence from the given DNA sequence
   return dna.replace(/T/gi, 'U')
}

DNAtoRNA("GCAT")

function testEven(n) {
   //Your awesome code here!
   return n % 2 === 0
}
testEven(0)

function abbrevName(name) {
   // code away
   let string = name.split(' ', 2)
   return `${Array.from(string[0])[0]}.${Array.from(string[1])[0]}`.toUpperCase();
}
console.log(abbrevName("Sam Harris"))

function noSpace(x) {
   return x.split(' ').join('')

}

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')

function feast(beast, dish) {
   //your function here
   beast.split(' ')
   dish.split(' ')
   return beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1];

}

console.log(feast("great blue heron", "garlic naan"))

let summation = function (num) {
   // Code here
   let summ = 0;
   for (let i = 1; i <= num; i++) {
      summ += i;
   }
   return summ;
}


function countPositivesSumNegatives(input) {
   let arrSum = [];
   let resPositive = [];
   let resNegative = 0;
   for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
         resPositive.push(input[i]);
      } else { resNegative += input[i] }
   }
   arrSum.push(resPositive.length);
   arrSum.push(resNegative);
   return arrSum;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

function findAverage(array) {
   // your code here
   return array.length !== 0 ? array.reduce((a, b) => a + b) / array.length : 0
}

function greet(name) {
   //your code here
   return `Hello, ${name} how are you doing today?`
}

let string = function (string) {
   // your code here
   return string == string.toUpperCase();
}

console.log(string('KK'))

function squareArea(a) {
   let circumference = a * 4;
   let sideOfSquare = circumference / (Math.PI.toFixed(2) * 2);
   let squareAreaRes = sideOfSquare * sideOfSquare;
   return Number(squareAreaRes.toFixed(2));
}

function multiTable(number) {
   // good luck
   return `1 * ${number} = ${number * 1}\n2 * ${number} = ${number * 2}\n3 * ${number} = ${number * 3}\n4 * ${number} = ${number * 4}\n5 * ${number} = ${number * 5}\n6 * ${number} = ${number * 6}\n7 * ${number} = ${number * 7}\n8 * ${number} = ${number * 8}\n9 * ${number} = ${number * 9}\n10 * ${number} = ${number * 10}`
}

function opposite(number) {
   //your code here
   return number > 0 ? number * -1 : Math.abs(number);
}

function fakeBin(x) {
   let arrString = x.split('');
   let arr = [];
   for (let i = 0; i < arrString.length; i++) {
      arrString[i] < 5 ? arr.push(0) : arr.push(1);
   }
   return arr.join('')
}

function calculateTip(amount, rating) {
   if (rating.toUpperCase() === 'Terrible'.toUpperCase()) {
      return Math.ceil(amount * 0 / 100);
   } else if (rating.toUpperCase() === 'Poor'.toUpperCase()) {
      return Math.ceil(amount * 5 / 100);
   } else if (rating.toUpperCase() === 'Good'.toUpperCase()) {
      return Math.ceil(amount * 10 / 100);
   } else if (rating.toUpperCase() === 'Great'.toUpperCase().toUpperCase()) {
      return Math.ceil(amount * 15 / 100);
   } else if (rating.toUpperCase() === 'Excellent'.toUpperCase()) {
      return Math.ceil(amount * 20 / 100);
   } else { return "Rating not recognised" }
}

function simpleMultiplication(number) {
   return number % 2 == 0 ? number * 8 : number * 9;
}


function sum(numbers) {
   let s = 0;
   for (let i = 0; i < numbers.length; i++) {
      s += numbers[i]
   }
   return s
};
console.log(sum([1, 5.2, 4, 0, -1]))

function solution(string) {
   let str = string.match(/[A-z]/g)
   for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i].toUpperCase()) {
         str[i] = ' ' + str[i]
      }
   }
   return str.join('')
}
console.log(solution('camelCasinKjh'))

function findOutlier(integers) {
   //your code here
   let positiv = [];
   let negativ = [];
   for (let i = 0; i < integers.length; i++) {
      if (Math.abs(integers[i]) % 2 === 0) {
         positiv.push(integers[i])
      } else if (Math.abs(integers[i]) % 2 === 1) {
         negativ.push(integers[i])
      }
   }
   return Number(positiv.length === 1 ? positiv : negativ);
}

console.log(findOutlier([-41156903, -58208154, 53812774]))

function repeatStr(n, s) {
   let summ = s;
   for (let i = 1; i < n; i++) {
      if (n === 1) return s
      else summ += s
   }
   return summ
}

console.log(repeatStr(5, "*"));

function wordsToMarks(string) {
   //your code here
   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let arr = [];
   for (let i = 0; i < string.split('').length; i++) {
      arr.push(alphabet.indexOf(string.split('')[i]) + 1)
   }
   return arr.reduce((a, b) => a + b)
}

function dutyFree(normPrice, discount, hol) {
   return Math.floor(hol / (normPrice * (discount / 100)))
}


console.log(dutyFree(12, 50, 1000))

function sameCase(a, b) {
   if (/^[a-z\d]+$/i.test(a) && /^[a-z\d]+$/i.test(b) && isNaN(a) && isNaN(b)) {
      if (a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase()) {
         return 1
      } else return 0
   }
   return -1
}

console.log(sameCase('A', '1'))

function spinWords(string) {
   let array = string.split(' ');
   for (let i = 0; i < array.length; i++) {
      if (array[i].length >= 5) {
         array[i] = array[i].split('').reverse().join('');
      }
   }
   return array.join(' ')
}

console.log(spinWords("Hey fellow warriors abcdacb"))

//function numberOfPairs(gloves){
//   const countItems = gloves.reduce((acc, item) => {
//      acc[item] = acc[item] ? acc[item] + 1 : 1;
//      return acc;  
//    }, {});
//   return countItems
//}

//console.log(numberOfPairs(['gray','black','purple','purple','gray','black']))


class SmallestIntegerFinder {
   findSmallestInt(args) {
      return Math.min.apply(null, args)
   }
}


const obj = {
   name: 'Youra',
   family: ['Irina', 'son', 'Youra']
}

console.log(`${obj.name} has ${(obj.family).length} family members and the first one is ${(obj.family)[0]}`)

function twiceAsOld(dadYearsOld, sonYearsOld) {
   return Math.abs(dadYearsOld - sonYearsOld * 2)
}

function points(games) {
   // your code here
   let array = [];
   let summ = 0;
   for (let i = 0; i < games.length; i++) {
      array = games[i].split(':')
      if (array[0] > array[1]) summ += 3
      if (array[0] === array[1]) summ += 1
   }
   return summ
}

function sumOfDifferences(arr) {
   let summ = [];
   if (arr.length === 0 || arr.length === 1) return 0
   else {
      arr.sort((a, b) => a - b).reverse()
      for (let i = 0; i < arr.length - 1; i++) {
         summ.push((arr[i] - arr[i + 1]))
      }
   }
   return summ.reduce((a, b) => a + b)
}


function redistributeWealth(wealth) {
   return Array.from(new Set(wealth)).length === 1 ? undefined :
      new Array(wealth.length).fill(wealth.reduce((a, b) => a + b) / wealth.length)
}

console.log(redistributeWealth([5, 6]))

function range(start, stop, step) {
   const range = [];
   if (stop === undefined) {
      stop = start
      start = 0
   }
   if (step === 0) {
      for (let i = start === undefined ? 0 : start; i < stop; i++) {
         range.push(start)
      }
   } else {
      for (let i = start === undefined ? 0 : start;
         i < stop;
         i += step === undefined ? 1 : step) {
         range.push(i)
      }
   }
   return range
}
console.log(range(1, 5, 0));

function multipleOfIndex(array) {
   return array.filter((num, i) => num % i === 0);
}

function multipleOfIndex(array) {
   return array.filter((element, index) => element % index === 0)
}

function isSortedAndHow(arr) {
   if (arr.length < 2) return true;
   let prev = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] < prev) return false;
      prev = arr[i];
   }
   return true
   //if(array === array.slice(0).sort((a,b) => a-b)) return "yes, ascending"
   //else if(array === array.slice(0).sort((a,b) => b-a)) return "yes, descending"
   //else {
   //   console.log(array == array.slice(0).sort((a,b) => b-a))
   //   return "no"}
}

console.log(isSortedAndHow([15, 7, 3, -8]))

function powersOfTwo(n) {
   const array = Array.from(Array(n + 1).keys());
   return array.map((a) => Math.pow(2, a));
}

console.log(powersOfTwo(4));


//const solution = str => str.split('').reverse().join('');

function mystery() {
   var results = { sanity: 'Hello' };
   return results;
}

const SafeInteger = n => n < Number.MAX_SAFE_INTEGER;


function sayHello(name, city, state) {
   return `Hello, ${name.join(' ')}!   Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));

function rgb(r, g, b) {
   let red = (r > 255 ? r = 255 : r < 0 ? r = 0 : r).toString(16).toUpperCase()
   if (red.length % 2) red = '0' + red
   let green = (g > 255 ? g = 255 : g < 0 ? g = 0 : g).toString(16).toUpperCase()
   if (green.length % 2) green = '0' + green
   let blue = (b > 255 ? b = 255 : b < 0 ? b = 0 : b).toString(16).toUpperCase()
   if (blue.length % 2) blue = '0' + blue
   return red + green + blue

}

console.log(rgb(255, -2, 255));

function toCamelCase(str) {
   const arr = str.replace(/[-_]/gi, ' ').split(' ')
   for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1)
   }
   return arr.join('')
}

function palindrome(string) {
   if (string.length = 0) {
      return false
   } else {
      const prov = string.replace(/[^a-zа-яё]/gi, '')
         .split('')
         .reverse()
         .join('')
         .toLowerCase()
      return prov === string.replace(/[^a-zа-яё]/gi, '')
         .split('')
         .join('')
         .toLowerCase()
   }
}

const search = (b, p) => p.filter(item => item <= b).sort((a, b) => a - b).join();

//const countSheeps = arr => arr.filter(a => a === true).length;

function reverse(str) {
   const arr = str.replace(/\s+/g, ' ').split(' ')
   for (let i = 1; i < arr.length; i++) {
      if (i % 2 === 1) arr[i] = arr[i].split('').reverse().join('')
   }
   return arr.join(' ').trim()
}

console.log(reverse("    ").length);

let alphanumeric = s => /^[a-z\d]+$/i.test(s);

const toBinary = n => Number(n.toString(2))

const xMarksTheSpot = (input) => {
   let arr = [];
   for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
         if (input[i][j] == 'x') {
            arr.push('x')
         }
      }
   }
   if (arr.length > 1) return []
   for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
         if (input[i][j] === 'x') return [i, j]
      }
   }
   return []
}
console.log(xMarksTheSpot([['o', 'x'], ['o', 'x']]))

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
   // Only change code below this line
   if (strokes === 1) {
      return names[0]
   } else if (strokes <= par - 2) {
      return names[1]
   } else if (strokes === par - 1) {
      return names[2]
   } else if (strokes === par) {
      return names[3]
   } else if (strokes === par + 1) {
      return names[4]
   } else if (strokes === par + 2) {
      return names[5]
   } else if (strokes >= par + 3) {
      return names[6]
   }
   // Only change code above this line
}

golfScore(5, 4);

function caseInSwitch(val) {
   let answer = "";
   switch (val) {
      case 1:
         answer = 'alpha';
         break;
      case 2:
         answer = 'beta';
         break;
      case 3:
         answer = 'gamma';
         break;
      case 4:
         answer = 'delta';
         break;
   }
   return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
   let answer = "";
   switch (val) {
      case 'a':
         answer = 'apple';
         break;
      case 'b':
         answer = 'bird';
         break;
      case 'c':
         answer = 'cat';
         break;
      default:
         answer = 'stuff'
   }
   return answer;
}

switchOfStuff('a');

function sequentialSizes(val) {
   let answer = "";
   switch (val) {
      case 1:
      case 2:
      case 3:
         answer = 'Low';
         break;
      case 4:
      case 5:
      case 6:
         answer = 'Mid';
         break;
      case 7:
      case 8:
      case 9:
         answer = 'High'
   }
   return answer;
}

function chainToSwitch(val) {
   let answer = "";
   switch (val) {
      case "bob":
         answer = "Marley";
         break;
      case 42:
         answer = "The Answer";
         break;
      case 1:
         answer = "There is no #1";
         break;
      case 99:
         answer = "Missed me by this much!";
         break;
      case 7:
         answer = "Ate Nine";
         break;
   }
   return answer;
}

let count = 0;

function cc(card) {
   if (card <= 6) {
      count++
   } else if (card <= 9) {
      count += 0
   } else {
      count--
   }
   return count > 0 ? count + ' Bet' : count + ' Hold'
}

function pillars(numPill, dist, width) {
   if (numPill === 1) return 0
   if (numPill === 2) return dist * 100
   return ((numPill - 1) * dist) * 100 + (numPill - 2) * width
}

function power(x, y) {
   let res = x;
   for (let i = 0; i <= y; i++) {
      res *= x;
   }
   return res
}
console.log(power(2, 2))

function addLength(str) {
   return str.split(' ').map(a => `${a} ${a.length}`)
}
console.log(addLength('apple ban'))

function incrementString(strng) {
   let re = /[0-9]/y;
   return strng.match(re)
}

console.log(incrementString("fo99obar99"))

const moveZeros = arr => arr.sort((a, b) => a === 0 ? 1 : b === 0 ? -1 : 0)

function ipsBetween(start, end) {
   const startArr = start.split('.').map(a => 256 - a);
   const endArr = end.split('.').map(a => 256 - a);
   const resArr = [];
   for (let i = 0; i <= 3; i++) {
      resArr[i] = startArr[i] - endArr[i];
   }
   return resArr[0] * 16777216 + resArr[1] * 65536 + resArr[2] * 256 + resArr[3]
}

reverse = function (array) {
   const reverseArray = [];

   for (let i = array.length - 1; i >= 0; i--) {
      reverseArray.push(array[i]);
   }

   return reverseArray;
}

var lastDigit = function (str1, str2) {
   let res = Math.pow(str1, str2).split('')
   return res[res.length - 1]
}

const areaOrPerimeter = (l, w) => l === w ? l * w : 2 * (l + w);

const makeUpperCase = str => str.toUpperCase();
const reverseList = (arr) => arr.reverse();

const myArray = [];
let i = 5;
while (i >= 0) {
   myArray.push(i);
   i--;
}

const myArray1 = [];
for (let i = 1; i <= 9; i = i + 2) {
   myArray1.push(i)
}

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
   total += myArr[i]
}
console.log(total)

function multiplyAll(arr) {
   let product = 1;
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
         product *= arr[i][j];
      }
   }
   return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

function multiply(arr, n) {
   if (n <= 0) {
      return 1;
   } else {
      console.log(multiply(arr, n - 1))
      return multiply(arr, n - 1) * arr[n - 1];
   }
}

console.log(multiply([1, 2, 3, 4, 5, 6], 4));


var findAverage = function (nums) {
   let res = 0;
   for (let i = 0; i < nums.length; i++) {
      res += nums[i];
   }
   return res / nums.length
}

const checkObj = (obj, checkProp) => obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';

const descendingOrder = (n) => Number((n + '').split('').sort((a, b) => b - a).join(''));

console.log(descendingOrder(123456789))

const contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

function lookUpProfile(name, prop) {
   for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
         if (contacts[i].hasOwnProperty(prop))
            return contacts[i][prop]
      } else {
         return "No such property"
      }
   }
   return "No such contact"
}

console.log(lookUpProfile("Akira", "likes"));

//РАНДОМНЫЕ ЧИСЛА JS======================================================
function randomWholeNum() {
   return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}
//parseInt ================================================================
function convertToInteger(str) {
   return parseInt(str, 2)
}

convertToInteger("10011");

//ТЕРНАНРНЫЙ ОПЕРАТОР==============================================================
function checkEqual(a, b) {
   return a === b ? 'Equal' : 'Not Equal'
}

checkEqual(1, 2);

function checkSign(num) {
   return num > 0 ? 'positive' : num === 0 ? 'zero' : 'negative';
}

checkSign(10);

//function РЕКУРСИЯ ==================================================================

function countdown(n) {
   if (n < 1) {
      return [];
   } else {
      const arrRes = countdown(n - 1);
      arrRes.unshift(n);
      return arrRes
   }
}

console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
   if (endNum < startNum) {
      return [];
   } else {
      const arrNew = rangeOfNumbers(startNum, endNum - 1);
      arrNew.push(endNum)
      return arrNew
   }

};

console.log(rangeOfNumbers(6, 9))

function maps(x) {
   const arrNew = [];
   for (let i = 0; i < x.length; i++) {
      arrNew.push(x[i] + x[i]);
   }
   return arrNew
}

function squareArea(A) {
   let squareAreaRes = (A * 4 / (Math.PI * 2)) * (A * 4 / (Math.PI * 2));
   return Number(squareAreaRes.toFixed(2));
}

function howManyGifts(maxBudget, gifts) {
   const arrRes = [];
   for (let i = 0; i < gifts.length; i++) {
      if (maxBudget >= gifts[i]) {
         maxBudget -= gifts[i]
      } else if (maxBudget >= 0) {
         arrRes.push(gifts[i])
      }
   }
   return gifts.length - arrRes.length
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]))

function makeNegative(num) {
   return num > 0 ? num * -1 : Math.abs(num)
}

console.log(makeNegative(-1))

//ПОИСК ПОВТОРЯЮЩИХСЯ БУКВ/СИМВОЛОВ ======================================

function hasUniqueChars(str) {
   for (i = 0; i < str.length; i++) {
      if (str.split(str[i]).length - 1 > 1) {
         return false;
      }
   }
   return true;
}
console.log(hasUniqueChars('fghjl'))

// ПОИСК УНИКАЛЬОГО ЧИСЛА =======================================================

function findUniq(arr) {
   const object = arr.reduce(function (map, el) {
      map[el] = (map[el] || 0) + 1;
      return map;
   }, {});
   let res = Object.keys(object).filter(function (el) {
      return object[el] === 1;
   })
   return Number(res.join(''));
}

console.log(findUniq([1, 3, 3]))

const s = [5, 7, 2];
function editInPlace() {
   return s.sort((a, b) => a - b)
}
editInPlace();

//ВЫВОД N ПЕРВЫХ ЕЛЕМЕНТОВ МАССИВА ======================================================


function first(arr, n = 1) {
   return n == undefined ? [arr[0]] : arr.splice(0, n)
}

console.log(first(['a', 'b', 'c', 'd', 'e'],))

//ПРЕОБРОЗОВАНИЕ МАССИВА СТРОК В МАССИВ ЧИСЕЛ =========================================

function toNumberArray(stringarray) {
   return stringarray.map(a => Number(a))
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]))

//проверка массива по кругу =================================================

//function duckDuckGoose(players, goose) {
//   const player = {};
//   for(let i = 0; players.length < goose; i++){
//      goose -= players.length;
//   }
//   player.name = players[goose-1]
//   return player
//}

function duckDuckGoose(players, goose) {
   for (let i = 0; players.length < goose; i++) {
      goose -= players.length;
   }

   return players[goose - 1]
}

console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 9))


function upArray(arr) {
   if (arr.length == 0) return null
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 9 || arr[i] < 0)
         return null
   }
   let res = (BigInt(arr.join('')) + 1n + '').split('').map(a => Number(a));
   if (res.length < arr.length) {
      let j = arr.length - res.length;
      for (let i = 0; i < j; i++) {
         res.unshift(0)
      }
   }
   return res
}
console.log(upArray([0, 0, 0, 1]));

const result = {
   success: ["max-length", "no-amd", "prefer-arrow-functions"],
   failure: ["no-var", "var-on-top", "linebreak"],
   skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
   // Only change code below this line
   const failureItems = [];
   for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
   }
   // Only change code above this line

   return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

//РЕКУРСИВНАЯ ФУНКЦИЯ СЛОЖЕНИЯ BigInt ===================================================

function res(a, b, result, carry, base) {
   if (a.length == 0 && b.length == 0 && !carry)
      return result;
   let left = parseInt(a.pop() || '0', 10);
   let right = parseInt(b.pop() || '0', 10);
   let l = left + right + (carry || 0);
   return res(a, b, l % base + (result || ""), Math.floor(l / base), base);
}
function add(a, b) {
   return res(a.toString().split(""), b.toString().split(""), "", "", 10).toString();
}

console.log(add('1000000000000000000000000000000000000', '1111111111111111111111111111111111111111111'))

//===================================================================================================

function oddCount(n) {
   let res = 0;
   for (let i = 0; i < n; i++) {
      if (i % 2 === 1) {
         res++
      }
   }
   return res
}

function sumEvenNumbers(input) {
   return input.filter(a => a % 2 == 0).reduce((a, b) => a + b, 0);
}