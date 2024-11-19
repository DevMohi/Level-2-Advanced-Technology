{
  //Topic - Polymorphism
  //Inheritance, abstraction , encapsulation

  //Polymorphism hocce ekta particular method jeita arekta class e gulo onno result dei , like different rup for each method
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hrs`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(` I am sleeping for 7 hours`);
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log(`I am sleeping 3 hrs per day`);
    }
  }
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };
  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

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

  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape2);
}
