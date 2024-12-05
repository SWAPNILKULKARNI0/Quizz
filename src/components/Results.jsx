import { useLocation, Link } from 'react-router-dom';

export function Results() {
  const location = useLocation();
  const { score, totalQuestions, answers, quiz } = location.state;

  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedback = () => {
    if (percentage >= 80) return "Great job!";
    if (percentage >= 60) return "Well done!";
    return "Keep practicing!";
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Quiz Results</h2>
        
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2">
            {score} / {totalQuestions}
          </div>
          <div className="text-xl mb-2">
            Score: {percentage}%
          </div>
          <div className="text-lg">
            {getFeedback()}
          </div>
        </div>

        <div className="space-y-4">
          {quiz.questions.map((question, index) => (
            <div 
              key={index}
              className={`p-4 rounded ${
                answers[index] === question.correctAnswer
                  ? 'bg-green-50'
                  : 'bg-red-50'
              }`}
            >
              <p className="font-bold mb-2">{question.question}</p>
              <p>Your answer: {question.options[answers[index]]}</p>
              <p className="font-bold">
                Correct answer: {question.options[question.correctAnswer]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try Another Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}