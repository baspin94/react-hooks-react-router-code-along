import {NavLink} from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  function NavBar() {
    return(
      <div>
        <NavLink
          exact to="/"
          style={linkStyles}
          activeStyle={{background: "darkblue",}}
          >Home
          </NavLink>
        <NavLink
          exact to="/about"
          style={linkStyles}
          activeStyle={{background: "darkblue",}}
          >About
          </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{background: "darkblue",}}
        >Login
        </NavLink>
      </div>
    );
  }

export default NavBar;