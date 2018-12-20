/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str){
   let res = [];
   if (str.length % 2 === 1) {
     str += '_';
   }
   for (let i = 0, len = str.length / 2; i < len; i++) {
     let subStr = str.substr(0, 2)
     res.push(subStr);
     str = str.replace(subStr, '');
   }
   return res;
}

/*
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}
*/