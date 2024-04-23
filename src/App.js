import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Totalsupply from './Totalsupply';
import Affiliate from './Affiliate';
import Audit from './Audit';
import PresalePrice from './PreSalePrice';
import ListingTable from './ListingsTable';
import CountdownTimer from './Timer';
import Patner from './ourpatners';
function App() {
  const targetDate = new Date('2024-12-31T23:59:59');
  return (
    <div className='mt-[20px]'>
      <Navbar />
      <div class="flex flex-wrap h-full mt-[22px] border-b-2 py-10">
        <div class="w-full md:w-1/3 p-4 flex items-end justify-end">
          <div>
            <Totalsupply />
            <Affiliate />
            <Audit />
            
          </div>
        </div>
        <div class="w-full lg:w-1/4 md:w-1/4 py-4 mt-0px">
          <PresalePrice />
          <ListingTable />
        </div>
        <div class="w-full md:w-1/3 py-4 flex justify-start ">
          <CountdownTimer targetDate={targetDate} />

        </div>
        
      </div>
      <Patner /> 
    </div>
  );
}

export default App;
