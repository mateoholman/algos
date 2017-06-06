
function findLongestWord(str) {
  //Split the string into an array of words
  let wordAry = str.split(" ");
  //Check the length of each word in the array
  let bigWord = 0;
  for(i=0;i<wordAry.length;i++){
    if(wordAry[i].length > bigWord)
      bigWord = wordAry[i].length;
  }
  return bigWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
