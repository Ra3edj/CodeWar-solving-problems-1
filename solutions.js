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

// 12) Shortest Word
function findShort(s){
  let lengthOfwords = s.split(' ').map(word => word.length)
  return Math.min(...lengthOfwords)
 }

// 13) Complementary DNA
function DNAStrand(dna){
  //your code here
  return dna.split('').map(symbols => symbols == 'A' ? 'T': symbols == 'C' ? 'G': symbols == 'G' ? 'C':'A').join('');
}

// 14) Credit Card Mask
// return masked string
function maskify(cc) {
  let split = cc.split('');
  return cc.length > 4 ? split.fill('#' , 0 , split.length - 4).join('') : cc;
}

// 15) Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let sortedarr = numbers.sort((a,b) => a - b);
  return sortedarr[0] + sortedarr[1];
}

// 16) Beginner Series #3 Sum of Numbers
function getSum( a,b )
{
   //Good luck!
  let sum = 0;
  if(a == b){return a}
  else if(a > b){
    for(let i = b; i <= a; i++){
       sum += i;
    }
    return sum
  }
    else{
      for(let i = a; i <= b; i++){
        sum += i;
    }
      return sum
    } 
}

// 17) Two to One
function longest(s1, s2) {
  // your code
  let s3 = s1.split('').filter((value,index) => s1.indexOf(value) == index).sort()
  
  .concat(s2.split('').filter((value,index) => s2.indexOf(value) == index).sort());
  
  return s3.filter((value,index) => s3.indexOf(value) == index).sort().join('');
}

// 18) Friend or Foe?
function friend(friends){
  //your code here
  return friends.filter(friend => friend.length == 4)
}

// 19) Find the next perfect square!
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 == 0 ? Math.pow(Math.sqrt(sq) + 1 , 2) : -1;
};

// 20) Vowel Count
function getCount(str) {
    return str.match(/[aeiou]/gi) == null ? 0 : str.match(/[aeiou]/gi).length ;
}

// 21) Is this a triangle?
function isTriangle(a,b,c)
{
    return a + b > c && a + c > b && b + c > a; 
 }

// 22) String ends with?
function solution(str, ending){
    // TODO: complete
    return str.endsWith(ending)
  }

// 23) Odd or Even?
function oddOrEven(array) {
   //enter code here
  return array.length == 0 ? 'even' : array.reduce((acc,value) => acc + value) % 2 == 0 ? 'even' : 'odd';
}

// 24) Reverse words
function reverseWords(str) {
    // Go for it
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
  }

// 25) Sum of the first nth term of Series
function SeriesSum(n)
{
  // Happy Coding ^_^
  let count = 0;
    for(let j = 1; j <= n * 3; j += 3){
       count += 1 / j
      console.log(count)
  }return count.toFixed(2) + ''
}

// 26) The highest profit wins!
function minMax(arr){
    return [Math.min(...arr) , Math.max(...arr)]; // fix me!
}

// 27) Area of an arrow
function arrowArea(a,b) {
  // your code
  return a * b/4
}

// 28) Small enough? - Beginner
function smallEnough(a, limit){
  return a.filter(num => num > limit).length == 0;
}
