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