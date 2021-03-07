//a) Create an interface to describe a function: myFunc that should take three string parameters and return a String Array.
interface myFunc {
  (a: string, b: string, c: string): string[];
}

//b) Design a function "implementing" this interface which returns an array with the three strings
let f1: myFunc;
f1 = (a: string, b: string, c: string): string[] => {
  return [a, b, c];
};

//c) Design another implementation that returns an array, with the three strings uppercased.
let f2: myFunc;
f2 = (a: string, b: string, c: string): string[] => {
  let startArray = [a, b, c];
  const upperCased = startArray.map((element) => element.toUpperCase());
  return upperCased;
};

//e) Test f3 with the two implementations created in b+c.
let f3 = function logger(f1: myFunc) {
  //Simulate that we get data from somewhere and uses the provided function
  let [a, b, c] = ["A", "B", "C"];
  console.log(f1(a, b, c));
};
f3(f2);

//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
// Example of this not working with a function without the myFunc interface
//f3("aString".toUpperCase());
