// Bollean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = 'blue';

// Array
let list: number[] = [1, 2, 3];
let genericArray: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
// Initialize it
// x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void { 
  console.log("This is my warning message");
}

// Null and undefined
let u: undefined = undefined;
let n: null = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}

// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let otherValue: any = "this is a string";
let otherStrLength: number = (otherValue as string).length;