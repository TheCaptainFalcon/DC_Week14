import React, { Component } from 'react';
import './css/Home.css';
import stonks from './image/stonks.png'

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
                            <p>iBudget is capable of taking into account income and expenses of different amounts and variable frequencies to determine
                                the results. Sometimes it is best to see the actual figures, rather than 'guess-timating' the amount.
                            </p>
                    </div>
                    <div>
                        <h1>Tutorial - How to get started</h1>
                        <h2>Step 1:</h2>
                        <p>Click on the Calculator tab</p>
                    </div>
                
            </div>
        )
    }
}

export default Home;