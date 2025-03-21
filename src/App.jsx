// import components
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";

// import pages
import DayPage from "./pages/DayPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/giorno/:day/:month/:year" element={<DayPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
