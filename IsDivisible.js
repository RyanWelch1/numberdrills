function isDivisible(divisee, divisor) {
   if (divisee % divisor === 0){
     return true;
   else if (divisee % divisor !== 0){
     return false;
 		}
   }
}

var one = isDivisible(10, 2);
console.log(one);