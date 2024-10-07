import {Listing} from './components/Listing'
import './App.css';
import etsy from "./data/etsy.json";
//фильтруем только активные
const newArrey = etsy.filter(item => item.state === "active");

function App() {
  return (
      <Listing items={newArrey}  />
  )
}

export default App
