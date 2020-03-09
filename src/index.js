module.exports = function check(str, bracketsConfig) {
  var i = 0,
      bracketSample;

  while (i < bracketsConfig.length) {
    bracketSample = bracketsConfig[i].join('');

    if (!str.includes(bracketSample)) {
      i++;
    } else {
      str = str.replace(bracketSample,'');
      i = 0;
    }
  }

  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
}
