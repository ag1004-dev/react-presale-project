import voltcoin from "./components/Image/voltcoin.svg"
import walletbuttonImg from "./components/Image/walletbuton.svg"
import voltcoinImg from "./components/Image/voltvolt.svg"
const Totalsupply = () => {
    return (
        <div className="rounded-[15px] bg-white w-full h-[137px] border-[#F4F4F4] border-[1px] p-[20px]">
            <div className="h-1/2 flex justify-between">
                <div className="flex justify-between">
                    <div className="flex justify-between">
                        <img className="w-[30px] h-[30px] mr-[10px]" src={voltcoin}></img>
                        <a className="font-bold text-[20px] font-[InterRegular]">Volt</a>
                    </div>
                    <div className="rounded-[15px] w-[51px] h-[19px] bg-[#F1F1F1] ml-[15px] mt-[5px]">
                        <img src={voltcoinImg} />
                    </div>
                </div>
                <div>
                    <button className="flex border-[#F4F4F4] border-[2px] rounded-[12px] w-[102px] h-[36px] items-center justify-center shadow-sm">
                        <a className="mr-[6px] text-[16px] font-[InterRegular] text-[#D4D4D4]">Add to</a>
                        <img src={walletbuttonImg} />
                    </button>
                </div>
            </div>
            <div className="flex h-1/2 border-t border-[#F4F4F4]">
                <div className="mt-1">
                    <a  className="opacity-50 mt-5 font-[InterRegular] text-[12px]">Decimals</a>
                    <div className="">18</div>
                </div>
                <div className="ml-5 font-serif mt-1">
                    <a  className="opacity-50 mt-1 font-[InterRegular] text-[12px]">Total Supply</a>
                    <div className="font-[InterRegular]">1,000,000</div>
                </div>
            </div>
        </div>

    )
}
export default Totalsupply;