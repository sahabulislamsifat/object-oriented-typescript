{
  //* Polymorphisom
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }
  class Student extends Person {
    getSleep(): void {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }
  class Developer extends Person {
    getSleep(): void {
      console.log(`I am sleeping for 10 hours per day`);
    }
  }
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const personOne = new Person();
  const personTwo = new Student();
  const personThree = new Developer();

  //   console.log(personOne);
  //   getSleepingHours(personOne);
  //   getSleepingHours(personTwo);
  //   getSleepingHours(personThree);

  //* Shape
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Reactangle extends Shape {
    height: number;
    weight: number;
    constructor(height: number, weight: number) {
      super();
      this.height = height;
      this.weight = weight;
    }

    getArea(): number {
      return this.height * this.weight;
    }
  }
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shapeOne = new Shape();
  const shapeTwo = new Circle(10);
  const shapeThree = new Reactangle(10, 20);

  //   console.log(shapeOne);
  //   console.log(shapeTwo);
  //   console.log(shapeThree);
  getShapeArea(shapeOne);
  getShapeArea(shapeTwo);
  getShapeArea(shapeThree);
}
