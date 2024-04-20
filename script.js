// Function for opening ceremony
function OpeningCeremony(callbackFnc) {
  console.log("Let the games begin");
  setTimeout(() => {
    const sportsObj = { red: 0, blue: 0, green: 0, yellow: 0 };
    Race100M(sportsObj, callbackFnc);
  }, 1000);
}

// Function for 100m race
function Race100M(scoreObj, callbackFnc) {
  console.log("Race100M started");
  const timeRed = Math.floor(Math.random() * 6) + 10; // Random time between 10 to 15 seconds
  const timeBlue = Math.floor(Math.random() * 6) + 10;
  const timeGreen = Math.floor(Math.random() * 6) + 10;
  const timeYellow = Math.floor(Math.random() * 6) + 10;

  const times = {
    red: timeRed,
    blue: timeBlue,
    green: timeGreen,
    yellow: timeYellow,
  };
  const sortedTimes = Object.keys(times).sort((a, b) => times[a] - times[b]);

  scoreObj[sortedTimes[0]] += 50;
  scoreObj[sortedTimes[1]] += 25;

  console.log(
    `Race100M completed. Winners: ${sortedTimes[0]} and ${sortedTimes[1]}`
  );
  console.log("Updated scores:", scoreObj);

  setTimeout(() => {
    callbackFnc(scoreObj, LongJump);
  }, 2000);
}

// Function for Long Jump
function LongJump(scoreObj, callbackFnc) {
  console.log("LongJump started");
  const colors = ["red", "blue", "green", "yellow"];
  const selectedColor = colors[Math.floor(Math.random() * colors.length)];

  scoreObj[selectedColor] += 150;

  console.log(`LongJump completed. Winner: ${selectedColor}`);
  console.log("Updated scores:", scoreObj);

  setTimeout(() => {
    callbackFnc(scoreObj, HighJump);
  }, 1500);
}

// Function for High Jump
function HighJump(scoreObj, callbackFnc) {
  console.log("HighJump started");
  const userInput = prompt("What colour secured the highest jump?");
  if (userInput) {
    const color = userInput.toLowerCase();
    if (scoreObj.hasOwnProperty(color)) {
      scoreObj[color] += 100;
      console.log(`HighJump winner: ${color}`);
    } else {
      console.log("Event was cancelled");
    }
  } else {
    console.log("Event was cancelled");
  }

  console.log("Updated scores:", scoreObj);
  setTimeout(() => {
    AwardCeremony(scoreObj);
  }, 1000);
}

// Function for Award Ceremony
function AwardCeremony(scoreObj) {
  console.log("Award Ceremony started");
  const sortedScores = Object.entries(scoreObj).sort((a, b) => b[1] - a[1]);

  console.log(`Award Ceremony Results:`);
  for (let i = 0; i < sortedScores.length; i++) {
    console.log(
      `${sortedScores[i][0]} came ${ordinalSuffix(i + 1)} with ${
        sortedScores[i][1]
      } points`
    );
  }
}

// Helper function to get ordinal suffix
function ordinalSuffix(num) {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) {
    return num + "st";
  }
  if (j === 2 && k !== 12) {
    return num + "nd";
  }
  if (j === 3 && k !== 13) {
    return num + "rd";
  }
  return num + "th";
}

// Starting the event
OpeningCeremony(Race100M);
