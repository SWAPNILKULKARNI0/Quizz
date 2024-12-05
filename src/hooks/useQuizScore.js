export function useQuizScore() {
  const calculateScore = (answers, questions) => {
    return Object.entries(answers).reduce((score, [questionIndex, answer]) => {
      return score + (answer === questions[questionIndex].correctAnswer ? 1 : 0);
    }, 0);
  };

  return { calculateScore };
}