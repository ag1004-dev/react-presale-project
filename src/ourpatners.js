import levelImg from "./components/Image/level.svg"
import handShakeImg from "./components/Image/handshake 1.svg"

const Patner = () => {
    return (
        <div className="rounded-[15px] bg-white w-[1250px] h-[119px] border-[#F4F4F4] border-[1px] p-3 m-[290px] mt-[15px]">
            <div className="h-1/3 flex justify-between">
                <div className="flex">
                    <img  src={handShakeImg}></img>
                    <a className="ml-2 font-[InterRegular]">Our Patners</a>
                </div>
                <div>
                    <img src={levelImg}></img>
                </div>
            </div>
            <div className="flex h-1/2  border-[#F4F4F4] mt-3">
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
                <div className="w-[120px] h-[40px] bg-[#F1F1F1] mr-[17px]"></div>
            </div>
        </div>

    )
}
export default Patner;