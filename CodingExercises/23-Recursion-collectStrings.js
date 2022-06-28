/** A function that accepts an object and returns an array of all the values
 * in the object that have a typeof string. */

// Example:
// const obj = {
//   stuff: "foo",
//   data: {
//       val: {
//           thing: {
//               info: "bar",
//               moreInfo: {
//                   evenMoreInfo: {
//                       weMadeIt: "baz"
//                   }
//               }
//           }
//       }
//   }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
  let result = [];
  for (const property in obj) {
    const value = obj[property];
    if (typeof value === "string") {
      result.push(value);
    } else if (typeof value === "object") {
      result = result.concat(collectStrings(value));
    }
  }
  return result;
}
