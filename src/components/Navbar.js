import Logo from "./Image/Logo.svg"
import arrowImg from "./Image/arrow.svg"
const Navbar = () => {
    return(
        <nav className=" relative bg-white pl-[305px] pr-[350px] p-4 flex justify-between items-center">
            <div className="flex-shrink-0 mr-4">
                <img className="w-[100px] h-[24px]" src={Logo} alt="Logo" />
            </div>
            <div className="flex">
                <button className="bg-[#F6F6F6] hover:bg-green-600 text-black font-bold py-2 px-4 w-[178px] y-[48px] rounded-[12px] flex">
                    <img src={arrowImg} />
                    Back to Home
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                0x09750ad...360fdb7
                </button>
            </div>
        </nav>
    )
}
export default Navbar;