import {Message} from './components';
import './App.css';

function App() {

  const text = 'какой-то текст переданный через пропс =)';

  return (
    <div className="App">
      <h1>Главная страница</h1>
      <Message text={text} click={() => console.log('click')}>Информация, передаваемая в компонент Message</Message>
    </div>
  );
}

export default App;
