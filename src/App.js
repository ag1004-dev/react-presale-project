import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Totalsupply from './Totalsupply';
import Affiliate from './Affiliate';
import Audit from './Audit';
import PresalePrice from './PreSalePrice';
import ListingTable from './ListingsTable';
function App() {
  return (
    <div class="md:flex md:flex-wrap h-full">
      <div class="w-full md:w-1/3 p-4 flex">
        <div>
          <Totalsupply />
          <Affiliate />
          <Audit />
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <PresalePrice />
        <ListingTable />
      </div>
      <div class="w-full md:w-1/3 p-4 flex">
        <div class="bg-gray-300 flex-grow">Column 3</div>
      </div>
    </div>
  );
}

export default App;
