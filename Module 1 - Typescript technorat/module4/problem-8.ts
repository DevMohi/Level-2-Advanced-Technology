const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  let check = true;
  for (const key of keys) {
    if (!obj[key]) {
      check = false;
      break;
    }
  }
  return check;
};

const person2: any = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person2, ["name", "age"])); // Output: true
