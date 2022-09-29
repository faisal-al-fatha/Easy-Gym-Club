import React from 'react';

const Break = ({ breakTime, handleBreakTime }) => {
    return (
        <div>

            <button onClick={() => handleBreakTime(breakTime)} className="btn btn-circle btn-outline bg-white text-sm font-bold ">
                {breakTime} s
            </button>

        </div>
    );
};

export default Break;