import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss"
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleNavbarClick = (e) => {
        // Don't navigate if clicking on specific links or buttons
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
            return;
        }
        navigate('/');
    };

    return (
        <nav onClick={handleNavbarClick}>
            <div className="left">
                <Link to="/" className="logo">
                   <img src="/logo.png" alt="" />
                   <span>Lodgify</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/agents">Contacts</Link>
                <Link to="/list">Properties</Link>
            </div>

            <div className="right">
                {currentUser ? (
                    <div className="user">
                        <img
                            src={currentUser.avatar || "/noavatar.jpg"}
                            alt="" 
                        />
                        <span>{currentUser.username}</span>
                        <Link to="/profile" className="profile">
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/login">Sign in</Link>
                        <Link to="/register" className="register">
                            Sign up
                        </Link>
                    </>
                )}
               
                <div className="menuIcon">
                    <img 
                    src="/menu.png" 
                    alt=""  
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen((prev) => !prev);
                    }}
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/agents">Contacts</Link>
                    <Link to="/list">Properties</Link>
                    <Link to="/login">Sign in</Link>
                    <Link to="/register">Sign up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;