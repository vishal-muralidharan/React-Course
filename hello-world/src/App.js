import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components//HoverCounterTwo'
import User from './components//User'

function App() {
  return (
    <div className="App">
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? "Vishal" : "Guest"}/>
    </div>
  )
}

export default App;
