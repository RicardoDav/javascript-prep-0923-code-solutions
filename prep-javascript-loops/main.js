// create your loops here.
function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
const loop1 = whileLoop1();
console.log('Whileloop 1 output ', loop1);

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i < 19) {
    array.push(i);
    i = i + 2;
  }
  return array;
}
const loop2 = whileLoop2();
console.log('Whileloop 2 output ', loop2);

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
const loop3 = forLoop1();
console.log('ForLoop 1 output ', loop3);

function forLoop2() {
  for (let i = 100; i >= 85; i--) {
    console.log('Time till explosion: ' + i);
  }
}

forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const x in object) {
    array.push(x);
  }
  return array;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
const resultArray = forInLoop1(object);
console.log(resultArray);

function forInLoop2(object2) {
  const array2 = [];
  for (const x2 in object2) {
    array2.push(object2[x2]);
  }
  return array2;
}

const object2 = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
const resultArray2 = forInLoop2(object2);
console.log(resultArray2);
