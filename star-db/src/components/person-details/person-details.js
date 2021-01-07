import React, {Component} from 'react';
import SwapiService from "../../services/swapi";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: {},
        loading: true,
        error: false

    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
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

    updatePerson() {

        this.setState({
            loading: true,
        })

        const {personId} = this.props;

        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then(this.onPersonLoaded)
    }

    render() {

        const { person, loading, error } = this.state;

        if(!person) {
            return <span>Select a person from a list</span>
        }

        const hasData = !(loading || error);

        console.log(loading);
        const errorMessage = error ? <ErrorIndicator/> : null ;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ?  <PersonView person={person}/> : null;

        return(
            <div className="personal-details">
                {spinner}
                {content}
                {errorMessage}
            </div>
        )
    }
}

const PersonView = ({ person }) => {

    const {id, name, gender,birthYear, eyeColor} = person;
    console.log(person);
    return(
        <React.Fragment>
            <div className="personal-details__image">
                <img className='planet-image' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            </div>
            <div className="personal-details__info">
                <h2 className='personal-details__header'>{name}</h2>
                <ul className="personal-details__list">
                    <li><span className='trem'>Gender:</span> {gender}</li>
                    <li><span className='trem'>Birth Year:</span> {birthYear}</li>
                    <li><span className='trem'>Eye color:</span> {eyeColor}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
