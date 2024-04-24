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
    <div className='mt-[20px] mx-auto'>
      <Navbar />
      <div class="flex flex-col-reverse lg:items-start items-center lg:flex-row justify-between h-full mx-auto mt-[60px] lg:p-[50px] md:p-[50px] p-5 pt-0 lg:max-w-[1350px] max-w-none">

        <div className='flex flex-col lg:w-[795px] md:w-[795px] w-full justify-between'>

          <div className='flex md:flex-row lg:flex-row justify-between gap-3 flex-col'>
            <div class="lg:w-[328px] md:w-[328px] w-full items-end">
              <Totalsupply />
            </div>
            <div class="lg:w-[452px] md:w-[452px] w-full mt-0px">
              <PresalePrice />
            </div>
          </div>

          <div className='lg:grid md:grid grid-rows-2 grid-flow-col gap-3 sm:flex sm:flex-col'>
            <div class="lg:w-[328px] md:w-[328px] w-full flex items-end row-span-1">
              <Affiliate />
            </div>
            <div class="lg:w-[452px] md:w-[452px] w-full mt-0px voltsale_right row-end-2 row-span-2">
              <ListingTable />
            </div>
            <div class="lg:w-[328px] md:w-[328px] w-full flex items-end row-start-1 col-start-1">
              <Audit />
            </div>
          </div>

        </div>

        <div class="lg:w-[440px] md:w-[440px] w-full flex justify-start lg:pb-0 pb-5">
          <CountdownTimer targetDate={targetDate} />
        </div>

      </div>

      <div className='lg:w-[1200px] md:w-4/5 h-[2px] mx-auto bg-[#efefef]'></div>

      <Patner />

    </div>
  );
}

export default App;
