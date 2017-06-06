
function titleCase(str) {
  //Convert the string to lower case
  str = str.toLowerCase();
  //Split the string into an array
  let strArry = [];
  strArry = str.split(" ");
  //Change the first letter of each word to upper case
  for(i=0;i<strArry.length;i++){
    //Slice the current word
    let newAry = [];
    newAry = strArry[i].split('');
    newAry[0] = newAry[0].toUpperCase();
    newAry = newAry.join('');
    console.log('newAry word is now: ' + newAry);
    strArry[i] = newAry;
  }
  return strArry.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
