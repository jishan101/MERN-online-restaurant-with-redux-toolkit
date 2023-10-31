import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartView from "./features/cart/cartView";
import FoodItemsView from "./features/fooditems/FoodItemsView";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import PaymentSuccess from "./pages/paymentSuccess/PaymentSuccess";

function App() {
  return (
    <div className="App text-secondary-color font-league-spartan leading-relaxed">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<FoodItemsView />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
