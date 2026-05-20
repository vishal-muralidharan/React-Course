import './App.css'
import { Text } from './components/11. Components/Text'

function App() {
    return (
        <div className='App'>
        <Text as='h1' size='lg'>
            Heading
        </Text>
        <Text as='p' size='md'>
            Paragraph
        </Text>
        <Text as='label' size='sm' color='secondary'>
            Label
        </Text>
        </div>
    )
}


export default App
