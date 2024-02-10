import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Homepage/Homepage';
import Loginpage from './Loginpage/Loginpage';
import Upload from "./Datapage/Datapage"
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/Datapage' element={<Upload/>} />
          <Route path='/Loginpage' element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
