//Tasks
// Task 1 : Basic Data Types and First Program

const welcomeMessage: string =
  "Hello World, I will complete this course succesfully";
// console.log(welcomeMessage)

// Task 2  : Functions , Optional and Literal Types
type User = {
  name: string;
  age: number;
  role?: "admin" | "user" | "guest";
};

const user1: User = {
  name: "persian",
  age: 25,
  role: "user",
};

function addName(name: string, age: number, role: "admin" | "user"): string {
  return `The name is ${name} and age is ${age} with role ${role}`;
}

// console.log(addName("farhan" , 10,  "admin"));
// console.log(user1.age, user1.name, user1.role);

// Task 3 : Object Types , Type Alias and literal types
type Person = {
  name: string;
  address: string;
  hair: string;
  eye_color: string;
  income: number;
  expenses: number;
  hobbies: string;
  family: {
    members: number;
    job: boolean;
    skills: string;
    martial_status: string;
    friends: string;
  };
};

const person1: Person = {
  name: "farhan",
  address: "kolkata",
  hair: "black silky",
  eye_color: "black",
  income: 10000,
  expenses: 5000,
  hobbies: "getting beaten",
  family: {
    members: 10,
    job: true,
    skills: "chamchami",
    martial_status: "single",
    friends: "rakib and masud",
  },
};

// console.log(person1.family.martial_status);

// Task 4 - Union and Intersection Types

// Interfaces Book and Magazine
interface Book {
  name: string;
  author: string;
}

interface Magazine {
  name: string;
  publisher: string;
}

const book1: Book = {
  name: "Harry Potter",
  author: "J.K. Rowling",
};

// A union type allows a variable to be either a Book or a Magazine. This means it can have the properties of either interface but not necessarily both.

type BookOrMagazine = Book | Magazine;

const unionItem1: BookOrMagazine = {
  name: "Harry Potter",
  publisher: "shakib",
  author: "Jk rowling",
};

// An intersection type combines the properties of both Book and Magazine. This means that a variable must satisfy the properties of both interfaces.

type BookAndMagazine = Book & Magazine;

const intersectionItem: BookAndMagazine = {
  name: "The Science Book",
  author: "John Doe",
  publisher: "Science Weekly", // This is valid because it satisfies both Book and Magazine
};

//Task 5 - Write a function that reverses a string

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello1"));

//Task 6 - Spread and Rest Operators, Destructuring

const bros1: string[] = ["Mir", "Raju"];
const bros2: string[] = ["masud"];

bros1.push(...bros2);
// console.log(bros1);

function sumNumbers(...nums: number[]): number {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

// console.log(sumNumbers(1,2,3));
// console.log(sumNumbers(10,20));

// Task 7 - Type assertion and narrowing

const stringOrNumber = (
  value: string | number
): string | number | undefined => {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * value;
  }
};

const res1 = stringOrNumber("hello world") as string;
const res2 = stringOrNumber(10) as number;

// console.log(res1,res2);

//Task 8 - Intersection types

type UserIntersection = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: string;
};

type AdminUser = UserIntersection & Admin;

const AdminUserExample: AdminUser = {
  name: "farhan",
  email: "farhan@gmail.com",
  adminLevel: "super admin",
};

//Task 9 - Optional chaining

type Employee = {
  name: string;
  address?: {
    city?: string;
  };
};

//Function to get the employee city using optional chaining
function getEmployeeCity(employee: Employee): string {
  return employee.address?.city ?? "City not available";
}

const employee1: Employee = { name: "John", address: { city: "New York" } };
// console.log(getEmployeeCity(employee1)); // Output: "New York"

//Task 10 - Nullish coalescing operator - jodi null ar undefined er upor kono deicsion making korte hoi

const getDisplayName = (name: string | null | undefined): string => {
  if (name) {
    return name;
  } else {
    return "Anynomous";
  }
};

// console.log(getDisplayName(null));
// console.log(getDisplayName("farhan"))

//Task 11 : Unknown Type

const processData = (data: unknown) => {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * data;
  }
};

// console.log(processData("Hello world"));

//Task 12 - Never type

const throwError = (msg: string): never => {
  throw new Error(msg);
};

// throwError("Mushkil ser eror");

//Task 13 -> Generics with functions and interfaces

type GenericArray<T> = Array<T>;
const rollNumber: GenericArray<number> = [10, 20, 30, 40];
const boolArray: GenericArray<boolean> = [true, false, true];

// const removeDuplicates = <T>(param: T[]): T[] => {
//     let uniqueArray: T[] = [];
//     for (let item of param) {
//         if (!uniqueArray.includes(item)) {
//             uniqueArray.push(item);
//         }
//     }
//     return uniqueArray; // Return the array with unique items
// };

// // Example usage
// const numArray = [1, 2, 2, 3, 3];
// const strArray = ["apple", "banana", "apple", "orange"];

// console.log(removeDuplicates(numArray));   // Output: [1, 2, 3]
// console.log(removeDuplicates(strArray));   // Output: ["apple", "banana", "orange"]

//Task 14 - Async typescript and type aliases

type PromiseUser = {
  name: string;
  age: number;
};

// Asynchronous function to simulate fetching user data
const fetchUserData = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate user data
      const userData: User = {
        name: "John Doe",
        age: 30,
      };
      resolve(userData); // Resolve the promise with user data
    }, 2000); // Delay of 2 seconds
  });
};

// Example usage
const getUser = async () => {
    const user = await fetchUserData(); // Wait for the data
    console.log(`Name: ${user.name}, Age: ${user.age}`);
};

// getUser(); 


// task 15 - type guards 

// Custom type guard to check if a value is a string
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

// Function that prints the value in uppercase if it is a string
function printUpperCase(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log("Value is not a string.");
    }
}


//Task 16 - Utility types and keyof constraints 

const gerPropertyValue = <X, Y extends keyof X> (obj : X, key : Y) => {
    //lookup 
    return obj[key];
}

const userProperty = {
    name : 'Df',
    age : 26,
    address  :'ctg'
}

const result1 = gerPropertyValue(userProperty, 'address');
console.log(result1)


