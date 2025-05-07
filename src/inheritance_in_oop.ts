{
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      (this.name = name), (this.age = age), (this.address = address);
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const studentOne = new Student("Mr Student", 22, "Dhaka, Bangladesh");
  console.log(studentOne);

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClasses(numberOfClasses: number) {
      console.log(`${this.name} will take ${numberOfClasses}`);
    }
  }

  const teacherOne = new Teacher(
    "Mr Teacher",
    42,
    "Rangpur, Bangladesh",
    "professor"
  );
  console.log(teacherOne);
}
