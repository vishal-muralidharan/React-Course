import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './components/19. Render Props/ClickCounterTwo'
import HoverCounterTwo from './components/19. Render Props/HoverCounterTwo'
import User from './components/19. Render Props/User'
import Counter from './components/19. Render Props/Counter';

function App() {
    return (
        <div className="App">
            <Counter 
                render={(count, incrementCount) => (
                  <ClickCounterTwo count={count} incrementCount={incrementCount} />
                )} 
            />
            <Counter 
                render={(count, incrementCount) => (
                  <HoverCounterTwo count={count} incrementCount={incrementCount} />
                )} 
            />
            {/* <ClickCounterTwo />
            <HoverCounterTwo />
            <User render={(isLoggedIn) => isLoggedIn ? "Vishal" : "Guest"}/> */}
        </div>
    )
}

export default App;
