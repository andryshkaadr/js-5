const numberOfSecondsInAnHour = 3600;
const numberOfHours = window.prompt("Enter number of hours", 1);

const numberOfSeconds = numberOfHours * numberOfSecondsInAnHour; 

alert(`In ${numberOfHours} hour(s) - ${numberOfSeconds} seconds`);
