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

            {/*All routes for the application go below.*/}
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
