import auditImg from "./components/Image/audit.svg"
import auditbuttonImg from "./components/Image/auditbutimg.svg"
const Patner = () => {
    return (
        <div className="rounded-[15px] bg-white w-[328px] h-[172px] border-[#F4F4F4] border-[1px] p-[20px] mt-[15px]">
            <div className="h-1/3 flex justify-between items-">
                <div className="flex justify-between">
                    <div className="flex justify-between">
                        <img className="w-[30px] h-[30px] mr-[10px]" src={auditImg}></img>
                        <a className="font-bold text-[16px]">Audit</a>
                    </div>

                </div>

            </div>
            <div className="text-[#BBBBBB]">
                Our Smart Contract is Securely Audited for Reliability.
            </div>
            <div className="flex h-1/3  border-[#F4F4F4] mt-3">
                <button className="flex border-[#F4F4F4] border-[2px] rounded-[12px] w-[145px] h-[40px] items-center justify-center shadow-sm">
                    <img src={auditbuttonImg} />
                    <a className="ml-[6px] font-bold">View Aduit</a>

                </button>
            </div>
        </div>

    )
}
export default Patner;