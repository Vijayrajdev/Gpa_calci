import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SemOne from "./pages/Semesters/SemOne";
import SemTwo from "./pages/Semesters/SemTwo";
import SemThree from "./pages/Semesters/SemThree";
import SemFour from "./pages/Semesters/SemFour";
import SemFive from "./pages/Semesters/SemFive";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/s1" element={<SemOne />} />
        <Route path="/s2" element={<SemTwo />} />
        <Route path="/s3" element={<SemThree />} />
        <Route path="/s4" element={<SemFour />} />
        <Route path="/s5" element={<SemFive />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
