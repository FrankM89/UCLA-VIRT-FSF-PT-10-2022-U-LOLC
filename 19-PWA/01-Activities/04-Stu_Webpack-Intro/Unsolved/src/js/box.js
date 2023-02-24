// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// Exports the boxClick button

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
