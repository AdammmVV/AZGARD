function distinct(a) {
   a = a.filter((element, index) => {
      return a.indexOf(element) === index;
   });
   return a;
}

console.log(distinct([1,1,2,3]));

function helloWorld() {
   let str = "Hello World!";
   console.log(str)
};

helloWorld();

function grabDoll(dolls){
   var bag=[];
   //coding here
   for(let i=0;i<dolls.length;i++){
      if(bag.length == 3) break; 
      else if(dolls[i] != "Hello Kitty" && dolls[i] != "Barbie doll")continue;
      bag.push(dolls[i])    
   }
   return bag;
 }
 grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]);
 
 function giveMeFive(obj){
   //coding here
   let five = [];
   for (let key in obj){
      if (key.length  === 5) five.push(key);
      if (obj[key].length === 5) five.push(obj[key]);
   }
 }

giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"})


function whatNumberIsIt(n){
   //coding here
   //if
   if (Number(n) == Infinity) console.log("Input number is Number.POSITIVE_INFINITY")
   if(Number(n) == Number()) console.log("Input number is " + n)
   if(Number(n) == 1.7976931348623157e+308) console.log("Input number is Number.MAX_VALUE");
   if(Number(n) == -Infinity) console.log("Input number is Number.NEGATIVE_INFINITY");
   if(Number(n) == Number.MIN_VALUE) console.log("Input number is Number.MIN_VALUEY");
   if(Number(n) == Infinity) console.log("Input number is Number.POSITIVE_INFINITY");
   if(Number.isNaN(n)) console.log("Input number is Number.NaN");
   
 }
//whatNumberIsIt(1/0)
//whatNumberIsIt(100);
//whatNumberIsIt(1.7976931348623157e+308);
//whatNumberIsIt(-Number.MAX_VALUE*2);
//whatNumberIsIt(5e-324);
//whatNumberIsIt(NaN)
//whatNumberIsIt(Infinity+1)

function colorOf(r,g,b){
   //coding here
 
   var red = r.toString(16),
      green = g.toString(16),
      blue = b.toString(16);
      if(red.length==1) red = "0"+red;
      if(green.length==1) green = "0"+green;
      if(blue.length==1) blue = "0"+blue;
   console.log("#"+red+green+blue)
   return "#"+red+green+blue;
 }
 colorOf(102,61,8)