import React, { useState} from 'react'

//import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import Navbar from 'react-bulma-components/lib/components/navbar';

//import 'react-bulma-components/dist/react-bulma-components.min.css';

// import { Navbar } from 'react-bulma-components';

const header = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState({
        activeMenu: false,
    });
   
    const NavbarBurger = (props) => (
        <button
          onClick={props.toggleMenu}
          className={`navbar-burger ${props.active ? 'is-active' : ''}`}
        >
          <span />
          <span />
          <span />
        </button>
    );
    const toggleMenu = () => {
        setState({
          activeMenu: !state.activeMenu,
        });
    };
    console.log(state.activeMenu);

    return (
            <Navbar className="navbar header_area" active={state.activeMenu} fixed={'top'} transparent={true} >
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
                    </Navbar.Item>
                    <NavbarBurger active={state.activeMenu} toggleMenu={toggleMenu} />
                </Navbar.Brand>

                <Navbar.Menu className={`navbar-menu ${state.activeMenu ? 'is-active': ''}`} >
                    <Navbar.Container position="end" >
                        <Navbar.Item hoverable href="#">
                            Inicio
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            Diseño
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            Precios
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            Demo
                        </Navbar.Item>
                    </Navbar.Container>
                    
                </Navbar.Menu>
            </Navbar>
        
    );
}

export default header;