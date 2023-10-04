const person = {
  firstName: 'Ricardo',
  lastName: 'Davila',
  hobby: 'movies',
};
console.log(person);
console.log(
  "The person's name is: " + person.firstName + ' ' + person.lastName
);
person.job = 'Coder';
console.log("The person's job is: " + person.job);
person['previousJob'] = 'Teacher';
console.log("The person's previous job is: " + person.previousJob);
console.log(person);
