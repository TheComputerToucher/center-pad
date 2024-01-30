'use strict';
module.exports = centerPad;

function centerPad(str, len, ch) {
  str = str.toString()
  let padLength = len - str.length

  ch ??= ' '

  let splitPoint = Math.floor(str.length / 2)
  let paddingData = ''
  
  while (paddingData.length < padLength) {
    paddingData += ch
  }

  let paddedString = str.substring(0, splitPoint) + paddingData + str.substring(splitPoint)

  return paddedString
}

