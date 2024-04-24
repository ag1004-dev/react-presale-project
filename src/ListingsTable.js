import StickyHeadTable from "./Table"
import approvdeImg from "./components/Image/approvedicon.svg"
import pendingimg from "./components/Image/pendingicon.svg"
const ListingTable = () => {
    return (
        <div className="lg:w-[440px] md:w-[440px] w-full rounded-[20px] mt-4 h-[403px] border-[1px]">
        <div className="p-[20px] lg:w-[430px] md:w-[440px] w-full rounded-[20px] mt-4 overflow-y-scroll h-[383px]">   
            <a className="absolute text-[20px] font-bold  font-[InterRegular] bg-white w-[400px] mt-[-20px] h-[33px] mr-[20px]">Listing</a>
            <div className="pt-2 mt-[8px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className="text-[14px] font-[InterRegular] ">CoinMarketCap</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className="text-[14px]  font-[InterRegular]">CoinGecko</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className="text-[14px]  font-[InterRegular]">DexView</a>
                    <img className="text-[14px] ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]" >Dextools</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">Avedex</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">Toolbit</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">BitMart</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]" >Dextools</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">Avedex</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">Toolbit</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">BitMart</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className="text-[14px]  font-[InterRegular]" >Dextools</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">Avedex</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">Toolbit</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">BitMart</a>
                    <img className="ml-[10px]" src={pendingimg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">CoinGecko</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">DexView</a>
                    <img className="text-[14px] ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">CoinGecko</a>
                    <img className="ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
            <div className="pt-2 mt-[10px] flex justify-between pb-[8px] border-b border-[#EFEFEF]">
                <div className="flex">
                    <a className=" text-[14px] font-[InterRegular]">DexView</a>
                    <img className="text-[14px] ml-[10px]" src={approvdeImg}></img>
                </div>
                <div className="flex">
                    <a className="text-[13px] font-[InterRegular]">28/05/2024</a>
                    <a className="text-[13px] ml-[6px] text-[#AAAAAA] font-[InterRegular]">06:00 UTC</a>
                </div>
            </div>
           
        </div>
        </div>
    )
}

export default ListingTable;