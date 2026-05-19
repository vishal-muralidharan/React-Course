import './App.css';
import { ChildA } from './components/7. Context/ContextChildren';
import { ContextParent } from './components/7. Context/ContextParent';

function App() {
    return (
        <div className="App">
            <ContextParent>
                <ChildA />
            </ContextParent>
        </div>
    );
}

export default App;
