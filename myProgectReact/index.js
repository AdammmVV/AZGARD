function translatePigLatin(str) {
   let vowels = "aeiou";
   let res = 0;
   for (let i = 0; i < vowels.length; i++) {
      if (str.indexOf(vowels[i]) == 0) {
         res = 1; break
      } else if (str.indexOf(vowels[i]) > 0) {
         res = 0; break
      } else {
         res = 2;
      }
   }
   if (res == 1) {
      return `${str}way`;
   } else if (res == 2) {
      return `${str}ay`;
   } else {
      return str.replace(/^([^aeuio]+)(\w+)/, '$2$1ay');
   }
}

console.log(translatePigLatin("rhythm"));


function myReplace(str, before, after) {
   const arr = str.split(' ');
   let res = arr.slice(arr.indexOf(before), arr.indexOf(before) + 1);
   let afterRes;
   if (/^[A-Z]/.test(res.join())) {
      afterRes = after.split('')
      afterRes.splice(0, 1, after[0].toUpperCase())
      res = arr.splice(arr.indexOf(before), 1, afterRes.join(''))
   } else {
      res = arr.splice(arr.indexOf(before), 1, after.toLowerCase())
   }
   return arr.join(' ');
}

console.log(myReplace("I think we should look up there", "up", "Down"));


function pairElement(str) {
   const arrRes = [];
   for (let i = 0; i < [...str].length; i++) {
      if ([...str][i] == 'G') {
         arrRes.push(['G', 'C'])
      } else if ([...str][i] == 'C') {
         arrRes.push(['C', 'G'])
      } else if ([...str][i] == 'T') {
         arrRes.push(['T', 'A'])
      } else if ([...str][i] == 'A') {
         arrRes.push(['A', 'T'])
      }
   }
   return arrRes;
}


function pairElement(str) {
   const obj = { A: 'T', T: 'A', C: 'G', G: 'C', };
   const arrStr = str.replace(/[ATCG]/g, el => el + obj[el]).split('');
   const arr = [];
   while (arrStr.length) {
      arr.push(arrStr.splice(0, 2));
   }
   return arr;
}


function solution(a) {
   if(a.length == 1 || a[0] < 0 || a[0] > a.length-1) return 1;
   let pozition = a[0];
   for(let i = 0; i < a.length; i++){
      pozition = pozition + a[pozition]
      if(pozition > a.length-1 || pozition < 0) {
         return i+2;
      } 
   }
   return -1
}
console.log(solution([-3]))