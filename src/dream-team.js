const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let nameArray = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string")
      nameArray.push(members[i].trim()[0].toUpperCase());
  }
  return nameArray.sort().join("");
};
