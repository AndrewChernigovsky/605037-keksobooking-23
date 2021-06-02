function getRandomNumber (begin, end) {
  let result = 0;
  if (begin >= 0 && begin < end) {
    result = Math.random () * ((end - begin) + 1);
    return result;
  } else {
      return 'неправильные аргументы'
  }
}

function getRandomNumber (begin, end, number) {
  let result = 0;
  if (begin >= 0 && begin < end) {
    result = Math.random () * ((end - begin) + 1);
    return result.toFixed (number);
  } else {
      return 'неправильные аргументы'
  }
}

console.log (getRandomNumber (1, 700, 1))
