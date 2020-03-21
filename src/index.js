module.exports = function check(str, bracketsConfig) {
  if (str.length%2 === 0) {
    let currentBrackets, trimString, bracketsComplete;

    for (let i = 0, breakMe = true; i < bracketsConfig.length && breakMe; i++) {
      currentBrackets = bracketsConfig[i].join('');
      trimString = str.replace(currentBrackets, '');
      if(trimString !== str) {
        str = trimString;
        str.length !== 0 ? i = -1 : breakMe = false;
      }
    }

    str.length > 1 ? bracketsComplete = false : bracketsComplete = true;
    return bracketsComplete;
  } else return false;
}