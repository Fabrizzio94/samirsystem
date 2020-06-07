import React from 'react'
import { Switch, Route } from 'react-router-dom';
// Components
import Inicio from './Components/Inicio/Inicio';
import Design from './Components/Design/Design';
import Precios from './Components/Precios/Precios';
import Demo from './Components/Demo/Demo';
import PoliticasPrivacidad from './Components/PoliticasPrivacidad/PoliticasPrivacidad';
import TerminosCondiciones from './Components/TerminosCondiciones/TerminosCondiciones';

// import Footer from './components/Footer/Footer'
const Routes = () => {
    return(
        <Switch>
            {/* <Route exact path='/contact' 
            render={(props) => (
                <Contact {...props} stickyRef={stickyRef} />
            )} />*/}
            
            <Route exact path='/terminos' component={TerminosCondiciones} />
            <Route exact path='/politicas' component={PoliticasPrivacidad} />
            <Route path='/'
                render={(props) => (
                    <>
                        <Inicio/>
                        <Design/>
                        <Precios />
                        <Demo />
                    </>
                )}
            />
            {/* <Route exact path='/name' component={ComponentName} /> */}
        </Switch>
    );
}

export default Routes;