//Union and Intersection type

{
  //Union types -> | ekta khamba diba instead of 2

  type FrontendDeveloper = "fakiBaz" | "JuniorDev"; //String literal types
  type FullStackDeveloper = "frontend | expertdeveloper";
  type Developer = FrontendDeveloper | FullStackDeveloper;


  const newDev: FrontendDeveloper = "fakiBaz";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+";
  };

  const user1: User = {
    name: "persian",
    gender: "male",
    bloodGroup: "O+",
  };



//Intersection = & one & use korba 
 type Front = {
    skills : string[]; 
    designation1 : 'Frontend Developer'
 }
 type Backend = {
    skills : string[]; 
    designation2 : 'Backend Developer'
 }

 type Full = Front & Backend;
 const FullStack : Full = {
    skills : ['HTML', 'CSS', 'Express'],
    designation1 : 'Frontend Developer',
    designation2 : 'Backend Developer',
 }

}
