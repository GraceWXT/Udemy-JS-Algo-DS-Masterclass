/** A function that takes in an object and finds all of the values which are numbers
 * and converts them to strings. */

/* Example:
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)

{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// Assuming any number value in an object or array needs to be converted
// recursive case: value is array or other object
// base case: value is number => convert to string, value is not number: keep as is
function stringifyNumbers(obj) {
  let result = Array.isArray(obj) ? [] : {};
  for (const property in obj) {
    const value = obj[property];
    if (typeof value === "object") {
      result[property] = stringifyNumbers(value);
    } else if (typeof value === "number") {
      result[property] = value.toString();
    } else {
      result[property] = value;
    }
  }
  return result;
}

let obj = {
  num: 1,
  test: [0, "no", {num: 5}],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

console.log(stringifyNumbers(obj));
