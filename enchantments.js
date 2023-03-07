// look back

// const card = 2;

function getCardPosition(stack, card) {
  return stack.indexOf(card);
}

// console.log(getCardPosition([9, 7, 3, 2], card));

///---///

// const card = 3;

function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

// console.log(doesStackIncludeCard([2, 3, 4, 5], card));

///---///

function isEachCardEven(stack) {
  return stack.every((card) => card % 2 === 0);
}

// console.log(isEachCardEven([2, 4, 6, 7]));

///---///

function doesStackIncludeOddCard(stack) {
  return stack.some((card) => card % 2 === 1);
}

// console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8]));

///---///

function getFirstOddCard(stack) {
  return stack.find((card) => card % 2 === 1);
}

// console.log(getFirstOddCard([4, 2, 8, 7, 9]));
