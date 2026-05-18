import './App.css';
import A from './components/20. Context/A'
import B from './components/20. Context/B'
import C from './components/20. Context/C'
import {UserProvider} from './components/20. Context/UserContext'

function App() {
    return (
        <div className="App">
            <UserProvider value="Vishal">
                <C/>
            </UserProvider>
            
        </div>
    )
}

export default App;
