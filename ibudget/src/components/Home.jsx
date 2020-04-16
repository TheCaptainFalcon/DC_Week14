import React, { Component } from 'react';
import './css/Home.css';
import stonks from './image/stonks.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck} from 'react-bootstrap';

class Home extends Component {
    state = {

    }

    render() {
        return(
            <div className='Home'>
                <h1>iBudget</h1>
                <h2>A simple solution for calculating your income to expense ratios</h2>
                <img src={stonks} alt='stonks.png'/>
                    <div className='Home-sections'>
                        <h1>Description:</h1>
                            <p>iBudget is capable of utilizing user-inputted data on monthly income and expenses to calculate the monthly balance.
                                This core information is important to feed the calculation data for other time intervals that are of interest.
                                Sometimes it is best to see the actual figures, rather than 'guess-timating' the amount.
                            </p>
                    </div>
                    <div>
                        <h1>Demo</h1>
                        <p>To get started, click on the "Calculator" tab on the above navbar and insert the data fields.

                        </p>
                    </div>
                
            </div>
        )
    }
}

export default Home;