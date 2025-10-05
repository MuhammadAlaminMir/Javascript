var a = 10
var b = 20

//a > b = true / false

if (a > b) { 
    console.log('A is bigger')
}

if (b > a) {
    console.log('B is bigger')
};

var n = 25

if (n % 3 === 0 ) {
    console.log(n, 'is even number')
}
if(n % 3 === 1 ){
    console.log(n,'is odd number')
}
var name = 'suraiya';
var good = 'kotha sone' ;
var bad = 'kotha sone na';

var mony = bad;

if(mony === good ){
    console.log(name, good)
    console.log('mony valo hoa gache');
}
if(mony === bad){
    console.log(name, bad)
    console.log('toi ar valo hole ne')
}

var success = 'work hard';
var fail = 'have fun'

var wantSuc = fail;

if (wantSuc === success){
    console.log(success)
}
if(wantSuc === fail){
    console.log(fail);
}