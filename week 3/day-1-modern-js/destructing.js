// Object destructuring
const student = {
  rollNo: 101,
  studentName: "Shijil",
  department: "CSE AI & DS"
};
const { rollNo, studentName, department } = student;
console.log(`Student: ${studentName}, Roll No: ${rollNo}, Dept: ${department}`);

// Array destructuring
const marks = [85, 90, 78];
const [maths, science, english] = marks;
console.log(`Marks → Maths: ${maths}, Science: ${science}, English: ${english}`);