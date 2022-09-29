import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 gap-4'>
            {/* Question 1 */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white">
                <div className="collapse-title text-xl font-medium">
                    How does react work?
                </div>
                <div className="collapse-content">
                    <p><span className='font-semibold'>Answer:</span> </p>
                </div>
            </div>
            {/* Question 2 */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white">
                <div className="collapse-title text-xl font-medium">
                    Difference between props and state.
                </div>
                <div className="collapse-content">
                    <p><span className='font-semibold'>Answer:</span> In state the Data is passed within the component only, but in props data is passed from one component to another.</p>
                    <p>state is Mutable ( can be modified) but props is Immutable (cannot be modified).</p>
                    <p>State is both readable and writeable but props are only readable.</p>
                </div>
            </div>
            {/* Question 3 */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box bg-white mb-20">
                <div className="collapse-title text-xl font-medium">
                    Use of useEffect rather than using data load from API.
                </div>
                <div className="collapse-content">
                    <p><span className='font-semibold'>Answer:</span></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;