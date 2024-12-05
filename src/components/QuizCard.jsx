import { Link } from 'react-router-dom';

export function QuizCard({ quiz }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
      <p className="text-gray-600 mb-2">{quiz.description}</p>
      <p className="text-sm mb-4">Age Range: {quiz.ageRange}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm">
          {quiz.questions.length} questions
        </span>
        <Link
          to={`/quiz/${quiz.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
}