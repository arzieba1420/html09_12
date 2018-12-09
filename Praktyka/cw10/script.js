function isOdd(number) {
    if ((number % 2) == 0) {
        console.log(number + " jest parzysta");
    } else {
        console.log(number + " jest nieparzysta");
    }
}
    isOdd(8);

function showNumbers(){
    for (var i=1;i<=50;i++){
        if (i<=10){
            console.log(i);
        } else if (i>10 && i<20 && i%2==1){
            console.log(i);
        } else if (i>19 && i<30 && i%2==0){
            console.log(i);
        } else if (i>29 && i<40 && i%3==0){
            console.log(i);
        } else if (i>=40){
            console.log(i*2);
        }
    }
}
showNumbers();


