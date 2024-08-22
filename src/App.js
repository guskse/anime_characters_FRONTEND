import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import FloatingImage from "./components/FloatingImage/FloatingImage";

//react toastify
import { ToastContainer } from "react-toastify";
//toast css
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer autoClose={2000} />
      <Header title={"My Anime Characters"} />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/characters" element={<Table />} />
        <Route path="/img" element={<FloatingImage />} />
      </Routes>
    </Router>
  );
}

export default App;
