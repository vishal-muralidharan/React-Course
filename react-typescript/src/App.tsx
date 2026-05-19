import './App.css';
import { Heading } from './components/Heading';
import { Status } from './components/Status';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {
    return (
      <div className="App">
          <Status status='loading'/>
          <Heading>
              Placeholder Text
          </Heading>
          <Oscar>
              <Heading>Oscar goes to Lionel Messi!</Heading>
          </Oscar>
          <Greet name='Vishal' isLoggedIn={true} />
      </div>
    );
}

export default App;
