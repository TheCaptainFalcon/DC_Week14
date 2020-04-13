import React, { Component } from 'react';
import './css/Calculator.css';

class Calculator2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        income: [
            {Name: "", Description: "", Frequency:'', Amount:''}
        ],
        expense: [
            { Name:'', Description:'', Frequency:'', Amount:''}
        ]
      };
    }
    
    handleAddIncome(){
      this.setState(prevState => (
          { income: [...prevState.income, { Name: "", Description: "", Frequency:'', Amount:''}]}
          ))
    }

    // handleIncomeFrequency = (event) => {
    //     this.setState({
    //         Frequency: event.target.value
    //     })
    // }

    handleAddExpense(){
      this.setState(prevState => (
          { expense: [...prevState.expense, { Name: "", Description: "", Frequency:'', Amount:''}]}
          ))
    }

    // Either need to assign as state separate from whole data set or implement within
    handleExpenseFrequency(e){
        this.setState(prevState => (
             { expense: [...prevState.expense, { Frequency:e.target.value} ] }
        ))}
    
    incomeForm(){
       return this.state.income.map((element, index) => (
         <div key={index}>
            <label>Name
                <input 
                type="text"
                name="Name" 
                placeholder="Name" 
                value={element.Name ||''} 
                onChange={this.handleIncomeChange.bind(this, index)} 
                />
            </label>
            <label>Description
                <input 
                type="text"
                name="Description" 
                placeholder="Description" 
                value={element.Description ||''} 
                onChange={this.handleIncomeChange.bind(this, index)} 
                />
            </label>
            <label>Frequency
                <input 
                placeholder="Frequency" 

                name="Frequency" 
                value={element.Frequency ||''} 
                onChange={this.handleIncomeChange.bind(this, index)} 
                />
            </label>
            <label>Amount
                <input 
                type="number"
                name="Amount" 
                placeholder="$" 
                value={element.Amount ||''} 
                onChange={this.handleIncomeChange.bind(this, index)} 
                />
            </label>
            <input 
            type='button' 
            value='-' 
            onClick={this.handleRemoveIncome.bind(this, index)}
            />
         </div>          
       ))
    }
    expenseForm(){
       return this.state.expense.map((element, index) => (
         <div key={index}>
             <label>Name
            <input 
                type="text"
                name="Name"
                placeholder="Name"  
                value={element.Name ||''} 
                onChange={this.handleExpenseChange.bind(this, index)} 
                />
            </label>
            <label>Description
                <input 
                type='text'
                name="Description" 
                placeholder="Description" 
                value={element.Description ||''} 
                onChange={this.handleExpenseChange.bind(this, index)} 
                />
            </label>
            <label>Frequency
                <select onChange={this.handleExpenseFrequency.bind(this)} >
                    <option value='30'>Daily</option>
                    <option value='4'>Weekly</option>
                    
                </select>
                {/* value={element.Frequency ||''}  */}    
            </label>
            <label>Amount
                <input 
                type="number"
                name="Amount" 
                placeholder="$" 
                value={element.Amount ||''} 
                onChange={this.handleExpenseChange.bind(this, index)} 
                />
            </label>
            <input type='button' value='-' onClick={this.handleRemoveExpense.bind(this, index)}/>
         </div>          
       ))
    }
    
    handleIncomeChange(i, e) {
        const { name, value } = e.target;
        let income = [...this.state.income];
        income[i] = {...income[i], [name]: value};
        this.setState({ income });
    }
    handleExpenseChange(i, e) {
        const { name, value } = e.target;
        let expense = [...this.state.expense];
        expense[i] = {...expense[i], [name]: value};
        this.setState({ expense });
    }
    
    handleRemoveIncome(i){
        let income = [...this.state.income];
        income.splice(i, 1);
        this.setState({ income });
    }
    handleRemoveExpense(i){
        let expense = [...this.state.expense];
        expense.splice(i, 1);
        this.setState({ expense });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        alert('Income was submitted: ' + JSON.stringify(this.state.income));
        alert('Expense was submitted: ' + JSON.stringify(this.state.expense));
    };
  
    render() {
      return (
        <div className='Calculator'>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className='Calculator-income'>
                    <h2>Income</h2>
                    {this.incomeForm()}
                    <input type='button' value='+' onClick={this.handleAddIncome.bind(this)}/>
                </div>
                <div className='Calculator-expense'>   
                    <h2>Expense</h2>
                    {this.expenseForm()}
                    <input type='button' value='+' onClick={this.handleAddExpense.bind(this)}/>
                </div>
                <input type="submit" value="Calculate" />
            </form>
        </div>
      );
    }
  }
  
export default Calculator2;