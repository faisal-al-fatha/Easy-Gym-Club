import React from 'react';

const Details = ({ cart, breaktime }) => {
    let totalTime = 0;
    cart.forEach(exercise => {
        totalTime = totalTime + exercise.timeRequired
    });
    return (
        <div>
            <h3 className='text-2xl font-semibold mt-14 mb-3'>Exercise Details</h3>
            <div className='w-full p-5 bg-base-100 rounded-md flex justify-between my-3'>
                <p className='text-lg font-semibold'>Total exercise: </p>
                <p>{cart.length}</p>
            </div>

            <div className='w-full p-5 bg-base-100 rounded-md flex justify-between my-3'>
                <p className='text-lg font-semibold'>Exercise time: </p>
                <p>{totalTime} minutes</p>
            </div>

            <div className='w-full p-5 bg-base-100 rounded-md flex justify-between my-3'>
                <p className='text-lg font-semibold'>Break time: </p>
                <p>{breaktime} seconds</p>
            </div>

            <div className="card-actions justify-center mt-16 mb-4">
                <button className="btn btn-accent w-full py-0">Activity Completed</button>
            </div>
        </div>
    );
};

export default Details;