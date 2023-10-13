/* exported getWords */
function getWords(string) {
  if (string.trim() === '') {
    return [];
  }

  const words = string.split(' ');
  return words;
}
