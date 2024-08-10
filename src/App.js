import Header from './Components/Header'
import Navbar from './Components/Navbar'
import LinkBar from './Components/LinkBar';
import './App.css';

function App() {
  return (
    <div className='app'>
    <div className='page-wrapper'>
      <Navbar></Navbar>
      <Header></Header>
      <LinkBar></LinkBar>
    </div>
    </div>
  );
}

export default App;
