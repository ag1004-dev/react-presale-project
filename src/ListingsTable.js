import StickyHeadTable from "./Table"
import approvdeImg from "./components/Image/approvedicon.svg"
const ListingTable = () => {
    return (
        <div className="p-[20px] border-[1px] w-[452px] h-[403px] rounded-[20px] mt-5">
            <a className="text-[16px] font-bold">Listing</a>
            <div className="pt-3 mt-[10px] flex justify-between pb-3 border-b border-slate-400">
                <div className="flex">
                    <a>CoinMarketCap</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a>28/05/2024</a>
                    <a className="ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-3 mt-[10px] flex justify-between pb-3 border-b border-slate-400">
                <div className="flex">
                    <a>CoinGecko</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a>28/05/2024</a>
                    <a className="ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-3 mt-[10px] flex justify-between pb-3 border-b border-slate-400">
                <div className="flex">
                    <a>DexView</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a>28/05/2024</a>
                    <a className="ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-3 mt-[10px] flex justify-between pb-3 border-b border-slate-400">
                <div className="flex">
                    <a>Dextools</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a>28/05/2024</a>
                    <a className="ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
        </div>
    )
}

export default ListingTable;