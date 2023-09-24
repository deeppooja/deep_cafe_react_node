
import './App.css';
import Todo from './containers/Todo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './containers/User';
import Header from './components/Header';
import Login from './containers/Login';
import Home from './containers/Home';
import Footer from './components/Footer';
import About from './containers/About';
import Menu from './containers/Menu';
import Services from './containers/Services';
import Gallery from './containers/Gallery';
import ContactUs from './containers/ContactUs';
import PageNotFound from './containers/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
