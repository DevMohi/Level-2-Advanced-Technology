import { z } from 'zod';

const createAcademicSemesterValidationSchema = z.object({
    body : z.object({
        
    })
});

export const AcademicSemesterValidation = {
  createAcademicSemesterValidationSchema,
};
