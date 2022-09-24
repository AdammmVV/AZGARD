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