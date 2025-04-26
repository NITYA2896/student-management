<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const Student = require('./student');
const Course = require('./course');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Example Routes (you can add your own routes)
app.get('/', (req, res) => {
  res.send('🎉 Student Management System Backend Running');
});

// Get all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a student with enrolled courses
app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('enrolledCourses');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Listen on the correct port for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
=======

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
>>>>>>> 9efcff8bad9398b8fd03e968c4714522e3e60b8a
