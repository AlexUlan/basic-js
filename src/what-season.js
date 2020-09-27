const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date && date !== null) {
    return "Unable to determine the time of year!";
  }
  if (
    date === null ||
    Object.prototype.toString.call(date) !== "[object Date]"
  ) {
    throw new Error("Error");
  }
  const mounth = date.getMonth();
  if (mounth <= 1 || mounth == 11) {
    return "winter";
  } else if (mounth >= 2 && mounth <= 4) {
    return "spring";
  } else if (mounth >= 5 && mounth <= 7) {
    return "summer";
  } else {
    return "fall";
  }
};
