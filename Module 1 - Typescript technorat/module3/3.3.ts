{
  //Type Guards using typeof & in
  //Functional Programming 

  //Type of -->  type guard example (runtime e kaaj kore)

  type AlphaNumeric = string | number;
  const add = (
    param1: AlphaNumeric,
    param2: AlphaNumeric
  ): AlphaNumeric | undefined => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add(2,3);
  console.log(res1)

  //Type in guard 
  type NormalUser = {
    name : string;
  }
  type AdminUser  ={
    name : string;
    role : "admin";
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if("role" in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    }
    else{
        console.table(`No role and my name is ${user.name}`);
    }
  }

  const normalUser: NormalUser = {
    name : 'Normal Bhai'
  }
  const adminUser : AdminUser = {
    name : 'Admin king',
    role : 'admin'
  }

  getUser(normalUser);
  getUser(adminUser);

}
