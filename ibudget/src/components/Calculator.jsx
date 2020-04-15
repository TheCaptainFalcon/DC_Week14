import React, { Component } from 'react';
import './css/Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Card, CardDeck } from 'react-bootstrap';

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
            <fieldset className='formFieldset'>
                <legend className='formLegend'>{index}</legend>
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
            <fieldset className='formFieldset'>
                <legend className='formLegend'>{index}</legend>
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
        
        const roundedIncomeTotal = Math.round((addIncomeTotal + Number.EPSILON) * 100) / 100
        const roundedExpenseTotal = Math.round((addExpenseTotal + Number.EPSILON) * 100) / 100

        this.setState({
            incomeTotal : roundedIncomeTotal,
            expenseTotal: roundedExpenseTotal
        })
        // dev test
        console.log(roundedIncomeTotal);
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
                <h1>Monthly Summary</h1>
                <CardDeck>
                    <Card className='Card-summary'>
                        <Card.Body>
                        <Card.Title><h4>Income</h4></Card.Title>
                        <Card.Text>
                            <h3>${this.state.incomeTotal}</h3>
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className='Card-summary'>
                        <Card.Body>
                        <Card.Title><h4>Balance</h4></Card.Title>
                        <Card.Text>
                            <h3>${this.state.incomeTotal - this.state.expenseTotal}</h3>
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className='Card-summary'>
                        <Card.Body>
                        <Card.Title><h4>Expense</h4></Card.Title>
                        <Card.Text>
                            <h3>$({this.state.expenseTotal})</h3>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <div className='analysis'>
                <h1>Budget Analysis</h1>
                <Tabs defaultActiveKey="start" id="Budget-analysis">
                    <Tab eventKey="start" title="Start">
                        <br/>
                       <p>To get started, enter your monthly income and/or expense data and press the "Calculate" button.</p>
                       <p>You can then view the in-depth data breakdown based on the various tabs.</p>
                    </Tab>
                    <Tab eventKey="daily" title="Daily">
                        <br/>
                        <p>Daily Income: ${this.state.incomeTotal/30}</p>
                        <p>Daily Expense: $({this.state.expenseTotal/30})</p>
                        <p>Daily Balance: ${(this.state.incomeTotal - this.state.expenseTotal)/30}</p>
                    </Tab>
                    <Tab eventKey="weekly" title="Weekly">
                        <br/>
                        <p>Weekly Income: ${this.state.incomeTotal/4}</p>
                        <p>Weekly Expense: $({this.state.expenseTotal/4})</p>
                        <p>Weekly Balance: ${(this.state.incomeTotal - this.state.expenseTotal)/4}</p>
                    </Tab>
                    <Tab eventKey="biweekly" title="Bi-Weekly">
                        <br/>
                        <p>Bi-Weekly Income: ${this.state.incomeTotal/2}</p>
                        <p>Bi-Weekly Expense: $({this.state.expenseTotal/2})</p>
                        <p>Bi-Weekly Balance: ${(this.state.incomeTotal - this.state.expenseTotal)/2}</p>
                    </Tab>
                    <Tab eventKey="annual" title="Annual">
                        <br/>
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