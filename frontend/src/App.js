import Home from './components/home/home';
import Songs from './components/songs/songs'
import Artist from './components/artist/artist';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home /> 
      {/* <Songs /> */}
       {/* <Songs />
      <Artist /> */}

    
    </div>
  );
}

export default App;
