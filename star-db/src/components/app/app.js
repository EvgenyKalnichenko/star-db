import React, {Component} from 'react';
import Header from '../header/'
import RandomPlanet from '../radnom-planet/'
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi";

export default class App extends Component {

    render() {

        return (
            <div className='container'>
                <Header/>
                <main>
                    <RandomPlanet/>
                    <PeoplePage/>
                </main>
            </div>
        )
    }
}

