import QuizContainer from './components/QuizContainer'
import Header from './components/Header'
import Footer from './components/Footer'
import { QuizProvider } from './context/QuizContext'

function App() {
  return (
    <div className="app">
      <Header />
      <QuizProvider>
        <QuizContainer />
      </QuizProvider>
      <Footer />
    </div>
  )
}

export default App
