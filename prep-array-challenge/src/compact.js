/* exported compact */
function compact(array) {
  const initialArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i]) {
      initialArray.push(array[i]);
    }
  }
  return initialArray;
}
