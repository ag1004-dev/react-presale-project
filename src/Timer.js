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
        <div className='w-[440px] h-[353px] border-[1px] border-[#EFEFEF] p-[16px] rounded-[20px]'>
            <div className='items-center flex h-1/4 justify-between border-b-[2px]'>
                <div className='flex'>
                    <div><a className='text-[16px] font-bold mr-[10px]'>Pre-Sale Start</a></div>
                    <div><img src={soonImg} /></div>
                </div>
                <div className="text-center">
                    <div className="flex justify-center items-center space-x-4">
                        {timeLeft.days > 0 && (
                            <div className="flex flex-col items-center">
                                <div className="text-[20px] font-bold text-black bg-white border-[2px] rounded-lg w-[40px] h-[40px] flex justify-center items-center">{timeLeft.days}</div>
                                <div className="text-sm text-[#A0A0A0]">Days</div>
                            </div>
                        )}
                        <div className="flex flex-col items-center">
                            <div className="text-[20px] font-bold text-black bg-white rounded-lg border-[2px] w-[40px] h-[40px] flex justify-center items-center">{timeLeft.hours}</div>
                            <div className="text-sm text-[#A0A0A0]">Hours</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-[20px] font-bold text-black bg-white rounded-lg border-[2px] w-[40px] h-[40px] flex justify-center items-center">{timeLeft.minutes}</div>
                            <div className="text-sm text-[#A0A0A0]">Min</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-[20px] font-bold text-black bg-white rounded-lg border-[2px] w-[40px] h-[40px] flex justify-center items-center">{timeLeft.seconds}</div>
                            <div className="text-sm text-[#A0A0A0]">Sec</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-1/5 mt-[16px] border-b-[1px]'>
                <div className=' flex justify-between'>
                <div>
                    <a className='text-[#A0A0A0] mr-[10px]'>Amount Funded</a>
                    <span>0 SOL</span>
                </div>
                <div className='flex'>
                    <div className='items-center mr-1'>
                    <a className='text-[#A0A0A0]'>0</a>
                    </div>
                    <div><img className='w-[18px] h-[25px]' src={usericon} /></div>
                </div>
                </div>
                <div className='w-[400px] h-[13px] bg-[#F7F7F7] mt-[10px] rounded-[10px]' />
            </div>
            <div className='h-1/4 mt-[16px]'>
                <div className=' flex justify-between'>
                <div>
                    <a className='text-[#A0A0A0] mr-[10px] text-[12px]'>Available Balance:</a>
                </div>
                <div className='flex'>
                    <div className='items-center mr-1'>
                    <a className='text-[#A0A0A0] text-[12px]'>5.434523 SOL</a>
                    </div>
                </div>
                </div>
                <div class="flex items-center relative">
                <input
                    placeholder="0.1"
                    class="border border-gray-400 p-4 w-[400px] h-[40px] rounded-[13px] border-opacity-20"
                />
                <img src={solmaximg} class="absolute items-end ml-[100px] w-[800px] h-[25px]" alt="Search Icon" />
            </div>
            </div>
            <div className='h-1/4'>
                <button className='flex w-[400px] h-[48px] items-center justify-center bg-[#393939]  rounded-[12px]'>
                    <a className='text-white mr-2'>Connect Wallet</a>
                    <img src={walletbtnImg}></img>
                </button>
            </div>
        </div>
    );
}

export default CountdownTimer;