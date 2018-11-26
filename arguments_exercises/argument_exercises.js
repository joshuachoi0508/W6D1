// Write a sum function that takes any number of arguments:
//     sum(1, 2, 3, 4) === 10
//     sum(1, 2, 3, 4, 5) === 15
// Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator.

function sum1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

function sum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++){
    sum += args[i];
  }
  return sum;
}

// console.log(sum1(1, 2, 3, 4));
// console.log(sum1(1, 2, 3, 4, 5));
// console.log(sum2(1, 2, 3, 4));
// console.log(sum2(1, 2, 3, 4, 5));

// Rewrite your myBind method so that it can take both bind-time arguments and call-time arguments.

Object.prototype.myBind = function (context, ...bindArgs) {
  const that = this;
  return function(...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

// Object.prototype.myBind = function (context) {
//   const bindArgs = Array.from(arguments).slice(1);
//   const that = this;
//   return function() {
//     const callArgs = Array.from(arguments);
//     return that.apply(context, bindArgs.concat(callArgs));
//   };
// };

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = function(number) {
    numbers.push(number);
    let total = 0;
    if (numbers.length === numArgs) {
      numbers.forEach(el => {
        total += el;
      });
      return total;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

// Monkey patched curry

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.curry = function(numArgs) {
  const numbers = [];
  const that = this;
  const _curry = function(number) {
    numbers.push(number);
    if (numArgs === numbers.length) {
      return that.apply(that, numbers);
    } else {
      return _curry;
    }
  };
  return _curry;
};

console.log(sumThree.curry(3)(4)(20)(6)); // == 30

// Curry with spread
Function.prototype.curry2 = function(numArgs) {
  const numbers = [];
  const that = this;
  const _curry = function(number) {
    numbers.push(number);
    if (numArgs === numbers.length) {
      return that.call(that, ...numbers);
    } else {
      return _curry;
    }
  };
  return _curry;
};

console.log(sumThree.curry2(3)(4)(20)(6)); // == 30
