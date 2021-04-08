import Clock from 'react-clock';
import './App.css';
import Congratulations from './components/Congrats';
import CovidHeader from './components/Header';
import Links from './components/Links';
import RolexBar from './components/RolexBar';
import Shop from './components/Shop';
import Video from './components/video';

function App() {
  return (
    <div className="App">
     <CovidHeader />
     <RolexBar/>
     <Congratulations/>
     <Links />
     <Video />
     <Shop />
     
    </div>
  );
}

export default App;
