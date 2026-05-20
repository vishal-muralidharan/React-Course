import './App.css';
import { User } from './components/3. Context/User';
import { UserContextProvider } from './components/3. Context/UserContext';

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <User />
            </UserContextProvider>
        </div>
    );
}

export default App;
