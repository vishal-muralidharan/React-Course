import './App.css';
import { Private } from './components/6. Auth/Private';
import { Profile } from './components/6. Auth/Profile';

function App() {
    return (
        <div className="App">
            <Private isLoggedIn={true} Component={Profile}/>
        </div>
    );
}

export default App;
