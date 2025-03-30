import { Routes, Route } from "react-router";
import "./css/App.css";

// Pages
import Home from "./pages/Home";
import ContentsPanel from "./pages/ContentsPanel";
import QA from "./pages/QA";

// Components
import Navbar from "./components/Navbar";

function App() {
    return (
        <main className="main-content min-w-[100vh]">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contents" element={<ContentsPanel />}></Route>
                <Route path="/qa" element={<QA />}></Route>
            </Routes>
        </main>
    );
}

export default App;
