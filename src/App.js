import shoppingBag from './images/shopping-211128-142332.jpg'
import man from './images/man-211128-142332.jpg'
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <img src={shoppingBag} alt='shopping bag' width="300px" />
      <h1>Grocery List</h1>
      <GroceryList/>
      <img src={ man } alt='man doing shopping' width="300px"/>
    </div>
  );
}

export default App;
