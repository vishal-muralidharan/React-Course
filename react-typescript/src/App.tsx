import './App.css';
import { Container } from './components/index';

function App() {
    const containerStyles = {
        border: '1px solid #ccc',
        padding: '12px',
        marginTop: '16px'
    };

    return (
        <div className="App">
            <Container styles={containerStyles} />
        </div>
    );
}

export default App;
