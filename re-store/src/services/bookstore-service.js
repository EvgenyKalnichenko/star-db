export default class BookstoreService {

    getBooks(){
        return[
            {
                id:1,
                title: 'Prodaction-Ready Microservices',
                autrhor: 'Susan J. Fowler'},
            {
                id:2,
                title: 'Release It',
                autrhor: 'Michel T. Nygard'}
        ];
    }
}
