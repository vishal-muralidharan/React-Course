import './App.css';
import { Counter } from './components/2. Hooks/Counter';
import { Box } from './components/3. Context/Box';
import { ThemeContextProvider } from './components/3. Context/ThemeContext';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider> 
        </div>
    );
}

export default App;
