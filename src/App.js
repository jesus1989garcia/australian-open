import Clock from 'react-clock';
import './App.css';
import Congratulations from './components/Congrats';
import CovidHeader from './components/Header';
import Links from './components/Links';
import Partners from './components/Partners';
import Players from './components/players';
import RolexBar from './components/RolexBar';
import Shop from './components/Shop';
import Video from './components/video';
import players from './data/players.json'

function App() {
  return (
    <div className="App">
     <CovidHeader />
     <RolexBar/>
     <Congratulations/>
     <Links />
     <Video />
     <Shop />
     <Players list={players} />
     <Partners />
    </div>
  );
}

export default App;
