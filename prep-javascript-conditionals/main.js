/* Your JS goes in this file */
function isAdult(age) {
  return age < 18;
}
const label1 = isAdult(17);
console.log(label1);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
const studentScore = 70;
const label2 = didStudentPass(studentScore);
console.log(label2);

function gradeCalculator(score) {
  switch (true) {
    case score > 100:
      return 'A++';
    case score > 90:
      return 'A';
    case score > 80:
      return 'B';
    case score > 70:
      return 'C';
    case score > 60:
      return 'D';
    default:
      return 'F';
  }
}

const studentScore2 = 105;
const label3 = gradeCalculator(studentScore2);
console.log(label3);

function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
}

const season = 'spring';
const label4 = seasonMessenger(season);
console.log(label4);

function dayDetector(dayOfWeek) {
  if (dayofWeek === 'saturday') {
    return 'have a good weekend';
  } else if (dayOfWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return "It's a weekday";
  }
}

const dayofWeek = 'thursday';
const label5 = dayDetector(dayofWeek);
console.log(label5);
