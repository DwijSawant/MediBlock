import './App.css';
import Datapage from './Datapage/Datapage';
import Display from './Datapage/Display';
import Navbar from './Navbar/Navbar';
import Upload from './Datapage/Upload'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Homepage/Homepage';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/Datapage' element={<Datapage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
