import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import QuizContainer from "./components/QuizContainer";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizContainer />} />
            <Route path="/results" element={<Results />} />
          </Route>
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
