import './App.css';
import {
  Header,
  Banner,
  Category,
  Footer,
  Discount
} from './component';
import PriceState from './context/PriceState';



function App() {
  return (
    <PriceState>

      <div className="App">

        <Header />
        <Discount />
        <Banner />
        <Category />
        <Footer />
      </div>


    </PriceState>
  );
}

export default App;
