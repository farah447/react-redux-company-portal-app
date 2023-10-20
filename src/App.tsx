import { BrowserRouter, Route, Routes } from "react-router-dom";
import Companies from "./Components/Companies";
import { Home, Error } from "@mui/icons-material";
import Navbar from "./layout/Navbar";
import SingleCompany from "./Components/SingleCompany";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Companies' element={<Companies/>}/>
        <Route path='/Companies/:id' element={<SingleCompany/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;