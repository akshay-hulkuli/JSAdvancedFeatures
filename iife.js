let add = (function(a,b){
    return a + b;
})(10, 20);

console.log(add);


(function() {
    var counter = 0;

    function multiply(a, b) {
        return a * b;
    }

    console.log(multiply(10,20)); // 30
}());