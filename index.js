function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
  var dummyArray = ["cat", "dog", "other things"];
  dummyArray.forEach(callback);
  return dummyArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
  