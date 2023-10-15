/* exported toObject */
function toObject(keyValuePair) {
  const result = {};

  if (keyValuePair.length === 2) {
    const key = keyValuePair[0];
    const value = keyValuePair[1];
    result[key] = value;
  }

  return result;
}
