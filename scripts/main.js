'use strict'

function numberInput() {
  let enteredNumber = 0;

  do {
    enteredNumber = prompt('Введите четырехзначное число: ');
  } while (validation(enteredNumber));

  return enteredNumber;
}

function validation(num) {
  if (isNaN(num) || num.length !== 4) {
    return true;
  } else {
    return false;
  }
}

function generationOfNumber() {
  let str = '';

  for (let i = 0; i < 4; i++) {
    str += Math.floor((Math.random() * 10) + 1);
  }

  return str;
}

function bullsAndCows(generatedNumber, enteredNumber) {
  const result = {};
  let bull = 0;
  let cows = 0;

  for (let i = 0; i < generatedNumber.length; i++) {
    if (generatedNumber[i] === enteredNumber[i]) {
      bull++;
    } else {
      for (let j = 0; j < enteredNumber.length; j++) {
        if (generatedNumber[i] === enteredNumber[j]) {
          cows++;
        }
      }
    }
  }
  result['bulls'] = bull;
  result['cows'] = cows;

  return result;
}

function countingBulls(count) {
  if (count === 1) {
    return `${count} бык`;
  } else if (count === 0) {
    return `${count} быков`;
  } else {
    return `${count} быка`;
  }
}

function countingCows(count) {
  if (count === 1) {
    return `${count} корова`;
  } else if (count === 0) {
    return `${count} коров`;
  } else {
    return `${count} коровы`;
  }
}

function tryNumberTimes(num) {
  if (num === 1) {
    return `осталась ${num} попытка`;
  } else {
    return `остались ${num} попытки`;
  }
}

function guessingNumber(num, generatedNumber) {
  for (let j = 4; j >= 1; j--) {
    const result = bullsAndCows(num, generatedNumber);

    if (result['bulls'] === 4) {
      return alert('Поздравляю, вы угадали!');
    } else {
      alert(
`
У вас ${countingBulls(result['bulls'])} и ${countingCows(result['cows'])}.
Ваше число ${num}
У вас осталось ${tryNumberTimes(j)}.
`
      );
      num = numberInput();
    }
  }

  return alert('Извините, вы проиграли!');
}

document.querySelector('.btn-start').onclick = function() {
  const generatedNumber = generationOfNumber();
  const enteredNumber = numberInput();
  guessingNumber(enteredNumber, generatedNumber);
};
