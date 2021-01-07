import React, {Component} from 'react';
import SwapiService from "../../services/swapi";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        //компонент подключен (DOM уже на странице)
        //Используется для инициализации
        //Не используйте конструктор для кода который создает побочные эффекты
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
        console.log('componentDidMount()');
    }

    componentDidUpdate() {
        //компонент обновился
        console.log('componentDidUpdate()');
    }

    componentWillUnmount() {
        //отрабатывает после удаления
        clearInterval(this.interval);
        console.log('componentWillUnmount()');
    }

    componentDidCatch() {
        //когда в компоненте произошла ошибка
        console.log('componentDidCatch()');
    }

    getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    }

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        })
    };

    updatePlanet = () => {
        const id = this.getRandomInRange(1, 20);

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    TestURL = (url) => {
        const request = new XMLHttpRequest();

        request.open('HEAD', url, false);
        request.send();
        return request.status != 404;
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null ;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return(
            <div className="random-planet">
                {spinner}
                {content}
                {errorMessage}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {

    const {  id, name, population, rotationPeriod, diameter}  = planet;

    return(
        <React.Fragment>
            <div className="random-planet__image">
                <img className='planet-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </div>
            <div className="random-planet__info">
                <h2 className='random-planet__header'>{name}</h2>
                <ul className="random-planet__list">
                    <li>Population: {population}</li>
                    <li>Rotation period: {rotationPeriod}</li>
                    <li>Diameter: {diameter}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
