
import './App.css';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

function App() {
  return (
    <div className="App">
      
       <h1>Demo app</h1>
       <div className='box'>
       <div className="container">
       <ShakaPlayer  autoPlay muted width="250px" src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"  /> 
       </div>
       </div>

      
    </div>
  );
}

export default App;
