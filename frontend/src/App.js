import logo from './logo.svg';
import './App.css';
import Handbags from './components/handbag/handbags';
import Shop from './components/shop_by_catagories/shop';
import Footer from './components/footer/footer';
import Values from './components/values/value';
import Happy from './components/happy/happy';
import ProductList from './components/latestproduct/productlist';
import PopularProductList from './components/popularproduct/productlist';
import Elegants from './components/elegants/elegant';
import HandwovenProductList from './components/handwoven/productlist';
import Dashboard from './components/header/header';
import CustomProductList from './components/custom/productlist';





function App() {
  return (
    <div className="App">
      <Dashboard/>
      <ProductList/>
      <Shop/>
      <PopularProductList/>
      <Elegants/>
      <HandwovenProductList/>
      <Handbags/>
      <CustomProductList/>
      <Happy/>
      <Values/>
      <Footer/>
      
    </div>
  );
}

export default App;
