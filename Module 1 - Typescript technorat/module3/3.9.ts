{
  //Abstraction in OOP
  // Real jinish janbana but idea paba ki hoite pare

  // Abstraction kora jai interface and abstract die

  //Idea pacci
  interface Vehicle1 {
    start(): void;
    stop(): void;
    move(): void;
  }

  //Real implementation
  class Car implements Vehicle1 {
    start(): void {
      console.log("Car is started");
    }
    stop(): void {
      console.log("Stop");
    }
    move(): void {
      console.log("Move");
    }
    test() {
      console.log("Rnd");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.start();

  //Abstract class - abstract class ke follow korte parba but instance create korte parbana
  abstract class Car2 {
    abstract start(): void;
    abstract stop(): void;
    abstract move(): void;
  }

  class ToyotaCar extends Car2 {
    start(): void {
      console.log("Car is started");
    }
    stop(): void {
      console.log("Stop");
    }
    move(): void {
      console.log("Move");
    }
    test() {
      console.log("Rnd");
    }
  }

  const hondaCar = new ToyotaCar();
  hondaCar.move();
}
