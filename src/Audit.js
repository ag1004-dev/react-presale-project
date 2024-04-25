import auditImg from "./components/Image/audit.svg"
import auditbuttonImg from "./components/Image/auditbutimg.svg"
const Audit = () => {
    return (
        <div className="rounded-[15px] bg-white w-full h-[172px] border-[#F4F4F4] border-[1px] p-[20px] items-center justify-center">
            <div className="h-1/3 flex justify-between items-">
                <div className="flex justify-between">
                    <div className="flex justify-between">
                        <img className="w-[18px] h-[20px] mr-[6px]" src={auditImg}></img>
                        <a className="font-bold text-[16px] font-[InterRegular]">Audit</a>
                    </div>

                </div>

            </div>
            <div className="text-[#BBBBBB] text-[14px] font-[InterRegular]">
                Our Smart Contract is Securely Audited for Reliability.
            </div>
            <div className="flex h-1/3  border-[#F4F4F4] mt-3">
                <button className="flex border-[#F4F4F4] border-[2px] rounded-[12px] w-[145px] h-[40px] items-center justify-center shadow-sm">
                    <img className="w-[24px] h-[24px]" src={auditbuttonImg} />
                    <a className="ml-[6px] font-[InterRegular]">View Aduit</a>

                </button>
            </div>
        </div>

    )
}
export default Audit;