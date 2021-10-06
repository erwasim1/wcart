import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomeScreen from './screen/HomeScreen';
import {BrowserRouter as Router ,Route}from 'react-router-dom';
import ProductDetails from './screen/ProductDetails';
import CartScreen from './screen/CartScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProfileScreen from './screen/ProfileScreen';
import ShippingScreen from './screen/ShippingScreen';
import PaymentScreen from './screen/paymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import OrderScreen from './screen/OrderScreen';
function App() {
  return (
    <Router>
    <Header/>
    <main className="my-3">
   <Container>

   <Route path="/" component={HomeScreen} exact />
   <Route path="/login"component ={LoginScreen} />
   <Route path="/payment"component ={PaymentScreen} />
   <Route path="/order/:id"component ={OrderScreen} />
   <Route path="/placeorder"component ={PlaceOrderScreen} />
   <Route path="/shipping"component ={ShippingScreen} />
   <Route path="/profile"component ={ProfileScreen} />
   <Route path="/register"component ={RegisterScreen} />
    <Route path="/products/:id" component={ProductDetails} />
    
    <Route path="/cart/:id?" component={CartScreen} />
  
   
      </Container>

    </main>
      <Footer/>
    </Router>
  );
}

export default App;
