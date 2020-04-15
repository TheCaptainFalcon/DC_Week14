import React, { Component } from 'react';
import './css/Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';

class Calculator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        income: [
            {Name: "", Description: "", Amount:''}
        ],
        expense: [
            { Name:'', Description:'', Amount:''}
        ],
        incomeTotal: 0,
        expenseTotal: 0
      };
    }
    
    handleAddIncome(){
      this.setState(prevState => (
          { income: [...prevState.income, { Name: "", Description: "", Amount:''}]}
          ))
    }

    handleAddExpense(){
      this.setState(prevState => (
          { expense: [...prevState.expense, { Name: "", Description: "", Amount:''}]}
          ))
    }
    
    incomeForm(){
       return this.state.income.map((element, index) => (
         <div className="Calculator-income" key={index}>
            <fieldset>
                <legend>{index}</legend>
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
                value='Remove [-]' 
                onClick={this.handleRemoveIncome.bind(this, index)}
                />
                </fieldset>
            </div>          
        ))
    }
    expenseForm(){
       return this.state.expense.map((element, index) => (
         <div key={index}>
            <fieldset>
                <legend>{index}</legend>
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
                <label>Amount
                    <input 
                    type="number"
                    name="Amount" 
                    placeholder="$" 
                    value={element.Amount ||''} 
                    onChange={this.handleExpenseChange.bind(this, index)} 
                    />
                </label>
                <input type='button' value='Remove [-]' onClick={this.handleRemoveExpense.bind(this, index)}/>
            </fieldset>
         </div>          
       ))
    }
    
    handleIncomeChange(i, e) {
        const { name, value } = e.target;
        let income = [...this.state.income];
        income[i] = {...income[i], [name]: value};
        this.setState({ income });
        //dev test
        console.log(this.state.income)
    }
    handleExpenseChange(i, e) {
        const { name, value } = e.target;
        let expense = [...this.state.expense];
        expense[i] = {...expense[i], [name]: value};
        this.setState({ expense });
        //dev test
        console.log(this.state.income)
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
        const addIncomeTotal = this.state.income.reduce((totalAmount, incomeAmount) => 
        totalAmount + parseFloat(incomeAmount.Amount, 10), 0);

        const addExpenseTotal = this.state.expense.reduce((totalAmount, expenseAmount) =>
        totalAmount + parseFloat(expenseAmount.Amount, 10), 0);

        this.setState({
            incomeTotal : addIncomeTotal,
            expenseTotal: addExpenseTotal
        })
        // dev test
        console.log(addIncomeTotal);
        console.log('Income was submitted: ' + JSON.stringify(this.state.income));
        console.log('Expense was submitted: ' + JSON.stringify(this.state.expense));
    };

    handleReset(event) {
        event.preventDefault();
        this.setState({
            incomeTotal: 0,
            expenseTotal: 0,
            income: [
                {Name: "", Description: "", Amount:''}
            ],
            expense: [
                { Name:'', Description:'', Amount:''}
            ]
        });
    };
  
    render() {
      return (
        <div className='Calculator'>
            <div className='Calculator-summary'>
                <h1>Monthly Budget Summary</h1>
                <p id="Calculator-income-summary">Income: ${this.state.incomeTotal}</p>
                <p id="Calculator-expense-summary">Expense: $({this.state.expenseTotal})</p>
                <p id="Calculator-balance-summary">Balance: ${this.state.incomeTotal - this.state.expenseTotal}</p>
            </div>
            <div className='Calculator-summary-analysis'>
                <h1>Budget Analysis</h1>
                <Tabs defaultActiveKey="start" id="Budget-analysis">
                    <Tab eventKey="start" title="Start">
                       <p>To get started, enter your monthly income and/or expense data and press the "Calculate" button.</p>
                       <p>You can then view the in-depth data breakdown based on the various tabs.</p>
                    </Tab>
                    <Tab eventKey="daily" title="Daily">
                        <p>Daily Income: ${this.state.incomeTotal/30}</p>
                        <p>Daily Expense: $({this.state.expenseTotal/30})</p>
                        <p>Daily Balance: ${(this.state.incomeTotal - this.state.expenseTotal)/30}</p>
                    </Tab>
                    <Tab eventKey="weekly" title="Weekly">
                        <p>Weekly Income: ${this.state.incomeTotal/4}</p>
                        <p>Weekly Expense: $({this.state.expenseTotal/4})</p>
                        <p>Weekly Balance: ${(this.state.incomeTotal - this.state.expenseTotal)/4}</p>
                    </Tab>
                    <Tab eventKey="biweekly" title="Bi-Weekly">
                        <p>Bi-Weekly Income: ${this.state.incomeTotal/2}</p>
                        <p>Bi-Weekly Expense: $({this.state.expenseTotal/2})</p>
                        <p>Bi-Weekly Balance: ${(this.state.incomeTotal - this.state.expenseTotal)/2}</p>
                    </Tab>
                    <Tab eventKey="annual" title="Annual">
                        <p>Annual Income: ${this.state.incomeTotal*12}</p>
                        <p>Annual Expense: $({this.state.expenseTotal*12})</p>
                        <p>Annual Balance: ${(this.state.incomeTotal - this.state.expenseTotal)*12}</p>
                    </Tab>
                </Tabs>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className='Calculator-income'>
                    <h2>Income</h2>
                    {this.incomeForm()}
                    <input type='button' value='Add [+]' onClick={this.handleAddIncome.bind(this)}/>
                </div>
                <div className='Calculator-expense'>   
                    <h2>Expense</h2>
                    {this.expenseForm()}
                    <input type='button' value='Add [+]' onClick={this.handleAddExpense.bind(this)}/>
                </div>
                <input type="submit" value="Calculate" />
            </form>
            <form onSubmit={this.handleReset.bind(this)}>
                <input type="submit" value="Reset"/>
            </form> 
        </div>
      );
    }
  }
  
export default Calculator;