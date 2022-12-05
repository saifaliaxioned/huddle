// Spread operator
// function sum(name, ...rest) {
//   let totalMarks = 0;
//   for (let i of rest) {
//     totalMarks += i;
//   }
//   console.log(`hi ${name} your mark is ${totalMarks}`);
// }
// let arr = [50,60,60];
// sum('saif',...arr);

let arr1 = [1,2,3,4];
// let arr2 = arr1;
let arr2 = [...arr1];
arr1.push(6);

console.log(arr1);
console.log(arr2);

// easy to copy
// Old
// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4,5,6);

// New
// let arr2 = [0,...arr1,4,5,6];
// console.log(arr2);


const obj1 = {
  name : 'saif'
}

const obj2 = {
  age : 22,
  address: {
    apt : 'abc'
  }
}

// easy to concat
// const obj3 = {...obj1,...obj2}
// console.log(obj1);

// obj3.address.apt = 'xyz';
// console.log(obj3);


