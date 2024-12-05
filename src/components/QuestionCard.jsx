export function QuestionCard({ question, currentAnswer, onAnswer }) {
  return (
    <div className="space-y-2">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(index)}
          className={`w-full text-left p-3 rounded ${
            currentAnswer === index
              ? 'bg-blue-100 border border-blue-500'
              : 'bg-gray-50 border hover:bg-gray-100'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}