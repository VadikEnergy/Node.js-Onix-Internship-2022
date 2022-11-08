const myArray = [1, 10, 3, 6, 'ArrayElement'];

/**
 * 1. Log 3 and 6 elements from myArray to console
 * Please, use more than on solution
 */

console.log(`3: ${myArray.at(2)}`);
console.log(`6: ${myArray.at(3)}`);

/**
 *  2. Log type of each element
 */

myArray.forEach((elem) => {
    console.log(typeof elem);
});

/**
 *  3. Check if all elements in array is Number
 *  Should return Boolean
 */

const isNumber = myArray.every(elem => Number.isInteger(elem));

console.log({
    isNumber,
});

/**
 * 4. Check if at least one element is bigger than 5
 * Should return Boolean
 */

const isBiggerThanFive = myArray.some(elem => elem > 5);

console.log({
    isBiggerThanFive,
});

/**
 * 5. Create another variable that will include only elements that bigger than 5
 * Should return another Array
 */

const elementsBiggerThanFive = myArray.filter(elem => elem > 5);

console.log({
    elementsBiggerThanFive,
});

/**
 * 6. Multiply numbers of Array by 2
 * Should return another Array
 */

const multiplied = myArray.filter( el => Boolean(el) === Number.isInteger(el) ).map( elem => elem * 2);

console.log({
    multiplied,
});

/**
 * 7. Calculate array sum
 */

const sum = myArray.filter( el => Boolean(el) === Number.isInteger(el) ).reduce( (numFirst, numSecond) => numFirst + numSecond);

console.log({
    sum,
});

/**
 * 8. Sort array in ascending and descending order
 */

const asc = myArray.sort((z, c) => z - c);
const desc = [...myArray].sort((z, c) =>  c - z);

console.log({
    asc,
    desc,
});

