const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Inviled arguments!");
  }
  let modificationArr = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next" && arr[i + 1]) {
      modificationArr.push("xxx");
      i++;
    } else if (arr[i] === "--discard-prev" && arr[i - 1]) {
      modificationArr[i - 1] = "xxx";
    } else if (arr[i] === "--double-next" && arr[i + 1]) {
      modificationArr.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev" && arr[i - 1]) {
      modificationArr.push(modificationArr[modificationArr.length - 1]);
    } else if (typeof arr[i] == "number") {
      modificationArr.push(arr[i]);
    }
  }
  return modificationArr.filter((item) => {
    return item !== "xxx";
  });
};
