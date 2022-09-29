import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import User from '../User/User';


const Cart = ({ cart }) => {
    const timeArray = [10, 20, 30, 40, 50]
    const [breaktime, setBreakTime] = useState(0);
    const handleBreakTime = (breakTime) => {
        setBreakTime(breakTime)
        localStorage.setItem('break-time', JSON.stringify(breakTime))
    }
    useEffect(() => {
        let time = 0;
        const stringTime = localStorage.getItem('break-time');
        if (stringTime) {
            time = JSON.parse(stringTime);
        }
        setBreakTime(time);
        console.log(breaktime);
    }, [])
    return (
        <div className='px-5 bg-white mt-[-26px] py-5'>
            <User></User>
            <h3 className='text-2xl font-semibold mt-6 mb-6'>Add a break</h3>
            <div className='flex justify-around py-3 bg-base-100 rounded-md px-1'>
                {
                    timeArray.map(breakTime => <Break key={breakTime} breakTime={breakTime} handleBreakTime={() => handleBreakTime(breakTime)}></Break>)
                }
            </div>
            <Details cart={cart} breaktime={breaktime} ></Details>
        </div>
    );
};

export default Cart;