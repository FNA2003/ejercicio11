const example = [
  {name:"Lucas", edad:20}, 
  {name:"Santi", edad:22}
];
const cars = [
  {marca: "Sedan", modelo:2016}, 
  {tipo: "Golf", modelo:1995}, 
  {marca:"BMW", modelo:2021}
];
const tercero = [
  {name:"Lucas", edad:20, altura:190}, 
  {name:"Santi", edad:22, altura:180}
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