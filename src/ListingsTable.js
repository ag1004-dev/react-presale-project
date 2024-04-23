import StickyHeadTable from "./Table"
import approvdeImg from "./components/Image/approvedicon.svg"
import pendingimg from "./components/Image/pendingicon.svg"
const ListingTable = () => {
    return (
        <div className="p-[20px] border-[1px] w-[452px] h-[418px] rounded-[20px] mt-4">
            <a className="text-[16px] font-bold">Listing</a>
            <div className="pt-2 mt-[8px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a>CoinMarketCap</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a>CoinGecko</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a>DexView</a>
                    <img className="text-[14px] ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a >Dextools</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a>Avedex</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a>Toolbit</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px]">
                <div className="flex">
                    <a>BitMart</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA]">06:00 UTC</a>
                </div>
            </div>
        </div>
    )
}

export default ListingTable;