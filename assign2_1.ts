let student1: [string, number] = ["Bank", 95];
let student2: [string, number] = ["Folk", 82];
let student3: [string, number] = ["Tar", 67];
let student4: [string, number] = ["Ohm", 45];

let students = [student1, student2, student3, student4];

for (let student of students) {
  let name = student[0];
  let score = student[1];
  let grade = "";

  if (score >= 80) {
    grade = "A";
  } else if (score >= 70) {
    grade = "B";
  } else if (score >= 60) {
    grade = "C";
  } else if (score >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`${name} received ${score} and grade ${grade}`);
}