import './App.css';
import { Container } from './components/1. Props/index';
import { LoggedIn } from './components/2. Hooks/LoggedIn';

function App() {
    const containerStyles = {
        border: '1px solid #ccc',
        padding: '12px',
        marginTop: '16px'
    };

    return (
        <div className="App">
            <LoggedIn />
        </div>
    );
}

export default App;
