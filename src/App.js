import Navbar from './components/Navbar';
import Routing from './components/Routing';
import Footer from './components/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Routing />
      <Footer />
    </>
  );
}
export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/