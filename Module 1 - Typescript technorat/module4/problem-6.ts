// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
  name: string;
  age: number;
  email: string;
}

//Partial makes everything optional 
const updateProfile = (
  profile: Profile,
  updatedProfile: Partial<Profile>
): Profile => {
  return { ...profile, ...updatedProfile };
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 100 , name : "farhan"}));
