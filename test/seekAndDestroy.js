
function destroyer(arr) {
  //O: Array with all elements matching the passed arguments
  //I: An array where the first element is an array and the next elements are arguments to be removed

  //Pull the arguments passed in to the function and put them in an array
  // var args = Array.from(arguments);
  // //Take the array we want to manipulate from the given array
  // let newArr = args[0];
  // let filterNumArr = [];
  // let filteredArr = [];
  //
  // for(k=1;k<args.length;k++){
  //   filterNumArr = args[k];
  // }
  //
  // function filterer(){
  //   return !filterNumArr;
  // }
  //
  // // Cycle through the arguments passed in to destroyer
  //   filteredArr = newArr.filter(filterer);
  //
  // for(j=0;j<filteredArr.length;j++){
  //   console.log(filteredArr[j]);
  // }
  //
  // //return the filtered array
  // return filteredArr;

  function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
