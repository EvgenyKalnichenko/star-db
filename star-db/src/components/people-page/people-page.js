import React, {Component} from 'react';
import SwapiService from "../../services/swapi";
import ItemList from "../item-list/";
import PersonDetails from "../person-details";
import Row from "../row";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        const itemListPeople = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} (${i.birthYear}, ${i.gender})`
                )}
            </ItemList>
        );

        const personDetails = (
            <div>
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        )

        return (
            <Row left={itemListPeople} right={personDetails}/>
        )
    }
}

