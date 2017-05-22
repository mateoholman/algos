
function palindrome(str) {
  //Remove all non-alphanumeric characters from the string & convert to lower case
  console.log('String is first ' + str);
  let newStr = str.replace(/[\W_]+/g, "").toLowerCase();
  //Convert the string to an array and remove all non-alphabetic chars
  console.log('String stripped is: ' + newStr);
  const strArry = [];
  for (i=0;i<newStr.length;i++){

    strArry[i] = newStr.slice(i,i+1);
  }
  //Reverse the array
  //Convert the reversed array back to a string
  aryStr = strArry.reverse().join('');
  console.log('The array string is: ' + aryStr);
  //Convert the string to lower case &
  //Check if the array is the same reversed
  if(newStr === aryStr) {
    return true;
  }
  else
    return false;
}



console.log(palindrome("eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
