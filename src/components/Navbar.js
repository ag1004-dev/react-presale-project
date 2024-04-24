import Logo from "./Image/Logo.svg"
import arrowImg from "./Image/arrow.svg"
import elecrtricImg from "./Image/electric.svg"
import arrowimgimg from "./Image/chevron-down.svg"
const Navbar = () => {
    return(
        <nav className=" relative bg-white flex justify-between items-center p-[50px] pt-0 pb-0 lg:max-w-[1350px] max-w-none w-full mx-auto">
            <div className="flex-shrink-0 mr-4">
                <img className="w-[100px] h-[24px]" src={Logo} alt="Logo" />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-row-reverse">
                <button className="bg-[#F6F6F6] hover:bg-green-600 text-black font-bold py-2 px-4 lg:w-[178px] w-fit y-[48px] lg:mr-[80px] md:mr-5 ml-5 rounded-[12px] flex items-center lg,md:justify-center justify-between backhomebutotn">
                    <img className="mr-2" src={arrowImg} />
                    <a className="font-[InterRegular] backhome"><span className='lg:block md:block hidden'>Back to Home</span></a>
                </button>
                <button className="bg-[#232323] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-[12px] lg:w-[288px] md:w-[288px] w-[150px] h-[48px] flex items-center justify-center addressbutton">
                    <img className="mr-[5px] w-[24px] h-[24px]" src={elecrtricImg}></img>
                    <a className="font-[InterRegular] truncate">0x09750ad...360fdb7</a>
                    <img className="ml-1" src={arrowimgimg}></img>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;