export default class DummySwapiService {

    _people = [
        {
            id: 1,
            name:'Bilbo Baggins [Test]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown',
        },
        {
            id: 2,
            name:'Frodo Baggins [Test]',
            gender: 'gender',
            birthYear: 'birthYear',
            eyeColor: 'dark sd',
        }
    ];

    _planets = [
        {
            id: 1,
            name: 'Venera',
            population: '7 500 300 200',
            rotationPeriod:  '23 hours',
            diameter: '20 000 km'
        },
        {
            id: 2,
            name: 'Mars',
            population: '0',
            rotationPeriod:  '43 hours',
            diameter: '10 000 km'
        },
        {
            id:3,
            name: 'Venera',
            population: '7 500 300 200',
            rotationPeriod:  '23 hours',
            diameter: '20 000 km'
        },
        {
            id: 4,
            name: 'Mars',
            population: '0',
            rotationPeriod:  '43 hours',
            diameter: '10 000 km'
        }
    ];

    _starships = [
        {
            id: 1,
            name: 'Uss Enterprise [TEST DATA]',
            model: 'us-29',
            manufacturer: 'manufacturer [TEST DATA]',
            costInCredits: 'costInCredits [TEST DATA]',
            length: 'length [TEST DATA]',
            crew: 'crew [TEST DATA]',
            passengers: 'passengers [TEST DATA]',
            cargoCapacity: 'cargoCapacity [TEST DATA]',
        }
    ];

    getAllPeople = async () => {
        return this._people;
    };

    getPerson = async (id) => {
        return this._people[0];
    };

    getAllPlanets = async () => {
        return this._planets;
    };

    getPlanet = async (id) => {
        return this._planets[0];
    };

    getAllStarShips = async () => {
        return this._starships;
    };

    getStarShip = async (id) => {
        return this._starships[0];
    };

    TestURL = (url) => {
        return true;
    };

    getPersonImage = () => {
        return `https://placeimg.com/400/500/people`
    };

    getStarshipsImage = () => {
        return `https://placeimg.com/600/400/tech`;
    };

    getPlanetImage = () => {
        return `https://placeimg.com/400/400/nature`
    };
}