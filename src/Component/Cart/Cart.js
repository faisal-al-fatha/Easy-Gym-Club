import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import User from '../User/User';

const Cart = ({ cart }) => {
    const timeArray = [10, 20, 30, 40, 50]
    const handleBreakTime = (breakTime) => {
        console.log(breakTime);
        // const breakt = localStorage.getItem('break-time');
        localStorage.setItem('break-time', JSON.stringify(breakTime))
    }
    return (
        <div className='px-5 bg-white mt-[-26px] py-5'>
            <User></User>
            <h3 className='text-2xl font-semibold mt-6 mb-6'>Add a break</h3>
            <div className='flex justify-around py-3 bg-base-100 rounded-md px-1'>
                {
                    timeArray.map(breakTime => <Break key={breakTime} breakTime={breakTime} handleBreakTime={() => handleBreakTime(breakTime)}></Break>)
                }
            </div>
            <Details cart={cart} ></Details>
        </div>
    );
};

export default Cart;