
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import samsung_banner from './Components/Assets/samsung_banner.png'
import iphone_banner from './Components/Assets/iphone_banner.png'
import xiaomi_banner from './Components/Assets/xiaomi_banner.png'



function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/samsung'element={<Shopcategory banner={samsung_banner} category="samsung"/>}/>
        <Route path='/apple'element={<Shopcategory banner={iphone_banner} category="iphone"/>}/>
        <Route path='/xiaomi'element={<Shopcategory banner={xiaomi_banner} category="xiaomi"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login'element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
