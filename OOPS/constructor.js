
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};


function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.study = function () {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
};


const student1 = new Student("Princy", 21, 2);

student1.greet();
student1.study();   