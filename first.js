/* Test objects */
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


/*
 * @arr: Array<Objects>  (object process)
 * @str: String          (target)
 *
 *  newArrObjectOnly -> <undefined | Array<Objects> | Array<undefined> >
 *
 *  The newArrObjectOnly process a list of objects. 
 * Each (or any) object contains a key that may equal the 'str' 
 * parameter, if it is, that key-value will be push to an 
 * array, continue with the other objects and return the array.
*/
function newArrObjectOnly(arr, str) {
  // Type check
  if (typeof(arr) != "object" || 
      typeof(str) != "string") { 
    
    return;
  }

  
  const newArray = []; // Array that will be returned
  let temp; // Temporal object to push on the main array


  arr.forEach(element => {
    // Check if the object has the provided key
    if (Object.keys(element)
              .includes(str)) {
      
      // If it does, add the short object to the array
      temp = new Object();
      temp[str] = element[str];
      newArray.push(temp);
    }
  });


  return newArray;
}


/*
 * @arr: Array<Objects>  (object process)
 * @str: String          (avoided target)
 *
 *  newArrObjectWithout -> <undefined | Array<Objects> | Array<undefined> >
 *
 *  The newArrObjectWithout process a list of objects. 
 * And filter each object to DON'T have the 'str' value. 
 * And return a list of the filtered objects.
*/
function newArrObjectWithout(arr, str) {
  // Type check
  if (typeof(arr) != "object" || 
      typeof(str) != "string") { 
    
    return;
  }


  const newArray = []; // Main array, where the filtered objects will be
  let temp; // Temporal filtered object container


  // Iterate through every object
  arr.forEach(element => {
    // Reset the object container
    temp = new Object();

    // And check all of the keys of x object
    Object.keys(element).forEach(key => {
      // If the current key is not equal to the target, we'll add the key-value
      if (key != str) {
        temp[key] = element[key];
      }
    });

    // If the current object has values on it, we'll add it to the list
    if (Object.keys(temp).length > 0) {
      newArray.push(temp);
    }
  });


  return newArray;
}


/* Examples */

console.log(newArrObjectOnly(first, "name")); // [ { name: 'Lucas' }, { name: 'Santi' } ]
console.log(newArrObjectOnly(second, "type")); // [ { type: 'Sedan' }, { type: 'Golf' }, { type: 'BMW' } ]

console.log(newArrObjectWithout(third, "high")) // [ { name: 'Lucas', age: 20 }, { name: 'Santi', age: 22 } ]
console.log(newArrObjectWithout(third, "name")) // [ { age: 20, high: 190 }, { age: 22, high: 180 } ]