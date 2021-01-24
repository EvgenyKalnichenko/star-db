import React from 'react';
import {Redirect} from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {

    if(isLoggedIn){
        return(
            <p>this secret page</p>
        )
    }

    return <Redirect to="/login"/>
};

export default SecretPage;
