import React from 'react';
import { Helmet } from 'react-helmet';

const Vacation = (props) => {
    return ( 
        <div className="container vacation-container">
            <Helmet>
                <title>Vacation Page</title>
            </Helmet>
            <h1 className="title">Vacation</h1>
        </div>
     );
}
 
export default Vacation;