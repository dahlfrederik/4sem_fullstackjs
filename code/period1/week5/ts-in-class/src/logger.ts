/* function logger(a: number, b: string) {
  console.log(`Value 1: ${a}, value 2: ${b}`);
}
let a = 12,
  b = "Hello World";
logger(a, b); */

interface IPerson {
  name: string;
}
interface IAddress {
  street: string;
}

class Person implements IPerson {
  //private _name : String;
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
  get name(): string {
    return this.#name;
  }
  set name(name: string) {
    this.#name = name;
  }
  toString(): string {
    return this.#name;
  }
}

class Address implements IAddress {
  //private _name : String;
  _street: string;
  constructor(street: string) {
    this._street = street;
  }
  get street(): string {
    return this._street;
  }
  set street(street: string) {
    this._street = street;
  }
  toString(): string {
    return this._street;
  }
}

function loggerV3(a: IPerson, b: IAddress) {
  console.log(`Person ${a.name}, adress: ${b.street}`);
}

let p1 = new Person("Kurt Wonnegut");
let a1 = new Address("Lyngby Hovedgade 23");

loggerV3(p1, a1);

class GenericLogger<T, U> {
  constructor() {}
  log = (a: T, b: U) => console.log(`Value 1: ${a}, value 2: ${b}`);
}

let personlogger = new GenericLogger<IPerson, IAddress>();
personlogger.log(p1, a1);
