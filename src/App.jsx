import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails"; 
import About from "./pages/About";
import Reviews from "./pages/Reviews";

import WhatsAppButton from "./components/WhatsAppButton"; 
import ManaliKasolSissu from "./pages/manaliKasolSissu"; 
import KasolKheerganga from "./pages/kasolkheerganga"; 
import BookingForm from "./pages/BookingForm"; 
import BookingSummary from "./pages/BookingSummary"; 
import Contact from "./pages/Contact"; 
import ConfirmationPage from "./pages/ConfirmationPage";
import Gallery from "./pages/Gallery";
import TermsAndConditions from "./pages/TermsAndConditions"; // Import the new page
import FAQ from "./pages/FAQ"; // Import the FAQ page
import "./index.css";



function App() {
    return (
        <Router>
            <NavBar />
            <div className="container mx-auto px-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/destination-details/:urlSlug" element={<DestinationDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/booking" element={<BookingForm />} />
                    <Route path="/booking-summary" element={<BookingSummary />} />
                    <Route path="/confirmation-page" element={<ConfirmationPage />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
                <WhatsAppButton />
            </div>
            <Footer />
        </Router>
    );
}

export default App;
