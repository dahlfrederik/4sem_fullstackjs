//a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
//d) Change the interface to make published and pages become optional - Verify the new behaviour.
//e) Change the interface to make author readonly - Verify the new behaviour.

interface IBook {
  title: string;
  readonly author: string;
  published?: Date;
  pages?: number;
  run(): void;
}

//b) Create a function that takes an IBook instance and test it with an object instance.
const logger = (book: IBook) => {
  console.log(
    `Author: ${book.author}, Title: ${book.title}, Published: ${book.published}, Pages: ${book.pages}`
  );
};

const logger2 = (book: IBook) => {
  if (book.pages != null || book.published != null) {
    console.log(`Author: ${book.author}, Title: ${book.title}`);
  }
};

// f) Create a class Book and demonstrate the "Java way" of implementing an interface.

class TryingMyInterface implements IBook {
  title: string;
  author: string;
  published?: Date | undefined;
  pages?: number | undefined;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  run(): void {
    console.log(`${this.title} ${this.author}`);
  }
}

let tryTheInterface: IBook = new TryingMyInterface(
  "Star Wars - The Clone Wars",
  "G. Lucas"
);

tryTheInterface.run();

//c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
/**
 * Duck typing, Typescript compares signatures of classes and allows object of one
 * type to be used with an instance of another if the object’s type signature is same
 * as, or is a subset of, the initiating class’s signature.
 * "If it walks like a duck and quacks like a duck, it must be a duck."
 */
