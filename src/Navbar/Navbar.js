import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <span className="nav-logo">MediBlock</span>
      <div className='nav-items'>
        <button class='btn' onClick={()=> navigate("/Datapage")}>Documents</button>
        <button class="btn">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Navbar;
