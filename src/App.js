import Header from './components/Header'
import Navbar from './components/Navbar'
import LinkBar from './components/LinkBar';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className='app'>
    <div className='page-wrapper poppins-medium'>
      <Navbar></Navbar>
      <Header></Header>
      <LinkBar></LinkBar>
      <Features/>
      <CTA></CTA>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
