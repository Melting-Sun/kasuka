import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import About from './About/About';
import Slides from './About/Slides';
import About2 from './About2/About2';
import Services from './Services/Services';
import Parallax from './Parallax/Parallax';
import Product from './Products/Product';
import Pics from './Products/Pics';
import About3 from './About3/About3';
import Saulgoodman from './Saulgoodman/Saulgoodman';
import Teams from './Teams/Teams';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <About/>
      <Slides/>
      <About2/>
      <Services/>
      <Parallax/>
      <Product/>
      <Pics/>
      <About3/>
      <Saulgoodman/>
      <Teams/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
