import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'

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
