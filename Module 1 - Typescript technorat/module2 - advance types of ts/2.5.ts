//Function with generics
{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<boolean>(true);

  // fUNCTION WITH OBJECT AND GENERIC
  type User = { id: number; name: string };
  const resGenericObject = createArrayWithGeneric<User>({ id: 333, name: "X" });



  //With tuple example fucntion with generic 
  const createArrayWithTuple = <T, Q>(param1: T , param2 : Q): [T,Q] => {
    return [param1, param2];
  };

  const res3 = createArrayWithTuple<string, {name : string}>("Bangladesh", {name : "Asia"});
  const addCourseToStudent =<T>(student : T) => {
    const course = 'Next Level Web Development'
    return {
        ...student,
        course
    }
  }
  
  const student1 = addCourseToStudent({name : "x", email : 'x@gmail,com' , devType : 'NLWD'})
  const student2 = addCourseToStudent({name : "y", email : 'y@gmail,com' , hasWatch : 'apple watch'})

}
