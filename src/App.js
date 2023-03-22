import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages/Pages";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Pages />
      </Router>
    </>
  );
}

export default App;
