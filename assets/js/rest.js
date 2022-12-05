// Rest operator
// we can't add rest operator in start or middle
function sum(name, ...rest) {
  let totalMarks = 0;
  for (let i of rest) {
    totalMarks += i;
  }
  console.log(`hi ${name} your mark is ${totalMarks}`);
}

sum('saif', 50, 60, 10);

arr = [1, 2, 3, 4, 5, 6];

const obj1 = {
  name: 'saif',
  age: 22,
  city: 'thane'
}