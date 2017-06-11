
function getIndexToIns(arr, num) {
  //O: The index in a sorted array arr where the given num should be inserted
  //I: An array arr and a number num

  let sortedArr = arr.sort();
  for (j=0;j<arr.length;j++){
    console.log(sortedArr[j]);
  }
  let indexLocation = 0;

  for(i=0;i<sortedArr.length;i++){
    if (num === sortedArr[i]) {
      return i;
    }
    else if (sortedArr[i] > num){
      return i;
    }
    else
      indexLocation = i;
  }

  return indexLocation+1;

}

getIndexToIns([5, 3, 20, 3], 5);
