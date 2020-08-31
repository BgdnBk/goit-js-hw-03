const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  // const objArr = Object.entries(employees);
  // let bestTask = 0;
  // let bestName = "";
  // for (let [name, value] of objArr) {
  //   if (value > bestTask) {
  //     bestTask = value;
  //     bestName = name;
  //   }
  // }
  // return bestName;

  // Write code under this line
  // const keys = Object.keys(employees);
  // // console.log(objArr);
  // let access = "";
  // let res = 0;
  // for (const key of keys) {
  //   if (employees[key] > res) {
  //     res = employees[key];
  //     access = key;
  //   }
  //   // console.log(key);
  //   // console.log(employees[key]);
  // }
  // return access;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
