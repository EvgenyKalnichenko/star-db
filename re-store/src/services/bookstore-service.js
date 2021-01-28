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
        },
        {
            id: 3,
            title: 'Book 3',
            autrhor: 'Susan J. Fowler',
            price: 650,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: 'Book 4',
            autrhor: 'Michel T. Nygard',
            price: 1980,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        },
        {
            id: 5,
            title: 'Book 5',
            autrhor: 'Susan J. Fowler',
            price: 420,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 6,
            title: 'Book 6',
            autrhor: 'Michel T. Nygard',
            price: 570,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        },
        {
            id: 7,
            title: 'Book 7',
            autrhor: 'Susan J. Fowler',
            price: 900,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 8,
            title: 'Book 8',
            autrhor: 'Michel T. Nygard',
            price: 110,
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
