import React from 'react';

const User = () => {
    return (
        <div>
            <div className='flex mb-10'>
                <img className='w-16 rounded-full h-16' src="https://images.unsplash.com/photo-1663344467443-96bee7dc5738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className='flex flex-col ml-4'>
                    <h3 className='text-lg font-semibold'>Zunayed Siddique</h3>
                    <p><small>Sydney,Australia</small></p>
                </div>
            </div>
            <div className='flex justify-around p-5 bg-base-100 rounded-md'>
                <div className='flex flex-col'>
                    <h2><span className='text-xl font-bold'>75</span> KG</h2>
                    <p>Weight</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-bold'>6.1</h2>
                    <p>Height</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-bold'>25</h2>
                    <p>Age</p>
                </div>
            </div>

        </div>
    );
};

export default User;