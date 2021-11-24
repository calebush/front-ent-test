
import React  from "react";
import {useLocation, NavLink, Link} from "react-router-dom";
import { Nav } from "react-bootstrap";
function Sidebar({  routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" >
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="#"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("assets/img/DIL.png").default}
                alt="..."
              />
            </div>
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={activeRoute(prop.layout + prop.path)}
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
            <div style={{textAlign:"center", paddingTop:"170%", color:"#4b4848", paddingLeft:"10px",paddingRight:"5px"}}>
              <Link to={"#"} style={{color:"#1e1c1c"}} >Log Out</Link>
              <p>&copy; Data Integrated Limited {new Date().getFullYear()}</p>
            </div>

        </Nav>
      </div>
    </div>
  );
}
export default Sidebar;
