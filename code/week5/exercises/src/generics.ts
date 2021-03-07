//a) Implement a generic function which will take an array of any kind, and return the array reversed
//(just use the built-in reverse function), so the three first calls below will print the reversed array, and the last call will fail.

function reverseArr<T>(array: T[]) {
  return array.reverse();
}

console.log(
  reverseArr<string>(["a", "b", "c"])
);
console.log(
  reverseArr<number>([1, 2, 3])
);
console.log(
  reverseArr<boolean>([true, true, false])
);
//console.log(reverseArr<number>(["a","b","c"]));

//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder<T> {
  #value: T;
  constructor(value: T) {
    this.#value = value;
  }

  get getValue(): T {
    return this.#value;
  }
  set setValue(value: T) {
    this.#value = value;
  }
}
// Code from exercise description : Must be able to run.
let d = new DataHolder<string>("Hello");
console.log(d.getValue);
d.setValue = "World";
console.log(d.getValue);

let d2 = new DataHolder<number>(123);
console.log(d2.getValue);
d2.setValue = 500;
console.log(d2.getValue);

//Verify that once created, an instance can only be used with the type it was created from.
// d.setValue(23); FAILS: becuase d was created with string, not numbers

//c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods
