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
import { createContext, useState } from "react";
import SemSix from "./pages/Semesters/SemSix";
import SemSeven from "./pages/Semesters/SemSeven";
import SemEight from "./pages/Semesters/SemEight";

export const SemContext = createContext();

function App() {
  const SemState = useState({ username: "User, Reload the page", Semester: 0 });
  return (
    <SemContext.Provider value={SemState}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/s1" element={<SemOne />} />
          <Route path="/s2" element={<SemTwo />} />
          <Route path="/s3" element={<SemThree />} />
          <Route path="/s4" element={<SemFour />} />
          <Route path="/s5" element={<SemFive />} />
          <Route path="/s6" element={<SemSix />} />
          <Route path="/s7" element={<SemSeven />} />
          <Route path="/s8" element={<SemEight />} />
        </Routes>
        <Footer />
      </div>
    </SemContext.Provider>
  );
}

export default App;
