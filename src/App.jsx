import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Review from './components/Review';
import Result from './components/Result';


function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/welcome" replace />} />

            <Route path="/welcome" element={<Welcome />} />  // Landing Page
            <Route path="/quiz" element={<Quiz />} /> // Route to access the quiz component from Welcome component
            <Route path="/result" element={<Result />} />
            <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
