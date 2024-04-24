import React, { useState, useEffect } from 'react';
import soonImg from "./components/Image/soon.svg"
import usericon from "./components/Image/usericonwallet.svg"
import solmaximg from "./components/Image/solmax.svg"
import walletbtnImg from "./components/Image/walletbuton.svg"
function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className='w-full h-[353px] border-[1px] border-[#EFEFEF] p-[16px] rounded-[20px]'>
            <div className='items-center flex h-1/4 justify-between border-b-[2px]'>
                <div className='flex'>
                    <div><a className='text-[18px] font-bold mr-[10px]  font-[InterRegular]'>Pre-Sale Start</a></div>
                    <div className='lg:block md:block hidden'><img src={soonImg} /></div>
                </div>
                <div className="text-center">
                    <div className="flex justify-center items-center space-x-4">
                        {timeLeft.days > 0 && (
                            <div className="flex flex-col items-center">
                                <div className="text-[20px]  text-black bg-white border-[2px] rounded-lg w-[40px] h-[40px] flex justify-center items-center font-[InterRegular]">{timeLeft.days}</div>
                                <div className=" text-[#A0A0A0] text-[12px] font-[InterRegular]">Days</div>
                            </div>
                        )}
                        <div className="flex flex-col items-center">
                            <div className="text-[20px] text-black bg-white rounded-lg border-[2px] w-[40px] h-[40px] flex justify-center items-center font-[InterRegular]">{timeLeft.hours}</div>
                            <div className=" text-[#A0A0A0] text-[12px]  font-[InterRegular]">Hours</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-[20px] text-black bg-white rounded-lg border-[2px] w-[40px] h-[40px] flex justify-center items-center font-[InterRegular]">{timeLeft.minutes}</div>
                            <div className="text-[#A0A0A0] text-[12px] font-[InterRegular]">Min</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-[20px] text-black bg-white rounded-lg border-[2px] w-[40px] h-[40px] flex justify-center items-center font-[InterRegular]">{timeLeft.seconds}</div>
                            <div className="text-[#A0A0A0] text-[12px] font-[InterRegular]">Sec</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-1/5 mt-[16px] border-b-[1px]'>
                <div className=' flex justify-between'>
                    <div>
                        <a className='text-[#A0A0A0] mr-[10px] text-[14px] font-[InterRegular]'>Amount Funded</a>
                        <span className=' font-[InterRegular] text-[14px]'>0 SOL</span>
                    </div>
                    <div className='flex'>
                        <div className='items-center mr-1'>
                            <a className='text-[#A0A0A0] text-[14px] mt-[3px]'>0</a>
                        </div>
                        <div><img className='w-[18px] h-[18px] mt-[3px] lg:block md:block hidden' src={usericon} /></div>
                    </div>
                </div>
                <div className='w-full h-[13px] bg-[#F7F7F7] mt-[10px] rounded-[10px]' />
            </div>
            <div className='h-1/4 mt-[16px]'>
                <div className=' flex justify-between'>
                    <div>
                        <a className='text-[#A0A0A0] mr-[10px] text-[12px] font-[InterRegular]'>Available Balance:</a>
                    </div>
                    <div className='flex'>
                        <div className='items-center mr-1'>
                            <a className='text-[#A0A0A0] text-[12px] font-[InterRegular]'>5.434523 SOL</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center relative">
                    <input
                        placeholder="0.1"
                        className="border border-gray-400 p-4 w-full h-[40px] rounded-[13px] border-opacity-20"
                    />
                    <img src={solmaximg} className="absolute right-0 pr-2 h-[25px]" alt="Search Icon" />
                </div>
            </div>
            <div className='h-1/4'>
                <button className='flex w-full h-[48px] items-center justify-center bg-[#393939]  rounded-[12px]'>
                    <a className='text-white mr-2 font-[InterRegular] text-[16px]'>Connect Wallet</a>
                    <img src={walletbtnImg}></img>
                </button>
            </div>
        </div>
    );
}

export default CountdownTimer;