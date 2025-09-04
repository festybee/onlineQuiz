import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            {/*<Route path="/result" element={<Result />} />*/}
        </Routes>
      </BrowserRouter>
  )
}

export default App
