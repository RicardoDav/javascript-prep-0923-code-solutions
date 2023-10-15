/* exported getValue */
function getValue(object, key) {
  if (object[key]) {
    return object[key];
  } else {
    return undefined;
  }
}
