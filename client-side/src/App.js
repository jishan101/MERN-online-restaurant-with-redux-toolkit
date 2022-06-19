import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from './pages/home/Home';
import FoodItemsView from './features/fooditems/FoodItemsView';
import CartView from './features/cart/cartView';
import PaymentSuccess from './pages/paymentSuccess/PaymentSuccess';
import NotFound from './NotFound';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App text-secondary-color font-league-spartan leading-relaxed">
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/menu' element={ <FoodItemsView /> } />
                <Route path='/cart' element={ <CartView /> } />
                <Route path='/payment-success' element={ <PaymentSuccess /> } />
                <Route path='*' element={ <NotFound /> } />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

