//Type alias
{
  // Type ke ekta nam diba
  type Student = {
    name: string;
    age: number;
    contact?: number;
    gender: string;
    address: string;
  };

  const student: Student = {
    name: "Rahul",
    age: 20,
    gender: "Male",
    contact: 12344568,
    address: "Delhi",
  };

  const student2: Student = {
    name: "Farhan",
    age: 30,
    gender: "Male",
    address: "Bortol",
  };

  type Username = string;
  const userName: Username = "Persian ";

  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  //For function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
