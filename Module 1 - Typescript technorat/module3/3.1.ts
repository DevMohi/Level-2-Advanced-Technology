{
    //OOP - class

    // class Animal {
    //     public name : string;
    //     public species : string;
    //     private sound : string;

    //     //parameter properties 

    //     constructor(name : string , species : string , sound : string){
    //         this.name = name;
    //         this.species = species;
    //         this.sound = sound;
    //     }

    //     //function in class is called method , arrow function e this kaaj korena 
    //     makeSound(){
    //         console.log(`The ${this.name} says ${this.sound}`)
    //     };
    // }

    //For typescript you can write class like this 

    class Animal {

        //Parameter properties die simplify kore code, public dile aita name and this.name set kore de 
        constructor(public name : string , public species : string ,public sound : string){}

        //function in class is called method , arrow function e this kaaj korena 
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        };
    }

    //Instance k object bole ar class hocce blueprint
    const dog = new Animal("German Shephard Bhai", 'dog', 'bark');
    const care = new Animal('Persian', 'Cat', 'Meow');
    care.makeSound();

}