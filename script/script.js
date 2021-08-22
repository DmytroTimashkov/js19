



function sum() {
  let plus = 0;

return  function (a) {
      plus += a
      return console.log(plus);
    }

}

let plus = sum()
plus(2)
plus(22)
plus(30)







function counter(start=0,plus=1) {
    let starting = start
    let counter = start;
    let num=plus
    function standart() {
      return counter +=num
    }
    function reset() {
      return counter = start
    }
    return {standart,reset}
}

let newCounter1 = counter(1,2);
let newCounter2 = counter(3,3);
let newCounter3 = counter(4,4);

console.log(newCounter1.standart())

newCounter2.standart();
console.log(newCounter2.standart())

console.log(newCounter2.reset());


console.log(newCounter3.standart())
