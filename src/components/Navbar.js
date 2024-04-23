import Logo from "./Image/Logo.svg"
import arrowImg from "./Image/arrow.svg"
import elecrtricImg from "./Image/electric.svg"
import arrowimgimg from "./Image/chevron-down.svg"
const Navbar = () => {
    return(
        <nav className=" relative bg-white pl-[305px] pr-[380px] p-4 flex justify-between items-center">
            <div className="flex-shrink-0 mr-4">
                <img className="w-[100px] h-[24px]" src={Logo} alt="Logo" />
            </div>
            <div className="flex">
                <button className="bg-[#F6F6F6] hover:bg-green-600 text-black font-bold py-2 px-4 w-[178px] y-[48px] mr-[80px] rounded-[12px] flex items-center justify-center">
                    <img className="mr-2" src={arrowImg} />
                    Back to Home
                </button>
                <button className="bg-[#232323] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-[12px] w-[288px] h-[48px] flex items-center justify-center">
                    <img className="mr-[5px] w-[24px] h-[24px]" src={elecrtricImg}></img>
                    0x09750ad...360fdb7
                    <img className="ml-1" src={arrowimgimg}></img>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;