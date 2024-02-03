const calculator = {
    plus: function (a,b){
        alert(a+b); //console.log 말고 alert로 주면 값이 하나씩 나옴
    },
    minus: function (a,b){
        alert(a-b);
    },
    times: function(a,b){
        alert(a*b);
    },
    divide: function(a,b){
        alert(a/b);
    },
    power: function (a,b) {
        alert(a**b);
    },
};

calculator.plus(2,3);
calculator.times(2,3);
calculator.minus(2,3);
calculator.divide(2,3);
calculator.power(2,3);
