class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getTotalMarks() {
        return this.marks.reduce((sum, mark) => sum + mark, 0);
    }

    getAverage() {
        return this.getTotalMarks() / this.marks.length;
    }
}

// Example
var s1 = new Student("Krishna", [30, 40, 50, 60]);

console.log("Total Marks:", s1.getTotalMarks());
console.log("Average %:", s1.getAverage());




class Employee {
    constructor(name, yearlySalary, workingDays, month) {
        this.name = name;
        this.yearlySalary = yearlySalary;
        this.workingDays = workingDays;
        this.month = month;
    }

    getMonthSal() {
        const dailySalary = this.yearlySalary / 365;
        const monthlySalary = dailySalary * this.workingDays;

        console.log(`Employee: ${this.name}`);
        console.log(`Month: ${this.month}`);
        console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`);
    }
}

// Example
var emp1 = new Employee("Krishna", 1200000, 20, "Jun");
emp1.getMonthSal();
