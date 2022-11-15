String.prototype.camelCase = function () {
   const arr = this.split(' ')
   const arrRes = []
   for (let i = 0; i < arr.length; i++) {
      arrRes.push(arr[i].replace(/./, el => el.toUpperCase()))
   }
   return arrRes.join('')
}

function stringParse(string) {
   return string.replace(/.+/g, el => [el])
}

console.log(stringParse("aaaabbcdefffffffg"))