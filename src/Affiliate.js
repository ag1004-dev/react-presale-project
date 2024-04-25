import { useState } from "react"
import usericon from "./components/Image/usersicon.svg"
import helpicon from "./components/Image/helpicon.svg"
import snackdollars from "./components/Image/sack-dollar.svg"
import copyicon from "./components/Image/copyIcon.svg"
const Affiliate = () => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    return (
        <div className="rounded-[15px] bg-white lg:w-[100%] md:w-[95%] lg:ml-0  md:ml-[20px] h-[227px] border-[#F4F4F4] border-[1px] p-[20px] mt-[15px]">
            <div className="h-1/4 flex justify-between">
                <div className="flex justify-between">
                    <div className="flex justify-between">
                        <img className="w-[26px] h-[26px] mr-[10px]" src={usericon}></img>
                        <a className=" text-[18px] items-center font-[InterRegular] font-semibold ">Affiliate</a>
                    </div>
                </div>
                <div>
                    <button
                        onMouseEnter={() => setIsTooltipVisible(true)}
                        onMouseLeave={() => setIsTooltipVisible(false)}
                        className="relative flex items-center justify-center p-2"
                    >
                        <img src={helpicon} alt="Help" className="w-[18px] h-[18px]" />
                        {isTooltipVisible && (
                            <span className="flex flex-col items-start justify-start absolute right-full top-full w-[428px] h-[88px] py-[10px] px-[20px] bg-[#FAFAFA] text-black text-xs rounded-[15px] shadow-lg text-left">
                                <p className="flex items-start justify-start text-[14px] font-semibold font-[InterRegular]">Please note:</p>
                                <a className="flex items-start justify-start mt-2 text-[12px] font-[InterRegular]">Upon the launch of the token, your allocated SOL rewards will be distributed directly to the wallet you connected during the presale, and you will receive your earnings in SOL. </a>
                            </span>
                        )}
                    </button>
                </div>
            </div>
            <div className="h-1/4">
                <a className="flex">
                    <span className="text-black font-[InterRegular] text-[14px]">Earn 10% Commission
                        <span className="text-[#BBBBBB] font-[InterRegular] text-[14px]"> on Contributions from Your Friends and Partners.</span>
                    </span>
                </a>

            </div>
            <div className="justify-between flex h-1/4 border-t border-[#F4F4F4] mt-3 items-center">
                <div className="flex">
                    <img className="w-[18px] h-[18px]" src={snackdollars}></img>
                    <a className="font-bold ml-2 text-[14px]  font-[InterRegular]">Current Reward</a>
                </div>
                <div className="text-[#5ED6A4] text-[14px]  font-[InterRegular]">
                    10.687 SOL
                </div>
            </div>
            <div class="flex justify-end items-center relative">
                <input
                    placeholder="volt.com/seed/af-2352"
                    class="border border-gray-400 p-4 w-[288px] h-[40px] rounded-[13px] border-opacity-20  font-[InterRegular]"
                />
                <img src={copyicon} class="absolute mr-2 w-[75px] h-[20px]" alt="Search Icon" />
            </div>
        </div>

    )
}
export default Affiliate;