import React from 'react';

const Exercise = ({ handleAddToList, exercise }) => {
    const { id, name, timeRequired, picture, benefits } = exercise;

    return (
        <div className="card w-full shadow-xl bg-white mt-5">
            <figure><img src={picture} alt="exercise" className='w-full h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{name}</h2>
                <p><span className='text-lg font-semibold'>Benefits: </span>{benefits.slice(0, 120)} ...</p>
                <p><span className='text-lg font-semibold'>Time required: </span>{timeRequired} minutes</p>
                <div className="card-actions justify-center mt-4 mb-0">
                    <button onClick={() => handleAddToList(exercise)} className="btn btn-accent w-full py-0">Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;