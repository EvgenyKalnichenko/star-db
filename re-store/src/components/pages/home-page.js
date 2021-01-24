import React from "react";
import BookList from "../book-list";

const HomePage = () => {
    return(
        <BookList books={[
            {
                id:1,
                title: 'Prodaction-Ready Microservices',
                autrhor: 'Susan J. Fowler'},
            {
                id:2,
                title: 'Release It',
                autrhor: 'Michel T. Nygard'}
        ]}/>
    )
}

export default HomePage;
