import React, {Component} from 'react';
import Header from '../header/'
import RandomPlanet from '../radnom-planet/';
import SwapiService from "../../services/swapi";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages/";

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import StarshipDetails from "../sw-components/starship-details";
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLoggin = () => {
      this.setState({
          isLoggedIn: true
      })
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            return{
                swapiService: new Service()
            }
        })
    };

    render() {
        const { isLoggedIn } = this.state;
        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <Router>
                    <div className='container'>
                        <Header onServiceChange={this.onServiceChange}/>
                        <main>
                            <RandomPlanet updateInterval={3000}/>
                            <Switch>
                                <Route path='/'
                                       render={() => <h2>Welcome to StarDB</h2>}
                                       exact/>
                                <Route path='/people/:id?' component={PeoplePage}/>
                                <Route path='/planets' component={PlanetPage}/>
                                <Route path='/starships' exact component={StarshipPage}/>
                                <Route path='/starships/:id'
                                       render={({match, location, history}) => {
                                           const { id } = match.params;
                                           return <StarshipDetails itemId={id}/>
                                       }}/>
                                <Route path='/login'
                                        render={() => (
                                            <LoginPage
                                                isLoggedIn={isLoggedIn}
                                                onLogin={this.onLoggin}/>
                                        )}/>
                                <Route path='/secret'
                                       render={() => (
                                           <SecretPage isLoggedIn={isLoggedIn}/>
                                       )}
                                />
                                <Route render={() =>  <h2>Page not found</h2>}/>
                            </Switch>
                        </main>
                    </div>
                </Router>
            </SwapiServiceProvider>
        )
    }
}

