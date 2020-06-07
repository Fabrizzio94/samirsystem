import React, { useState} from 'react'

//import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
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
                        <Navbar.Item hoverable renderAs={Link} smooth to='/#inicioSection' activeclassname="selected">
                            {/* <Link smooth to='/#inicioSection' activeclassname="selected">Inicio</Link> */}
                            Inicio
                        </Navbar.Item>
                        <Navbar.Item renderAs={Link} smooth to='/#designSection' activeclassname="selected">
                            {/* <Link smooth to='/#designSection' activeclassname="selected">Diseño</Link> */}
                            Diseño
                        </Navbar.Item>
                        <Navbar.Item renderAs={Link} smooth to='/#precioSection'activeclassname="selected">
                            {/* <Link smooth to='/#precioSection'activeclassname="selected">Precios</Link> */}
                            Precios
                        </Navbar.Item>
                        <Navbar.Item renderAs={Link} smooth to='/#demoSection' activeclassname="selected">
                            {/* <Link smooth to='/#demoSection' activeclassname="selected">Demo</Link> */}
                            Demo
                        </Navbar.Item>
                    </Navbar.Container>
                    
                </Navbar.Menu>
            </Navbar>
    );
}

export default header;