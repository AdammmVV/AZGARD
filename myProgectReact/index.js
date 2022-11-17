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