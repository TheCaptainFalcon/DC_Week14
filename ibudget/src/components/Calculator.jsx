import React, { Component } from 'react';
import './css/Calculator.css';

class Calculator extends Component {
    state = {
        form: [
            { }
        ]
    }

    render() { 
        return (  
            <div className='Calculator'>
                <h2>Income</h2>
                <form className='Calculator-form'>
                    <label>Name
                        <input
                        type='text'
                        name={this.state.name}
                        placeholder='Name'
                        />
                    </label>
                    <label>Description
                        <input
                        type='text'
                        name={this.state.name}
                        placeholder='Description'
                        />
                    </label>
                    <label>Frequency
                        <select>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Bi-Weekly">Bi-Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                    </label>
                    <label>Amount
                        <input
                        type='number'
                        name={this.state.name}
                        placeholder='$'
                        />
                    </label>
                    <button>+</button>
                </form>

                {/* Start of the Expenses */}

                <h2>Expenses</h2>
                <form className='Calculator-form'>
                    <label>Name
                        <input
                        type='text'
                        name={this.state.name}
                        placeholder='Name'
                        />
                    </label>
                    <label>Description
                        <input
                        type='text'
                        name={this.state.name}
                        placeholder='Description'
                        />
                    </label>
                    <label>Frequency
                        <select>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Bi-Weekly">Bi-Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                    </label>
                    <label>Amount
                        <input
                        type='number'
                        name={this.state.name}
                        placeholder='$'
                        />
                    </label>
                    <button>+</button>
                </form>
            </div>
        );
    }
}
 
export default Calculator;