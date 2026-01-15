import QuizContainer from './components/QuizContainer'
import Header from './components/Header'
import Footer from './components/Footer'
import { QuizProvider } from './context/QuizContext'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <QuizProvider>
          <QuizContainer />
        </QuizProvider>
      </div>
      <Footer />
    </div>
  )
}

export default App
