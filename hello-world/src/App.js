import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/18. Higher Order Components/ClickCounter'
import HoverCounter from './components/18. Higher Order Components/HoverCounter'

function App() {
  return (
    <div className="App">
      <ClickCounter name="Vishal"/>
      <HoverCounter />
    </div>
  )
}

export default App;
