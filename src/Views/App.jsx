import './App.scss';
import Menu from '../Components/Menu/Menu.jsx';
import Poster from '../Components/Poster/Poster.jsx';
import Title from '../Components/Title/Title.jsx';

function App() {
  return (
    <div className='App'>
      <Menu></Menu>
      <Poster></Poster>
      <Title title='Sobre mí'></Title>
    </div>
  );
}

export default App;
