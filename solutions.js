// 1) Reverse list
function reverseList(arr) {
    return arr.length !== 0 ? arr.reverse() : [];
  }

// 2) Square Every Digit
function squareDigits(num){
    return +num.toString().split('').map(n =>  +n * +n).join('') 
  }

// 3) Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

// 4) Highest and Lowest
function highAndLow(numbers){
  // ...
  let splitnums = numbers.split(' ');
  return`${Math.max(...splitnums)} ${Math.min(...splitnums)}`
}

// 5) Descending Order
function descendingOrder(n){
  //...
  return +n.toString().split('').sort((a,b) => b - a).join('')
}

// 6) Get the Middle Character
function getMiddle(s)
{
  //Code goes here!
  return s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[Math.floor(s.length / 2) ];
}

// 7) You're a square!
var isSquare = function(n){
  return Math.sqrt(n) - Math.floor(Math.sqrt(n)) == 0 ; // fix me
}

// 8) List Filtering
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(nums => typeof(nums) == 'number')
}

// 9) Isograms
function isIsogram(str){
  let split = str.toUpperCase().split('');
  return split.filter((value,index) => split.indexOf(value) === index).length == split.length;
}

// 10) Exes and Ohs
function XO(str) {
  //code here
return str.replace(/x/gi , "").length == str.replace(/O/gi, "").length
}

// 11) Jaden Casing Strings
String.prototype.toJadenCase = function () {
  //...
   let mergeString = this.split('').join('');
   return mergeString.split(' ').map(s => s[0].toUpperCase() + s.slice(1 , s.length)).join(' ')
};
