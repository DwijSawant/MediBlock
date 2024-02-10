import './App.css';
import Datapage from './Datapage/Datapage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Homepage/Homepage';
import Loginpage from './Loginpage/Loginpage';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/Datapage' element={<Datapage />} />
          <Route path='/Loginpage' element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
