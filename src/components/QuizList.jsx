import { QuizCard } from './QuizCard';
import { sampleQuizzes } from '../data/sampleQuizzes';

export function QuizList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sampleQuizzes.map((quiz, index) => (
        <QuizCard key={quiz.id} quiz={quiz} index={index} />
      ))}
    </div>
  );
}