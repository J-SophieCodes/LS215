const examWeight = 0.65;
const exercisesWeight = 1 - examWeight;

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

let sum = (total, currentValue) => total + currentValue;

function percentGrade(scores) {
  let weightedExamScore = average(scores.exams) * examWeight;
  let weightedExerciseScore = scores.exercises.reduce(sum) * exercisesWeight;
  return Math.round(weightedExamScore + weightedExerciseScore);
}

function letterGrade(percent) {
  if (percent > 92) {
    return `${percent} (A)`;
  } else if (percent > 84) {
    return `${percent} (B)`;
  } else if (percent > 76) {
    return `${percent} (C)`;
  } else if (percent > 68) {
    return `${percent} (D)`;
  } else if (percent > 59) {
    return `${percent} (E)`;
  } else {
    return `${percent} (F)`;
  }
}

function average(scores) {
  return scores.reduce(sum) / scores.length;
}

function sortAscending(a, b) {
  return a - b;
}

function sortDescending(a, b) {
  return b - a;
}

function min(scores) {
  return scores.sort(sortAscending)[0];
}

function max(scores) {
  return scores.sort(sortDescending)[0];
}

function transpose(scores) {
  return scores[0].map((_, idx) => scores.map(score => score[idx]));
}

function examStatistics(scores) {
  let scoresPerExam = transpose(scores);

  return scoresPerExam.map(examScores => {
    return {
      average: average(examScores),
      minimum: min(examScores),
      maximum: max(examScores),
    };
  });
}

function generateClassRecordSummary(students) {
  let classRecordSummary = {};

  let scores = Object.values(students).map(student => student.scores);
  classRecordSummary.studentGrades = scores.map(percentGrade)
                                           .map(letterGrade);

  let examScores = scores.map(score => score.exams);
  classRecordSummary.exams = examStatistics(examScores);

  return classRecordSummary;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }


// Suggested solution
/*
function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let lookupLetter = function (percentageGrade) {
    if (percentageGrade >= 93) {
      return 'A';
    } else if (percentageGrade >= 85 && percentageGrade < 93) {
      return 'B';
    } else if (percentageGrade >= 77 && percentageGrade < 85) {
      return 'C';
    } else if (percentageGrade >= 69 && percentageGrade < 77) {
      return 'D';
    } else if (percentageGrade >= 60 && percentageGrade < 69) {
      return 'E';
    } else {
      return 'F';
    }
  };

  let examsAvg = computeExamsAverage(scoreObj.exams);
  let exercisesAvg = computeExercisesScore(scoreObj.exercises);
  let percentageGrade = Math.round(examsAvg * 0.65 + exercisesAvg * 0.35);

  return String(percentageGrade) + ' (' + lookupLetter(percentageGrade) + ')';
}

function computeExamsAverage(exams) {
  return exams.reduce((total, score) => total + score) / exams.length;
}

function computeExercisesScore(exercises) {
  return exercises.reduce((total, score) => total + score);
}

function getExamSummary(examScoresPerStudent) {
  let scoresPerExam = transpose(examScoresPerStudent);

  return scoresPerExam.map(examScores => {
    return {
      average: parseFloat(getExamAverage(examScores)),
      minimum: getExamMinimum(examScores),
      maximum: getExamMaximum(examScores),
    };
  });
}

function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

function getExamAverage(scores) {
  return (scores.reduce((total, score) => total + score) / scores.length)
            .toFixed(1);
}

function getExamMinimum(scores) {
  return scores.reduce((min, score) => (min <= score ? min : score));
}

function getExamMaximum(scores) {
  return scores.reduce((max, score) => (max >= score ? max : score));
}
*/