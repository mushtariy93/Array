const students = [
  {
    name: "Ali",
    age: 16,
    grades: {
      math: 85,
      english: 78,
      history: 90,
      science: 88,
    },
    extraCurricular: ["football", "chess"],
  },
  {
    name: "Zara",
    age: 17,
    grades: {
      math: 92,
      english: 81,
      history: 85,
      science: 87,
    },
    extraCurricular: ["basketball", "debate"],
  },
  {
    name: "Bekzod",
    age: 16,
    grades: {
      math: 79,
      english: 85,
      history: 80,
      science: 89,
    },
    extraCurricular: ["tennis", "music"],
  },
  {
    name: "Laylo",
    age: 15,
    grades: {
      math: 95,
      english: 93,
      history: 88,
      science: 91,
    },
    extraCurricular: ["dance", "art"],
  },
];

students.forEach((student) => {
  const grades = Object.values(student.grades);
  const averageGrade =
    grades.reduce((total, grade) => total + grade) / grades.length;
  student.averageGrade = averageGrade;
});

const groupedStudents = students.reduce((groups, student) => {
  const ageGroup = groups[student.age] || [];
  ageGroup.push(student);
  groups[student.age] = ageGroup;
  return groups;
}, {});

Object.entries(groupedStudents).forEach(([age, students]) => {
  const topStudent = students.reduce((top, student) => {
    return student.averageGrade > top.averageGrade ? student : top;
  });
  console.log(
    `${age} yoshlilar ichida ${
      topStudent.name
    } eng yuqori o'rtacha bahoga ega (${topStudent.averageGrade.toFixed(2)})`
  );
});
