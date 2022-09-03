import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./Pages/Home";
import  Student  from "./Pages/Student";
import  Contact  from "./Pages/Student";
import  {StudentContextProvider}  from "./StudentContext";

function App() {
  return (
    <StudentContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Pages/Students"} element={<Student />} />
          <Route path={"/Pages/Contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;
