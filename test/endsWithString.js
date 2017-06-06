function confirmEnding(str, target) {
  let endWithStr = true;
  let strAry = [];
  //Output: boolean t/f
  //Input: two strings
  //Constraints: don't use .endsWith()
  //Edge Cases:

  //Slice the given string into an array of characters
  strAry = str.split("").reverse();
  //Slice the target array into an array of characters
  strAry2 = target.split("").reverse();
  //Compare the string in the last element of the array to
  //the target string
  if (strAry2.length > strAry.length)
    return false;
  else {
   for(i=(strAry2.length - 1);i>=0;i--){
     console.log("Comparison: " + strAry2[i] + " " + strAry[i]);
     if (strAry2[i] === strAry[i] && endWithStr)
       endWithStr = true;
       else {
         endWithStr = false;
       }
   }
  }

  return endWithStr;
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
