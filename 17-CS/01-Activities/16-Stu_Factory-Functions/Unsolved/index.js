// TODO: Fix the `greet` function so that it returns the correct values.
function student(name, gradeYear) {
  let studentInfo = {name, gradeYear};

  return {
    greet: function () {
      console.log(
        `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
      );
    },
  };
}

const newStudent = student('Dominique', '11th');
// const secStudent = student('Raphael', '4th');
newStudent.greet();
// secStudent.greet();

module.exports = student;
