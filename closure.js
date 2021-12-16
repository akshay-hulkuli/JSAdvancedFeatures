function makeFunc() {
    var name = 'Siri';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc(); //prints siri. eventhough it is a local variable


function makeAdder(x) {  //currying
    return function(y) {
      return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
  