import React from 'react';

const Break = ({ time }) => {
    return (
        <div>

            <button className="btn btn-circle btn-outline bg-white text-sm font-bold ">
                {time} s
            </button>

        </div>
    );
};

export default Break;