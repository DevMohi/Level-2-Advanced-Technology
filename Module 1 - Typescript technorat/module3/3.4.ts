{
    //Instance of type guard is for oop programming
    class Animal {
        name : string;
        species : string;

        constructor(name : string , species : string) {
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log(`I am making sound`)
        }
    }

    class Dog extends Animal{ 
        constructor(name:string , species: string ){
            super(name ,species);
        }
        makeBark(){
            console.log(`I am barking ${this.species}`);
        }
    }

    class Cat extends Animal{
        constructor(name :string, species :string){
            super(name,species);
        }
        makeMeow(){ 
            console.log(`i AM MOWING ${this.species}`)
        }
    }

    //Smart way to handle korar jnno chaile amra function bebohar korte pari
    const isDog = (animal : Animal) : animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat;
    }

    //class ke type hishebe lika jai and instance check korba 
    const getAnimal = (animal : Animal) => {
        if(isDog(animal)){
            return animal.makeBark();
        }
        else if(isCat(animal)){
            return animal.makeMeow();
        }
        else{
            return `Normal ANIMAL`
        }
    }

    const dog = new Dog('german', 'shepherd');
    const cat = new Cat('milli' , 'bangla'); 

    dog.makeBark();
    cat.makeMeow();
    getAnimal(cat);

}