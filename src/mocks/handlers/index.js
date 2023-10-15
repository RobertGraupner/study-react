import { rest } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        groups
      })
    );
  }),

  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.group
      );
      return res(
        ctx.status(200),
        ctx.json({
          // we return an object with a key of students and a value of an array of students
          students: matchingStudents
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        students
      })
    );
  })
];
