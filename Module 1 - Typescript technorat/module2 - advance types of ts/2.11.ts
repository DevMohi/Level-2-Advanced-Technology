{
  //Utility types
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  //Pick
  type Name = Pick<Person, "name">; //aita pick kore data type
  type NameAge = Pick<Person, "name" | "age">; //or mane hocce union

  //Omit
  type ContactInfo = Omit<Person, "name" | "age">; //jei values gulo diba oigulo remove kore dibe and object return korbe

  //Required utility
  type PersonRequired = Required<Person>;

  //Partial
  type PartialPerson = Partial<Person>; //shob values k optional kore dibe

  //Readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "x",
    age: 20,
    contactNo: 20,
  };

  // person1.age = 30  wont work because its readonly

  //Record type -> key and value hold kore record
  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
  const EmptyObj: Record<string, unknown> = {}; // key ta string hobe and values gula any type
}
