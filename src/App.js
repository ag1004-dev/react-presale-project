import logo from './logo.svg';
import './App.css';
import './assets/custom.css';
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
      <div class="flex justify-between h-full mx-auto mt-[60px] p-[50px] pt-0 max-w-[1350px] voltcontainer">
        <div className='flex w-[795px] justify-between voltsale'>
          <div class="w-[328px] flex items-end">
            <div>
              <Totalsupply />
              <Affiliate />
              <Audit />
            </div>
          </div>
          <div class="w-[452px] mt-0px voltsale_right">
            <PresalePrice />
            <ListingTable />
          </div>
        </div>
        <div class="w-[440px] flex justify-start presale">
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
      <div className='w-[1200px] h-[2px] mx-auto bg-[#efefef] part_line'></div>
      <Patner /> 
    </div>
  );
}

export default App;
