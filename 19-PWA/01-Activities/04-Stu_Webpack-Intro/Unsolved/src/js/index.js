// TODO: Add a comment explaining role of the index.js file and import statements
// Imports the script for the event listeners in their respective files

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
