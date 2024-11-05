{
  //Constraints - Rule enforce kora k contstraint bole , name email id chara student hoita parbena  , extend kore constraint kore diba aita mane ai 3 ta data always thakte hobe
  const addCourseToStudent = <
    T extends { name: string; id: number; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "x",
    email: "x@gmail,com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: "y",
    email: "y@gmail,com",
    hasWatch: "apple watch",
  });

  const student3 = addCourseToStudent({
    id: 44,
    name: "Z",
    email: "z@gmail.com",
    emni: "emni",
  });
}
