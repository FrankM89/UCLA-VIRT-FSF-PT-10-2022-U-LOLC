// 1) Where is carNoise stored?
// Global execution
const carNoise = 'Honk';
// 2) Where is goFast stored?
//  Global execution
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Functional execution context (local execution)
  
  // 5) Where is makeNoise stored?
  // Local execution (function execution context)
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // makeNoise is placed on the call stack which creates a new function execution context
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// If "Do you want to go fast?" = true, assign speed to 80
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
