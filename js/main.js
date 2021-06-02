function getRandomNumber(begin, end) {
  let result = 0;
  if (begin >= 0 && begin < end) {
    result = Math.random() * ((end - begin) + 1);
    return result;
  } else {
    return 'неправильные аргументы';
  }
}

function getRandomNumber1(begin, end, number) {
  let result = 0;
  if (begin >= 0 && begin < end) {
    result = Math.random() * ((end - begin) + 1);
    return result.toFixed(number);
  } else {
    return 'неправильные аргументы';
  }
}

// eslint-disable-next-line no-console
console.log(getRandomNumber(1, 700));
// eslint-disable-next-line no-console
console.log(getRandomNumber1(1, 700, 1));
