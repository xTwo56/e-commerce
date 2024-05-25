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
import OurPerspective from './components/perspective/Perspective';
import DressProductList from './components/dress/productlist';
import BlogProductList from './components/blog/productlist';


function App() {
  return (
    <div className="App">
      <Dashboard/>
      <ProductList/>
      <Shop/>
      <PopularProductList/>
      <OurPerspective/>
      <Elegants/>
      <HandwovenProductList/>
      <DressProductList/>
      <Handbags/>
      <CustomProductList/>
      <Happy/>
      <Values/>
      <BlogProductList/>
      <Footer/>
    </div>
  );
}

export default App;
