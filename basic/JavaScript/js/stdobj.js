function Person(firstName, lastName, age, marks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.marks = marks;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };

    this.getTotalMarks = function () {
        return this.marks.reduce((sum, mark) => sum + mark, 0);
    };

    this.getResult = function () {
        var avg = this.getTotalMarks() / this.marks.length;
        return avg >= 35 ? "Pass" : "Fail";
    };
}

// Creating object using new
var person1 = new Person("Abhi", "Krishna", 21, [30, 40, 50, 60, 70]);

console.log(person1.getFullName());
console.log("Total Marks:", person1.getTotalMarks());
console.log("Result:", person1.getResult());
