// abs
m= -7.9
x=Math.abs(m);
console.log('abs=',x);
//ceil
n=-8.4
x=Math.ceil(n);
console.log('ceil=',x);
//floor
o=-5.04
x=Math.floor(o);
console.log('floor=',x);
//max
w=23;
w1=43;
w2=54
x=Math.max(w,w1,w2);
console.log('max=',x);
//min
q=23;
q1=38;
q2=45;
x=Math.min(q,q1,q2);
console.log('min=',x);
// random 
x=Math.random();
console.log('random=',x);
//round
r=-3.7
x=Math.round(r);
console.log('round=',x);
//SQRT
s=16
x=Math.sqrt(s);
console.log('sqrt=',x);
//                    < String >
//charAt
var s='venkat';
var y=s.charAt(2);
console.log('charAt=',y);

//uppercase
var s="venkat";
var y=s.toUpperCase();
console.log('uppercase=',y);

//concat
var a="venkat";
var b="  the cricket player";
var c=a.concat(b);
console.log('concat=',c);

//includes
let pet=['eagle','shark','elephant'];
console.log(pet.includes('eagle'));

//indexOf
let friends=['arun','sekar','deepak','francis','suthakar'];
console.log(friends.indexOf('deepak'));

//lastIndexOf
const frd=['Gnana','Arun','Sudhakar','Francis','Arun','Deepak'];
console.log(frd.lastIndexOf('Arun'));

//Replace
let p='i am a cricket player';
console.log(p.replace('i am a cricket player','i love cricket'));

//replaceAll
let e=' iam a idiot.but not lazy';
console.log(e.replaceAll('idiot','lazy'));

//slice
let z='ilovemsdhoni';
console.log(z.slice(3,7));
