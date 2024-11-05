{
  //Type and interface can be used to do the same thing however there are some differences they are -> type alias can be used for primitive type , and interface is only for object
  // defining  

  //Type example
  type User1 = {
    name: string;
    age: number;
  };

  // Intersection (extend kora bole ) aita user 1 er ste role o add korse for type 
  type UserWithRoll1 = User1 & {role : number}

  const user1: UserWithRoll1 = {
    name: "Persian",
    age: 100,
    role : 10,
  };

  //With interface you can also define type and also extend( same as intersection )
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRoll2 extends User1{
    roll : number; 
  }
  const user2: UserWithRoll2 = {
    name: "Persian 2",
    age: 50, 
    roll : 10, 
  };


  //Js => object , array => object , function -> object

  //Type with array
  type Roll1 = number[];
  const rollNumber1: Roll1 = [1,3,4];

  //Array with interface 
  interface Roll2{
    [index : number] : number
  }


  //Function with type
  type Add =(num1 : number , num2 : number) => number;
  const add : Add =  (num1, num2) => num1 + num2;

  //Function with interface
  interface Add1 {
    (num1: number, num2 : number) : number;
  }
  const add1 : Add1 =  (num1, num2) => num1 + num2;


}
