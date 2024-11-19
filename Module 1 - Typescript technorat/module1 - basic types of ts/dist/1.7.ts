{
  //Spread operator and destructuring
  //Rest operator

  //Spread operator

//   const bros1: string[] = ["Mir", "Mizan"];  
//   const bros2: string[] = ["Nahid"]; 

  //spread operator
//   bros1.push(...bros2); 

  const mentors = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors,
    ...mentors2,
  };

  //learn rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Babul");
}
