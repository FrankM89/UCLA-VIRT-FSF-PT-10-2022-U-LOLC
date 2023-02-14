// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();



//  Maria's refactored version  \\

const createLesson = () => {
  title = "Module 17 - Computer Science";
  description = "CS for JS";

  return {
    information: () => console.log(title, description),
  };
};

const csForJS = createLesson();
csForJS.information();



//          CHATGPT CAME UP WITH THESE            \\

// function createLesson() {
//   const title = 'Module 17 - Computer Science';
//   const description = 'CS for JS';

//   return {
//     information: function() {
//       console.log(title, description);
//     }
//   };
// }

// const csForJS = createLesson();
// csForJS.information();

// function createLesson() {
//   const title = 'Module 17 - Computer Science';
//   const description = 'CS for JS';

//   function information() {
//     console.log(title, description);
//   }

//   return { information };
// }

// const csForJS = createLesson();
// csForJS.information();
