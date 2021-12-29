import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/ContextApi/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/order' element={<Order />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/placeOrder' element={<PrivetRoute>
            <PlaceOrder />
          </PrivetRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
