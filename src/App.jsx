import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizList } from './components/QuizList';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';

function App() {
  return (
    <Router>
      <div className="min-h-screen py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Kid's Learning Quiz
          </h1>
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;