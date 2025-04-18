import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean();

  //2031 01 0001
  return lastStudent?.id ? lastStudent.id : undefined;
};

//Format =  year semesterCode 4 digitNumber

export const generateStudentId = async (payLoad: TAcademicSemester) => {
  //first time 0000 hobe

  let currentId = (0).toString(); // 0 by default

  const lastStudentId = await findLastStudentId();

  //2030 01 0001
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); //01 //semester code peye jabo 2003 01 0001
  const lastStudentYear = lastStudentId?.substring(0, 4); //2030

  const currentSemesterCode = payLoad.code;
  const currentYear = payLoad.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.substring(6); ///0001
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
