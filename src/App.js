import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./LoginForm/LoginForm"
import HomePage from './Homepage/Homepage';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/LoginForm' element={<LoginForm />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
