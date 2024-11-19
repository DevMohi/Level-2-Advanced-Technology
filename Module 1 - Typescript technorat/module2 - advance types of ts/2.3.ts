{
  //Generics - dynamic bhave jeikono ekta type define and use

  type GenericArray<T> = Array<T>;

  //Can be written in another way
  // const rollNumber : number[] = [3,6,8];
  const rollNumber: GenericArray<number> = [3, 6, 8];

  // const mentors : string[] = ['x','y'];
  const mentors: GenericArray<string> = ["x", "y"];

  // const boolArray : boolean[] = [true,false,true];
  const boolArray: GenericArray<boolean> = [true, false, true];


  //More cleaner
  type User = {
    name : string;
    age : number; 
  }
//   interface User {
//     name : string;
//     age : number; 
//   }

  //Array of objects
  const user: GenericArray<User> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "farhan",
      age: 30,
    },
  ];


  //Generic Tuple - any order e variable newa jai

  type GenericTuple<X,Y> = [X , Y];
  const manush: GenericTuple<string,string> = ['Mr X', 'Mr Y'];

  const UserWithId : GenericTuple<number, {name : string, email :string}> = [1234, {name : 'persian' , email : 'a@gmail.com'}]
}
