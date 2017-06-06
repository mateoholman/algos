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
  if (strAry.length <= 3){
    for(i=0;i<num;i++){
      newStrAry[i] = strAry[i];
    }
    newStrAry[newStrAry.length] = dots;
  }
  else {
    console.log("In the else");
    // let truncLoc = num - 4;
    // for(i=truncLoc;i<num;i++){
    //   strAry[i] = '.';
  }

  //Return the truncated string
  return strAry.join("");
}

truncateString("A-", 1);
