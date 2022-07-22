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
