import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <div className="container" id="booking">
        <h2 className="section-title">Reserve Your Table</h2>
        <BookingForm />
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
        pauseOnFocusLoss={false}
        theme="colored"
      />
    </div>
  );
}

export default App;
