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
                    <p><span className='font-semibold'>Answer:</span> React is used to build rich graphical user interfaces (UIs). It is based on the concept of reusable components, which allows you to create complex UIs out of small isolated pieces of code called components </p>
                    <p>React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                    <p>React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
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