let totalSeconds = 2332; //Replace it with other test values

minutes = parseInt(totalSeconds / 60); // If total seconds / 60 has value of 2.90 it's parsed to int as 2
seconds = totalSeconds - (minutes * 60);

let output = "";
if(minutes < 10){
  output += `0${minutes}:`; // Add leading 0 for single digit numbers
} else {
  output += `${minutes}:`;
}

if(seconds < 10){
  output += `0${seconds}`; //Add leading 0 for single digit numbers.
} else {
  output += seconds;
}


console.log(output);