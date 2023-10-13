/* exported isVowel */
function isVowel(char) {
  const lowercaseChar = char.toLowerCase();

  if (
    lowercaseChar !== 'a' &&
    lowercaseChar !== 'e' &&
    lowercaseChar !== 'i' &&
    lowercaseChar !== 'o' &&
    lowercaseChar !== 'u'
  ) {
    return false;
  }
  return true;
}
