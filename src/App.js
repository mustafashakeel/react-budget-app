
import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spend from './components/Spend';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <h1 className="mt-3" > React Budget Plannner </h1>

      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <Spend />
        </div>


      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>

      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpense />
        </div>

      </div>
    </div>
  );
}

export default App;
