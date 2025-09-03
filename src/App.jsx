import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
