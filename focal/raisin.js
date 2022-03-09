const raisinAlarm = function (cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

const raisinAlarmArray = function (cookie) {
  let results = [];

  //nested for to iterate through each value of the nested array

  for (let i = 0; i < cookie.length; i++) {
    for (let j = 0; j < cookie[i].length; j++) {
      //determing if the element contained in the nested array contains a match to raisins
      if (cookie[i][j] === "🍇") {
        results.push("Raisin Alert!");
        break;
        //determine if this iteration is the last item in the array and push all good if no raisins have been detected
      } else if (j + 1 === cookie[i].length) {
        results.push("All good!");
        break;
      }
    }
  }
  return results;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
