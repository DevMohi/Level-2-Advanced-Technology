{
    //Inheritance 
    class Parent{
        name : string;
        age : number; 
        address : string;

        constructor(name :string , age : number, address :string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours : number){
            console.log(`${this.name} will sleep for ${numOfHours} hours`)
        }
    }

    //For inheritance use the extend keyword and call super 
    class Student extends Parent{
        constructor(name :string , age : number, address :string){
            super(name,age,address); 
        }
    }

    class Teacher extends Parent {
        designation : string;
        constructor(name :string , age : number, address :string ,designation : string){
            super(name,age,address);
            this.designation = designation;
        }
        takeClass(numOfClass : number){
            console.log(`${this.name} Will take ${numOfClass} classes`);
        }
    }

    const student1 = new Student ('Farhan', 29, "saudi");
    student1.getSleep(20);

    const teacher = new Teacher('Rafiq', 30, 'malay', 'supervisor teacher');
    teacher.takeClass(19);

}