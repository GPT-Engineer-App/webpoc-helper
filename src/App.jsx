import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ChatbotArena from "./pages/ChatbotArena.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/chatbot-arena" element={<ChatbotArena />} />
      </Routes>
    </Router>
  );
}

export default App;
