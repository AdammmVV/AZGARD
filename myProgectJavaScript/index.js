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