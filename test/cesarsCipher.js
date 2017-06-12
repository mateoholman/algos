function rot13(str) {
  //O: A decoded string
  //I: An encoded string where the values of the letters are shifted by 13
  //places.

  //Slice the string into an array of characters
  let codedAry = [];
  let decodedAry = [];
  let newStrAry = [];

  for(i=0;i<str.length;i++){
    codedAry[i] = str.charCodeAt(i);
  }
  //Xform the array values to their unicode equivalent
  console.log("O is: " + "O".charCodeAt(0));
  console.log("P is: " + "P".charCodeAt(0));
  console.log("R is: " + "R".charCodeAt(0));
  console.log("Z is: " + "Z".charCodeAt(0));

  //Shift the characters by 13 places, but only if they are letters
  decodedAry = codedAry.map((e) => {
    if(e >= 65 && e <= 90){
      return e-13;
    }
    else if (e >= 97 && e <= 122){
      return e-13;
    }
      else {
        return e;
      }
  });
  //Xform the array of unicode values back to characters

  //Combine the array back to a string
  newStrAry = decodedAry.map((e) => {
    return String.fromCharCode(e)});
  str = newStrAry.join("").toString();
  console.log("The new string is: " + str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
