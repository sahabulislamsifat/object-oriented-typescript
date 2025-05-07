"use strict";
{
    class Student {
        constructor(name, age, address) {
            (this.name = name), (this.age = age), (this.address = address);
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }
    const studentOne = new Student("Mr Student", 22, "Dhaka, Bangladesh");
    console.log(studentOne);
}
