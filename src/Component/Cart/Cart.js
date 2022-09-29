import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import User from '../User/User';

const Cart = () => {
    const timeArray = [10, 20, 30, 40, 50]

    return (
        <div className='px-5 bg-white mt-[-26px] pt-5'>
            <User></User>
            <h3 className='text-2xl font-semibold mt-6 mb-6'>Add a break</h3>
            <div className='flex justify-around py-3 bg-base-100 rounded-md px-1'>
                {
                    timeArray.map(time => <Break time={time}></Break>)
                }
            </div>
            <Details></Details>
        </div>
    );
};

export default Cart;