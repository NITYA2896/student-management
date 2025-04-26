
require('./db'); 
const Student = require('./student');

const Course = require('./course');

async function main() {
 
  const course1 = await Course.create({ courseName: 'Math 101', instructor: 'Dr. Smith', credits: 3 });
  const course2 = await Course.create({ courseName: 'Physics 101', instructor: 'Dr. Jane', credits: 4 });

  const student = await Student.create({
    name: 'Alice',
    email: 'alice@example.com',
    age: 20,
    enrolledCourses: [course1._id, course2._id]
  });

 
  const students = await Student.find();
  console.log('All Students:', students);


  const fullDetails = await Student.findOne({ email: 'alice@example.com' }).populate('enrolledCourses');
  console.log('Student with Courses:', fullDetails);

 
  await Student.updateOne({ email: 'alice@example.com' }, { name: 'Alice Johnson' });

  
}

main();
