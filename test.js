const first = [
  {name:"Lucas", age:20}, 
  {name:"Santi", age:22}
];
const second = [
  {type: "Sedan", model:2016}, 
  {type: "Golf", model:1995}, 
  {type:"BMW", model:2021}
];
const third = [
  {name:"Lucas", age:20, high:190}, 
  {name:"Santi", age:22, high:180}
];

function newArrObjectOnly(arr, str) {
  if (typeof(arr) != "object" || 
      typeof(str) != "string") { 
    
    return;
  }
  const newArray = [];

  arr.forEach(element => {
    let temp = new Object();

    if (Object.keys(element)
              .includes(str)) {

      temp[str] = element[str];
      newArray.push(temp);
    }
  });

  return newArray;
}

function newArrObjectWithout(arr, str) {
  if (typeof(arr) != "object" || 
      typeof(str) != "string") { 
    
    return;
  }
  let newArray = [];

  arr.forEach(element => {
    let temp = new Object();

    Object.keys(element).forEach(key => {
      if (key != str) {
        temp[key] = element[key];
      }
    });

    newArray.push(temp);
  });

  return newArray;
}


/* Examples */

console.log(newArrObjectOnly(first, "name")); // [ { name: 'Lucas' }, { name: 'Santi' } ]
console.log(newArrObjectOnly(second, "type")); // [ { type: 'Sedan' }, { type: 'Golf' }, { type: 'BMW' } ]

console.log(newArrObjectWithout(third, "high")) // [ { name: 'Lucas', age: 20 }, { name: 'Santi', age: 22 } ]
console.log(newArrObjectWithout(third, "name")) // [ { age: 20, high: 190 }, { age: 22, high: 180 } ]