import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Totalsupply from './Totalsupply';
import Affiliate from './Affiliate';
import Audit from './Audit';
import PresalePrice from './PreSalePrice';
import ListingTable from './ListingsTable';
import CountdownTimer from './Timer';
function App() {
  const targetDate = new Date('2024-12-31T23:59:59');
  return (
    <div className='mt-[20px]'>
      <Navbar />
    <div class="flex sm:flex-wrap h-full mt-[22px]">

      <div class="w-full md:w-1/3 p-4 flex items-end justify-end">
        <div>
          <Totalsupply />
          <Affiliate />
          <Audit />
        </div>
      </div>
      <div class="w-full md:w-1/4 p-4">
        <PresalePrice />
        <ListingTable />
      </div>
      <div class="w-full md:w-1/3 p-4 flex">
        <CountdownTimer targetDate={targetDate}/>
      </div>
    </div>
    </div>
  );
}

export default App;
