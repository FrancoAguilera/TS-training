// from https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
(function () {
    // Types  
    // const greeter = (person: string) => 'Hello, ' + person;
    // console.log(greeter('Franco'));
    // Interfaces
    // interface Person {
    //   firstName: string;
    //   lastName: string;
    // }
    //
    // const greeter = (person: Person) => `Hello, ${person.firstName} ${person.lastName}`;
    //  
    // const user = { firstName: 'Franco', lastName: 'Aguilera' };
    // console.log(greeter(user));
    // Classes  
    var Student = /** @class */ (function () {
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
        }
        return Student;
    }());
    var greeter = function (person) { return "'Hello, " + person.firstName + " " + person.lastName; };
    var user = new Student('Franco', 'L.', 'Aguilera');
    console.log(user);
    console.log(greeter(user));
})();
