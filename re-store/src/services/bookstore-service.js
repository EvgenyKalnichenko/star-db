export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Prodaction-Ready Microservices',
            autrhor: 'Susan J. Fowler',
            price: 1550,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release It',
            autrhor: 'Michel T. Nygard',
            price: 980,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        }
    ];

    getBooks() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
                // reject(new Error('Упс что то пошло не так'))
            }, 700)
        })
    }
}
