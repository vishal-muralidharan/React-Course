import logo from './logo.svg';
import './App.css';
import Hero from './components/17. Error Boundaries/Hero'
import ErrorBoundary from './components/17. Error Boundaries/ErrorBoundary'

function App() {
  return (
    <div className="App">
      <Hero heroName="Batman" />
      <Hero heroName="Superman" />
      <ErrorBoundary>
          <Hero heroName="Joker" />
      </ErrorBoundary>
        
    </div>
  )
}

export default App;
