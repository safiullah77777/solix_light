import { BrowserRouter, Route, Routes } from "react-router-dom";
import Benifits from "./pages/Benifits";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Benifits /> */}
      {/* <Learn /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benifits" element={<Benifits />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
