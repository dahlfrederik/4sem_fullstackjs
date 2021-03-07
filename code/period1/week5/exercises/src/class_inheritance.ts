//A) The declaration below defines a Shape class, which as it's only properties has a color field +  a getArea() and a getPerimeter() function which both returns undefined.
//This is the closest we get to an abstract method in Java.

abstract class Shape {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  abstract get area(): number;
  abstract get perimeter(): number;

  get getColor(): string {
    return this.color;
  }
  set setColor(color: string) {
    this.color = color;
  }

  toString(): string {
    return `area: ${this.area}, perimiter: ${this.perimeter}, color: ${this.color}`;
  }
}

//Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property.
//Verify that you cannot (why) make an instance of this class.

//B) Create a new class Circle that should extend the Shape class.

class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  get area(): number {
    return 30;
  }
  get perimeter(): number {
    return 30;
  }

  get getRadius(): number {
    return this.radius;
  }
  set setRadius(radius: number) {
    this.radius = radius;
  }
}

//C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.

class Cylinder extends Circle {
  height: number;

  constructor(color: string, radius: number, height: number) {
    super(color, radius);
    this.height = height;
  }
  get area(): number {
    return 50;
  }
  get perimeter(): number {
    throw new Error("Not implemented");
  }
  get volume(): number {
    return 400;
  }

  get getHeight(): number {
    return this.height;
  }
  set setHeight(height: number) {
    this.height = height;
  }
}
