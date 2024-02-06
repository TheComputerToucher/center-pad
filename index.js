module.exports = function centerPad(str, len, ch) { let padLength = len - (str = 'string' == typeof str ? str : toString.call(str)).length, splitPoint = Math.floor(str.length / 2), paddingData = '';
  while (paddingData.length < padLength && (paddingData += ch.length > 1 ? ch.charCodeAt(0).toString(36) : ch || ' '));
  return str.slice(0, splitPoint) + paddingData + str.slice(splitPoint)}
