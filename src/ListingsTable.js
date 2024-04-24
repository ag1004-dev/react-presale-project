import StickyHeadTable from "./Table"
import approvdeImg from "./components/Image/approvedicon.svg"
import pendingimg from "./components/Image/pendingicon.svg"
const ListingTable = () => {
    return (
        <div className="p-[20px] border-[1px] lg:w-[440px] md:w-[440px] w-full h-[418px] rounded-[20px] mt-4 overflow-auto scrollbar-thin">
            <a className="text-[20px] font-bold  font-[InterRegular]">Listing</a>
            <div className="pt-2 mt-[8px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">CoinMarketCap</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">CoinGecko</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">DexView</a>
                    <img className="text-[14px] ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]" >Dextools</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">Avedex</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">Toolbit</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px]">
                <div className="flex">
                    <a className=" font-[InterRegular]">BitMart</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]" >Dextools</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">Avedex</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">Toolbit</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px]">
                <div className="flex">
                    <a className=" font-[InterRegular]">BitMart</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]" >Dextools</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">Avedex</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" font-[InterRegular]">Toolbit</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px]">
                <div className="flex">
                    <a className=" font-[InterRegular]">BitMart</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[14px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
        </div>
    )
}

export default ListingTable;