import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../../BodyComponents/Home';
import About from '../../BodyComponents/About';
import Contact from '../../BodyComponents/Contact';

export default class BodyRoutes extends React.Component {

    render() {

        return (

            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/about" component={About} />
                    <Route exact={true} path="/contact" component={Contact} />
                </Switch>
            </HashRouter>

        );

    }

}