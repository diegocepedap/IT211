var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

var gradesArray = grades.split(", ");

//Displays students in alphabetical order
gradesArray.sort(function(a, b) {
  var nameA = a.split("|")[0].toUpperCase();
  var nameB = b.split("|")[0].toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

var output = "";
var totalStudents = gradesArray.length;
var lowestScore = Infinity;
var highestScore = -Infinity;
var sumScores = 0;

for (var i = 0; i < totalStudents; i++) {
  var studentData = gradesArray[i].split("|");
  var name = studentData[0];
  var score = parseInt(studentData[1]);

  // Capitalize the first letter of the student's name
  var capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);

  output += capitalizedFirstName + " - " + score + "\n";

  // Update lowest
  //Highest scores  
  if (score < lowestScore) {
    lowestScore = score;
  }
  if (score > highestScore) {
    highestScore = score;
  }

  sumScores += score;
}

var averageScore = sumScores / totalStudents;
//Here we have the accessed to the data 
console.log("Student Grades:\n" + output);
console.log("Total Students: " + totalStudents);
console.log("Lowest Score: " + lowestScore);
console.log("Highest Score: " + highestScore);
console.log("Average Score: " + averageScore.toFixed(2));