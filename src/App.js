import './App.css';
import {Message} from './components/message';

function App() {

  const text = 'какой-то текст переданный через пропс =)';

  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;
