import './App.css';
import About from './Components/About/About';
import Explor from './Components/Explor/Explor';
import Fag from './Components/Fag/Fag';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navs from './Components/Navs/Navs';
import Reviews from './Components/Reviews/Reviews';







function App() {
  return (
    <div className="App">
      <Navs />
      <Home />
      <About />
      <Explor />
      <Reviews />
      <Fag />
      <Footer />
    </div>
  );
}

export default App;
