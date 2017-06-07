function truncateString(str, num) {
  //O: A truncated string
  //I: A string "str" and the desired string length "num"
  //C:
  //E:

  let strAry = str.split("");
  let newStrAry = [];
  let altAry = [];
  let trunLoc = 0;
  let dots = "...";
  //Determine where to truncate.
  //If the string length is <= 3, we take the num and add the ...
  if (num <= 3){
    for(i=0;i<num;i++){
      newStrAry[i] = strAry[i];
    }
    newStrAry[newStrAry.length] = dots;
  }
  //If the string length is > 3, we truncate the string 3 spots prior to the location
  else {
    let truncLoc = num - 3;
    for(i=truncLoc;i<num;i++){
      strAry[i] = '.';
    }
    newStrAry = strAry.slice(0,num);
    console.log(newStrAry.join(""));
  }

  //Return the truncated string
  return strAry.join("");
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
