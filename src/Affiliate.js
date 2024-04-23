
import usericon from "./components/Image/usersicon.svg"
import helpicon from "./components/Image/helpicon.svg"
import snackdollars from "./components/Image/sack-dollar.svg"
import copyicon from "./components/Image/copyIcon.svg"
const Affiliate = () => {
    return (
        <div className="rounded-[15px] bg-white w-[328px] h-[227px] border-[#F4F4F4] border-[1px] p-[20px] mt-[15px]">
            <div className="h-1/4 flex justify-between">
                <div className="flex justify-between">
                    <div className="flex justify-between">
                        <img className="w-[30px] h-[30px] mr-[10px]" src={usericon}></img>
                        <a className="font-bold text-[16px] items-center">Affiliate</a>
                    </div>
                </div>
                <div>
                    <img src={helpicon} />
                </div>
            </div>
            <div className="h-1/4">
                <a className="flex">
                    <span className="text-black">Earn 10% Commission
                        <span className="text-[#BBBBBB]"> on Contributions from Your Friends and Partners.</span>
                    </span>
                </a>

            </div>
            <div className="justify-between flex h-1/4 border-t border-[#F4F4F4] mt-3 items-center">
                <div className="flex">
                    <img className="w-[25px] h-[28px]" src={snackdollars}></img>
                    <a className="font-bold ml-2">Current Reward</a>
                </div>
                <div className="text-[#5ED6A4]">
                    10.687 SOL
                </div>
            </div>
            <div class="flex justify-end items-center relative">
                <input
                    placeholder="volt.com/seed/af-2352"
                    class="border border-gray-400 p-4 w-[288px] h-[40px] rounded-[13px] border-opacity-20"
                />
                <img src={copyicon} class="absolute mr-2 w-[75px] h-[20px]" alt="Search Icon" />
            </div>
        </div>

    )
}
export default Affiliate;