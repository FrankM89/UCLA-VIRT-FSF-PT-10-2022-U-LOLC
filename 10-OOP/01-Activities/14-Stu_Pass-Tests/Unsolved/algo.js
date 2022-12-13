function Algo() {}

Algo.prototype.reverse = function(str) {
  return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
  for(let i = 0; i < str.leng; i++) {
    if(str[i] !== str[str.length - 1]) {
}
}
return true;
};

Algo.prototype.capitalize = function(str) {
  const words = str.split(' ');
  const newWords = [];
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    newWords.push(words);
}

return words.join(' ');
};

module.exports = Algo;
