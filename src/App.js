import './sass/style.css';
import Navbar from './components/Home Components/Navbar';
import Home from './components/Home';
import OurCulture from './components/OurCulture';
import ContactUs from './components/Contact';
import Earbuds from './components/Earbuds';
import Headphones from './components/Headphones';
import Footer from './components/Home Components/footer/Footer';
import Cart from './components/Cart'

import { BrowserRouter, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/OurCulture" component={OurCulture}></Route>
        <Route exact path="/Contact" component={ContactUs}></Route>
        <Route exact path="/Earbuds" component={Earbuds}></Route>
        <Route exact path="/Headphones" component={Headphones}></Route>
        <Route exact path="/Cart" component={Cart}></Route>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
