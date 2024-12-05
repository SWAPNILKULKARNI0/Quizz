import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sampleQuizzes } from '../data/sampleQuizzes';
import { Timer } from './Timer';
import { QuestionCard } from './QuestionCard';
import { NavigationButtons } from './NavigationButtons';
import { useQuizScore } from '../hooks/useQuizScore';

export function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = sampleQuizzes.find(q => q.id === parseInt(id));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeUp, setTimeUp] = useState(false);
  const { calculateScore } = useQuizScore();

  useEffect(() => {
    if (timeUp) {
      handleSubmit();
    }
  }, [timeUp]);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const handleAnswer = (optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const score = calculateScore(answers, quiz.questions);
    navigate('/results', { 
      state: { 
        score,
        totalQuestions: quiz.questions.length,
        answers,
        quiz 
      }
    });
  };

  const question = quiz.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{quiz.title}</h2>
          <Timer 
            duration={quiz.timeLimit} 
            onTimeUp={() => setTimeUp(true)} 
          />
        </div>

        <div className="mb-6">
          <p className="mb-2">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </p>
          <p className="text-xl mb-4">{question.question}</p>

          <QuestionCard
            question={question}
            currentAnswer={answers[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>

        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          isFirstQuestion={currentQuestion === 0}
          isLastQuestion={currentQuestion === quiz.questions.length - 1}
        />
      </div>
    </div>
  );
}