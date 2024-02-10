import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./views/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </>
  );
};

export default App;
